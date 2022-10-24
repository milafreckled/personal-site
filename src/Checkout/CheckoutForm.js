import * as React  from "react";
import StripeCheckout from 'react-stripe-checkout';

export default class CheckoutForm extends React.Component {
  onToken = (token) => {
    fetch('https://us-central1-ludas-website.cloudfunctions.net/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }
 
  // ...
 
  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}
      />
    )
  }
}