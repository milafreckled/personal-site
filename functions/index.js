/* eslint-disable require-jsdoc */
const functions = require("firebase-functions");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const listId = "ce7f163d14";
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function subscribeMailchimp(user) {
  mailchimp.setConfig({
    apiKey: "a9343263630dc7619ffc02756ccc71f5-us7",
    server: "us7",
  });
  mailchimp.lists
      .addListMember(listId, {
        email_address: user.email,
        status: "subscribed",
        merge_fields: {
          FNAME: user.firstName,
          LNAME: user.lastName,
        },
      })
      .then((data) => {
        console.log("Response id " + data.id);
      })
      .catch((error) => {
        console.log(error.response.body);
      });
}
exports.createStripeSession = functions.https.onRequest((req, res) => {
  stripe.charges
      .create({
        amount: "100",
        source: req.body.token.id,
        currency: "usd",
      })
      .then(() => {
        console.log("Charge successful");
        res.json({message: "Purchase was successful"});
      });
  /* const session = await stripe.checkout.sessions.create({
      lineItems: [
          {
              price: '{PRICE_ID',
              quantity: 1,
          }
      ],
      payment_method_types: [
          'card',
      ],
      mode: 'payment',
      success_url: 'localhost:3000/success=true',
      cancel_url: 'localhost:3000/canceled=true',
  });

  res.redirect(303, session.url);*/
});
exports.subscribe = functions.https.onRequest((req, res) => {
  console.log(req.body);
  const body = JSON.stringify(req.body);
  const subscribingUser = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
  };
  subscribeMailchimp(subscribingUser);
  // functions.logger.info("New user subscribed!\n");
  res.redirect("/");
});

// exports.app = functions.https.onRequest(app);
