'use client'

import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from "../../registration/Registration.module.css";
import {motion, useInView, useAnimation} from "framer-motion";

interface RegisterCard {
    borderColor: string;
    picture: StaticImageData;
    courseHeader: string;
    price: string;
    durationStart: string;
    durationEnd: string;
    courseDescription:string[];

}
const RegisterCard = ({borderColor, picture, courseHeader, price, durationStart, durationEnd, courseDescription } : RegisterCard) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once:true})
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls])

  return (
    <div ref= {ref} >
    <motion.div variants={{
      hidden: {opacity: 0, y:100, x:100},
      visible: {opacity: 1, y:0, x:0}}}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration:0.3, delay: 0.2
      }}
      className = "text-white flex justify-center py-7"
      >
        <section className = {`bg-gradient-to-br shadow-md shadow-gray-900 from-slate-600 to-slate-900 grid grid-cols-3 w-4/6 ${styles.borderEdge} rounded-lg ${borderColor}`}>
          <div className = "p-3">
          <Image
              src={picture}
              width={330}
              height={330}
              className = "border-black border-2 roudned-lg"
              alt="logo"
            />
          </div>
          <div className = "relative col-span-2">
            <div className = "flex justify-between pt-3 ps-3 pe-3 pb-1">
              <h1 className = "font-bold text-header text-lg lg:text-2xl border-b-2 border-neutral-400">{courseHeader}</h1>
              <h1 className = "text-green-300  text-md lg:text-xl tracking-wider">Price: {price}</h1>
            </div>
            <p className = "text-header text-md md:text-lg font-bold ps-3">Duration: {durationStart} - {durationEnd}</p>
            <ul className = "list-disc li ps-6">
            {courseDescription && courseDescription.map((item: string, index: number) => (
                <li key={index}>
                    {item}
                </li>
                ))}
            </ul>
            <div className = "flex justify-end items-end">
              <div className = "p-5">
                <button className="btn btn-neutral border-cyan-100 btn-xsm sm:btn-sm lg:btn-md text-header">Register</button>
              </div>
            </div>
            
          </div>
          <div>
          </div>
        </section>
      </motion.div>
      </div>
  )
}

export default RegisterCard
