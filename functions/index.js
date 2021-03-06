/* eslint-disable require-jsdoc */
const functions = require("firebase-functions");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const listId = "ce7f163d14";
const express = require("express");
const app = express();

mailchimp.setConfig({
  apiKey: process.env.REACT_APP_MAILCHIMP_API_KEY,
  server: "us7",
});
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
exports.subscribe = functions.https.onRequest((req, res) => {
  function subscribeMailchimp(user) {
    mailchimp.lists.addListMember(listId, {
      email_address: user.email,
      status: "subscribed",
      merge_fields: {
        FNAME: user.firstName,
        LNAME: user.lastName,
      },
    }).then((data) => {
      console.log("Response id " + data.id);
    }).catch((error) => {
      console.log(error.response.body);
    });
  }
  console.log(req.body);
  const body = JSON.stringify(req.body);
  const subscribingUser = {
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
  };
  subscribeMailchimp(subscribingUser);
  functions.logger.info("New user subscribed!\n");
  res.redirect("/");
});

exports.app = functions.https.onRequest(app);
