import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';
import Expic from "../../public/cover.png";
import RegisterCard from '../components/registration/RegisterCard';
import styles from "./Registration.module.css"

// For right now, don't focus on add to cart feature, just add a register button

const Registration = () => {
  const tempDescription: string[] = ["Lorem ipsum dolor sit amet, consectetur adipisicing.", "Lorem ipsum dolor sit amet, consectetur adipisicing.", "Lorem ipsum dolor sit amet, consectetur adipisicing.", "Lorem ipsum dolor sit amet, consectetur adipisicing."];

  return (
    
    <div className = "">

      <section className = "bg-neutral-800 py-12">
          <div className = "text-center">
            <h1 className = "text-header text-md lg:text-lg">Register for a course</h1>
            <p className = "text-header font-bold text-xl md:text-3xl">Choose from <span className = "text-cyan-100">6</span> available.</p>
            <p className = "text-subtext text-md lg:text-lg"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quis.</p>
          </div>
      </section>
        
      <section className = "bg-gradient-to-b from-neutral-700 via-gray-800 to-neutral-700">
        <RegisterCard borderColor="border-cyan-100" picture={Expic} courseHeader="Course 1" price="FREE" durationStart="May 2022" durationEnd="October 2023" courseDescription={tempDescription}/>
        <RegisterCard borderColor="border-cyan-200" picture={Expic} courseHeader="Course 2" price="FREE" durationStart="May 2022" durationEnd="October 2023" courseDescription={tempDescription}/>
        <div className = "relative z-10">
          <RegisterCard borderColor="border-cyan-300" picture={Expic} courseHeader="Course 3" price="$100.00" durationStart="May 2022" durationEnd="October 2023" courseDescription={tempDescription}/>
        </div>
      </section>
      
      <section>
        <div className="relative z-0 top-0"><svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 170" x="0" y="0" ><polygon className="text-zinc-600 fill-current " points="2560 0 2560 170 0 170"></polygon></svg></div>
        <div className = "bg-gradient-to-b from-zinc-600 via-neutral-500 to-zinc-600">
        <RegisterCard borderColor="border-cyan-400" picture={Expic} courseHeader="Course 4" price="$120.00" durationStart="May 2022" durationEnd="October 2023" courseDescription={tempDescription}/>
        <RegisterCard borderColor="border-cyan-500" picture={Expic} courseHeader="Course 5" price="$140.00" durationStart="May 2022" durationEnd="October 2023" courseDescription={tempDescription}/>
        <RegisterCard borderColor="border-cyan-600" picture={Expic} courseHeader="Course 6" price="$160.00" durationStart="May 2022" durationEnd="October 2023" courseDescription={tempDescription}/>
        <aside className = "text-center text-slate-200 p-4">
          Want to cancel a course? Click here
        </aside>
        </div>
      </section>

    </div>

  )
}

export default Registration
