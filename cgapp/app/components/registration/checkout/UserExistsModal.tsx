import React from 'react'


interface UserExists {
    checkout: boolean
    setCheckout: (val:boolean) => void
    courseNumber: string
    email: string
}
const UserExistsModal = ({checkout, setCheckout, courseNumber, email}: UserExists) => {
  return (
    <dialog open = {checkout} className="modal">
        <div className="modal-box">
        <div>
        <button onClick = {() => setCheckout(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
        <div className = "container">
            <header className = "font-bold text-sm md:text-lg">You have already registered for this course.</header>
            <p>You will be emailed when course starts</p>
            <p>Email: {email} </p>
            <p>Registered Course: {courseNumber}</p>

        </div>
        </div>
    </dialog>
  )
}

export default UserExistsModal
