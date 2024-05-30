import React, { Suspense, useCallback, useState, useEffect } from 'react'
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { ErrorBoundary } from "react-error-boundary";
import axios from 'axios';

interface CheckoutCardProps {
    courseNumber: string
    checkout: boolean
    setCheckout: (val:boolean) => void
}
const CheckoutCard = ({courseNumber, checkout, setCheckout} : CheckoutCardProps) => {
    
    const fetchClientSecret = useCallback(async () => {
        const res = await fetch("http://localhost:8000/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: "Riki Itokazu", email: "itokazuriki@gmail.com", course_number: courseNumber })
        });
        const data = await res.json();
        return data.clientSecret;
    }, [courseNumber])

    useEffect(() => {
        getPublishableKey();
    }, [])

    const getPublishableKey = async () =>{
        try {
            const response = await axios.get("http://localhost:8000/config");
            setStripePromise(loadStripe(response.data.publishableKey))
        } catch (error) {
            console.log(error)
        }
    }

    const [stripePromise, setStripePromise] = useState<Stripe | PromiseLike<Stripe | null> | null>(null);
    const options = { fetchClientSecret }

  return (
    <dialog open = {checkout} className="modal">
    <div className="modal-box">
    <form method="dialog">
      <button onClick = {() => setCheckout(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <ErrorBoundary fallback = {<p>Server Error occurred</p>}>
        <Suspense fallback = {<p>Loading...</p>}>
            <EmbeddedCheckoutProvider stripe = {stripePromise} options={options}>
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider> 
      </Suspense>
    </ErrorBoundary>
    </div>
  </dialog>
  )
}

export default CheckoutCard
