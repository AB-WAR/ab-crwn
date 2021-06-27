import React from "react";
import StripeCheckout from "react-stripe-checkout";

const  StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51J6qSnSEsn3Sw8m0UKy7EiNPcGBXMuPmDY2rAvi7z7JcY8LAM036viDlbWINXwYniFBuhU2uKf4MWAOGCR4fijS600TWETxCjm'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton