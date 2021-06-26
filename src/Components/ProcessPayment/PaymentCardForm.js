import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentCardForm = ({ handlePayment }) => {
    const stripe = useStripe();
    const elements = useElements();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log(error)
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)
            handlePayment(paymentMethod.id)
           
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <br />
                <div className="d-flex justify-content-center">
                    {
                        <button type="submit" className="btn btn-primary px-4" disabled={!stripe}>
                            Pay
                        </button>
                    }
                </div>
            </form>
            {
                paymentError && <p style={{ color: 'red', margin: '4px auto', textAlign: 'center' }}>{paymentError}</p>
            }
        </div>
    );
};

export default PaymentCardForm;