import React, { useEffect } from 'react'
import StripeCard from './StripeCard'
import InputModal from './InputModal'
import { useState } from 'react'

interface CheckoutProps {
    courseNumber: string
    checkout: boolean
    setCheckout: (val:boolean) => void
}

export interface UserProps {
    name: string,
    email: string,
}

const CheckoutPage = ({courseNumber, checkout, setCheckout}: CheckoutProps) => {
    /* 
        Controls whether the stripeCard will be open or not. 
        Only accessible if form is completed
    */
    const [isFormComplete, setFormComplete] = useState<boolean>(false)


    const [userInfo, setUserInfo] = useState<UserProps>({name: "", email: ""})

    /* 
        Upon first render and everytime the modal [checkout] opens or closes
        reset the input form
    */
    useEffect(() => {
        setFormComplete(false)
        setUserInfo({name: "", email: ""})
    }, [checkout])

  return (
    <div>
        {checkout && isFormComplete ? 
        <StripeCard courseNumber={courseNumber} userInfo={userInfo} 
        checkout = {checkout} setCheckout = {setCheckout} />
        : <InputModal checkout = {checkout} setCheckout = {setCheckout} 
        isFormComplete = {isFormComplete} setFormComplete = {setFormComplete}
         userInfo = {userInfo} setUserInfo = {setUserInfo}/>}

      
    </div>
  )
}

export default CheckoutPage