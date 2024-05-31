import React, { Suspense, useCallback, useState, useEffect } from 'react'
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { ErrorBoundary } from "react-error-boundary";
import axios from 'axios';
import { UserProps } from './CheckoutPage';

interface CheckoutCardProps {
    courseNumber: string
    userInfo: UserProps
    checkout: boolean
    setCheckout: (val:boolean) => void
}
const StripeCard = ({courseNumber, userInfo, checkout, setCheckout} : CheckoutCardProps) => {
    
    const fetchClientSecret = useCallback(async () => {
        const res = await fetch("http://localhost:8000/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: userInfo.name, email: userInfo.email, course_number: courseNumber })
        });
        const data = await res.json();
        return data.clientSecret;
    }, [userInfo.name, userInfo.email, courseNumber])

    useEffect(() => {
        const getPublishableKey = async () =>{
            try {
                const response = await axios.get("http://localhost:8000/config");
                setStripePromise(loadStripe(response.data.publishableKey))
            } catch (error) {
                console.log(error)
            }
        }
        getPublishableKey();
    }, [])


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

export default StripeCard
