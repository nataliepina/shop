import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_MTQM2Y3PBk1lXw8iTWpiP3bC00KPn4Yjh8';

  const onToken = token => {
    // I don't want to actually process the payment
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful!')
    }).catch(error => {
      console.log('Payment error: ', JSON.parse(error));
      alert (
        'There was an issue with your payment.'
      );
    });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothing Ltd.'
      billingAddress
      ShippingAddress
      image='https://svgshare.com/i/CUz/svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;