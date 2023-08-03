/* eslint-disable require-jsdoc */
const { onCall } = require("firebase-functions/v2/https");
const functions = require("firebase-functions");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const listId = "ce7f163d14";
require("dotenv").config();
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_PUBLIC_KEY);


exports.createstripesession = onCall((req) => {
  stripe.charges
      .create({
        amount: "100",
        source: req.body.token.id,
        currency: "usd",
      })
      .then(() => {
        console.log("Charge successful");
        return {message: "Purchase was successful", success: true, error: null};
      })
      .catch((error) => {
        return {message: "Encountered error while charging", success: false, error};
      })
  /* const session = await stripe.checkout.sessions.create({
      lineItems: [
          {
              price: '{PRICE_ID}',
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

exports.testapp = onCall({cors: [/localhost:3000/, /127\.0\.0\.1/]},
() => {
  return "Functions accessed!";
});

exports.subscribe = onCall(
  {cors: [/localhost:300/, /127\.0\.0\.1/, /https:\/\/us-central1-ludas-website.cloudfunctions.net/]},
  (req) => {
  functions.logger.log(req.data);
  // const body = JSON.stringify(req.data);
  const subscribingUser = {
    firstName: req.data.firstName,
    lastName: req.data.lastName,
    email: req.data.email,
  };
  try {
      mailchimp.setConfig({
        apiKey: "e0d03763c979b407f45ef4e96503e938-us7",
        server: "us7",
      });
      mailchimp.lists
          .addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
              FNAME: subscribingUser.firstName,
              LNAME: subscribingUser.lastName,
            },
          })
          .then((data) => functions.logger.log("Response id " + data.id));   
    functions.logger.info("New user subscribed!\n");
    return {message: "New user subscribed!", success: true, error: null}
  }catch(err){
    return {message: "Error has occured!", success: false, error: err}
  }
});

// exports.app = functions.https.onRequest(app);
