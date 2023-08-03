import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { connectFunctionsEmulator, getFunctions, httpsCallable } from 'firebase/functions';
import React, { FormEvent, FormEventHandler, useState } from 'react'

export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

const { REACT_APP_ENV, REACT_APP_FIREBASE_API_KEY, REACT_APP_MESSAGING_SENDER_ID, REACT_APP_APP_ID} = process.env;
const functionsLink =  "http://127.0.0.1:5001/ludas-website/us-central1";
// "https://ludas-website.firebaseapp.com/us-central1/functions"
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: "ludas-website.firebaseapp.com",
  projectId: "ludas-website",
  storageBucket: "ludas-website.appspot.com",
  messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
  appId: REACT_APP_APP_ID
};
  
const app = initializeApp(firebaseConfig);
const functions = getFunctions(app);
if (REACT_APP_ENV === "development"){
  connectFunctionsEmulator(functions, "localhost", 5001);
}

const submitForm = async (e: FormEvent) => {
  const subscribeCall = httpsCallable(functions, "subscribe");
  e.preventDefault();
  // const subscribeResponse = await axios.post(`${functionsLink}/subscribe`, {
  //     firstName,
  //     lastName,
  //     email
  // })
  const subscribeResponse = await subscribeCall({
    data: {
      firstName,
      lastName,
      email
  }
  });
  console.log(subscribeResponse)
}

  return (
    <form onSubmit={submitForm}>
    <div className="form-group">
      <label htmlFor="name">First Name</label>
      <input className="form-control" value={firstName} required name="firstName" onChange={(e) => setFirstName(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="name">Last Name</label>
      <input className="form-control" value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        className="form-control"
        name="email"
        value={email} 
        required
        placeholder="name@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
    <div className="form-group">
      <button className="form-control btn btn-primary mt-2" type="submit">
        Submit
      </button>
    </div>
  </form>
  )
}


