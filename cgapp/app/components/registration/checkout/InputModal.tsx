import React from 'react'
import { useState } from 'react'
import { UserProps } from './CheckoutPage'
import validator from "validator" // email validator
import axios from 'axios'

interface InputTypes {
  checkout: boolean, // whether the modal is open or not
  setCheckout: (val: boolean) => void, // close the modal
  setFormComplete: (val:boolean) => void, // set form to be complete
  userInfo: UserProps, // user information {name, email}
  setUserInfo: (obj: UserProps) => void // set user information
  courseNumber: string // course number
  setUserExist: (val:boolean) => void // whether the user already exists, checked after submission
  setNetworkError: (val: boolean) => void; 
}

// HANDLE AXIOS ERRORS

const InputModal = ({checkout, setCheckout, setFormComplete, userInfo, setUserInfo, courseNumber, setUserExist, setNetworkError} : InputTypes ) => {
    const [emailError, setEmailError] = useState<string | null>()

    // Add things like school/organization, and how the user found about the course itsefl
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({...userInfo, "name": e.target.value})
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInfo({...userInfo, "email": e.target.value})

    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validator.isEmail(userInfo.email)) {
          // const val = await checkUserExist()

          try {
            new Promise(resolve => {
              setTimeout(() => resolve(10000));
            });
            const response = await axios.post("http://localhost:8000/database/check-active-user", {email: userInfo.email, course_id: courseNumber});
            const res = response.data.status // is user active or not
            setUserExist(res);
            setFormComplete(!res);
          } catch(error) {
            console.log(error)
            // Show error modal for network connection
            setNetworkError(true); 
          }
        } else {
          setEmailError("Please enter a valid email address")
        }
    };



  return (
    <dialog open = {checkout} className="modal">
    <div className="modal-box">
    <form method="dialog">
      <button onClick = {() => setCheckout(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <form onSubmit={handleSubmit} >
      <div className = "container w-8/12">
            <header className = "font-bold text-lg mb-5">Enter registration information</header>
            <section className = "flex items-center justify-between flex-wrap">
                <div className = "md:text-lg text-sm">Name: </div>
                <div>
                <input
                    type="text"
                    className = "p-1 border border-black rounded"
                    id="name"
                    value={userInfo.name}
                    onChange={handleNameChange}
                    required
                /></div>
            </section>
            <section className = "mt-5 flex items-center justify-between">
                <div className = "md:text-lg text-sm">Email: </div>
                <div>
                <input
                    type="email"
                    className = "p-1 border border-black rounded"
                    id="email"
                    value={userInfo.email}
                    onChange={handleEmailChange}
                    required
                />
                </div>
            </section>
            <div className = "text-red-800">
              {emailError}
            </div>
            <button className = "mt-8 p-1 btn btn-neutral btn-sm md:btn-md" type="submit">Submit</button>
            </div>
        </form>
    </div>
  </dialog>
  )
}

export default InputModal
