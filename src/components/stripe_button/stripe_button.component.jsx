import React from 'react'

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_voJdSQARyylVgu0zBJ6mtPbi00NU81wBzJ';

   const onToken = token => {
        console.log(token);
        alert('Payment successful')
    };


    return (
        <StripeCheckout
            label={'Pay Now'}
            name={'Bright Clothing Ltd'}
            billingAddress
            shippingAddress
            image={'https://svgshare.com/i/CUz.svg'}
            description={`Your Total Price is ¢${price}`}
            amount={priceForStripe}
            panelLabel={'Pay Now'}
            token={onToken}
            stripeKey={publishableKey}
            currency={'USD'}
        />
    )
};

export default StripeCheckoutButton;