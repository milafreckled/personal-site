/* eslint-disable require-jsdoc */
const functions = require("firebase-functions");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const listId = "ce7f163d14";
// const express = require("express");
// const app = express();

// IN CLIENT(example):
// document.addEventListener('DOMContentLoaded', function() {

//   let app = firebase.app();

//   const sendText = firebase.functions().httpsCallable('sendText');

//   sendText({ message: 'Hello World!' })
// });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
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
