const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const path = require('path');
const stripe = require('stripe')(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
// list_id: ce7f163d14
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));

const listId = "ce7f163d14";
mailchimp.setConfig({
    apiKey: process.env.REACT_APP_MAILCHIMP_API_KEY,
    server: "us7"
});

 
async function subscribe(user){
 
    await mailchimp.lists.addListMember(listId, {
        email_address: user.email,
        status: "subscribed",
        merge_fields: {
            FNAME: user.firstName,
            LNAME: user.lastName
        }
    }).then((data) => {
        console.log("Response id " + data.id)
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    });
   
};
async function getAllLists(){
 const response = await mailchimp.lists.getAllLists();
 console.log(response)
}
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.on('error', (err)=>{
        console.log(err.message);
    })
  });


   // 
app.get('/ping', (req,res) =>{
        res.send("pong");
});
//
app.post('/subscribe', async (req, res) => {
    console.log(req.body);
    let body = JSON.stringify(req.body);
    const subscribingUser = {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email
    };
    subscribe(subscribingUser);
    console.info("New user subscribed!\n");
    res.redirect("/");
})
app.post('/create-checkout-session', async (req, res) => {
    stripe.charges.create({
        amount: '100',
        source: req.body.token.id,
        currency: 'usd',
    }).then(() => {
        console.log('Charge successful');
        res.json({ message: 'Purchase was successful'})
    })
    /*const session = await stripe.checkout.sessions.create({
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

app.listen(process.env.PORT || 8080, (req, res)=>{
    console.log("Server is running on port 3001");
})