'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const Return = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
    const router = useRouter()
  
    useEffect(() => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const sessionId = urlParams.get('session_id');
        
      const getSession = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/session-status?session_id=${sessionId}`);
            const data = response.data
            setStatus(data.status)
            setCustomerEmail(data.customer_email)
        } catch (error) {
            router.push('/registration')
        }
      }
      getSession();
    }, []);
  
    if (status === 'open') {
      return (
        <section className = "text-white h-screen bg-neutral-500 flex justify-center items-center" id="success">
            Payment unsuccessful
        </section>
      )
    }
  
    if (status === 'complete') {
      return (
        <section className = "text-white h-screen bg-neutral-500 flex flex-col justify-center items-center" id="success">
          <p>
            We appreciate your business! A confirmation email will be sent to {customerEmail}.
  
            If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
          <p className = "mt-1 font-bold">
          <Link href="/">Head back to home</Link>
          </p>
        </section>
      )
    }
  
    return null;
}

export default Return
