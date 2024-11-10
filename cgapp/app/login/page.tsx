'use client'
import React, { useState } from "react"
import { LoginInput } from "../components/login/LoginInput"
import Link from "next/link"

export default function Login() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [formError, setFormError] = useState<string>("")

    const submitLogin = (e: React.SyntheticEvent) => {
        e.preventDefault()
        try {
            // TODO: Email validator
            // TODO: Password validator
        } catch (e) {
            // console.log(e)
            // throw new Error("Error occured because...")
            // setFormError(....)
        }
    }

    return (
        <div className = "h-full">
            <form onSubmit={submitLogin}>
                <LoginInput label="Enter email" input={email} onChange={(e) => setEmail(e.target.value)} 
                type="email"/>
                <LoginInput label="Enter password" input={password} onChange={(e) => setPassword(e.target.value)}
                type="password" />
                {formError && <section>Error: {formError}</section>}
                <button type="submit" className = "btn btn-neutral">Login</button>
            </form>
            <Link href="./register">Register here</Link>
        </div>
    )

}