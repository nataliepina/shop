import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_MTQM2Y3PBk1lXw8iTWpiP3bC00KPn4Yjh8';

  const onToken = token => {
    // I don't want to actually process the payment
    console.log(token)
    alert('Payment successful!')
  }

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