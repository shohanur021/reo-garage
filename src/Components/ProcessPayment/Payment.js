import React from 'react';
import {Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentCardForm from './PaymentCardForm';

const stripePromise = loadStripe('pk_test_51IxCDyHo1K9uo8t1xcBQOFxvZVKIczfcGlKepRZe6rwBkka6Es9RtCY0DQX4qTEkPTbyzIFo4Z3as4IAD0qgcmWM00tnvR0CQw');

const Payment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
             <PaymentCardForm handlePayment={handlePayment}></PaymentCardForm>
        </Elements>
    );
};

export default Payment;
