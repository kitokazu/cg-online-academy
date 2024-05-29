import React, { useCallback } from 'react'
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

interface CheckoutCardProps {
    course: string
    checkout: boolean
    setCheckout: (val:boolean) => void
}
const CheckoutCard = ({course, checkout, setCheckout} : CheckoutCardProps) => {
    const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY as string);
    //process.env.STRIPE_PUBLISHABLE_KEY
    const fetchClientSecret = useCallback(() => {
        return fetch("http://localhost:8000/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: "Testing Test", email: "test@test.com", course: "course1"})
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data); 
            return data.clientSecret})
    }, [])

    const options = { fetchClientSecret }

  return (
    <dialog open = {checkout} className="modal">
    <div className="modal-box">
    <form method="dialog">
      <button onClick = {() => setCheckout(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
      <EmbeddedCheckoutProvider stripe = {stripePromise} options={options}>
            <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  </dialog>
  )
}

export default CheckoutCard
