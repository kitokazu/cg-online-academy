'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import image1 from "../../../public/slideshow/image.jpg"
import image2 from "../../../public/slideshow/imager.png"
import image3 from "../../../public/slideshow/image3.jpg"
import image4 from "../../../public/slideshow/image4.png"
import {motion, useInView, useAnimation} from "framer-motion";


const Information = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
        mainControls.start("visible");
        } 
    }, [isInView, mainControls])
  return (
    <section ref = {ref} className = "bg-gray-700  px-20 ">
    <div className="grid place-items-center grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-20 xl:gap-4">

    <section>
        <div className="w-8/12 md:w-full px-4 mx-auto">
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-full lg:w-6/12 px-4">
              <motion.div variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}}}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration:0.7, delay: 0.3
                    }}
                    className = "bg-neutral-900 shadow-lg shadow-neutral-500 rounded-lg text-center p-1"
                    >
                <Image
                    src={image1}
                    width = {500}
                    height = {800}
                    className = "border-black border-2"
                    alt="logo"
                    />
                 <p className="text-lg text-white my-3 font-semibold">Caption</p>
            </motion.div>
 

            <motion.div variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}}}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration:0.7, delay: 0.7
                    }}
                    className = "bg-neutral-900 shadow-lg shadow-neutral-500 rounded-lg text-center p-1 mt-8"
                    >
                    <Image
                    src={image2}
                    width = {500}
                    height = {800}
                    className = "border-black border-2"
                    alt="logo"
                    />
                    <p className="text-lg text-white my-3 font-semibold">Caption</p>
              </motion.div>
            </div>
                  
            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <motion.div variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}}}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration:0.7, delay: 0.5
                    }}
                    className = "bg-neutral-900 shadow-lg shadow-neutral-500 rounded-lg text-center p-1"
                    >
                      <Image
                        src={image3}
                        width = {500}
                        height = {800}
                        className = "border-black border-2"
                        alt="logo"
                        />
                      <p className="text-lg text-white my-3 font-semibold">Caption</p>
                </motion.div>
                      
                <motion.div variants={{
                    hidden: {opacity: 0},
                    visible: {opacity: 1}}}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration:0.7, delay: 0.9
                    }}
                    className = "bg-neutral-900 shadow-lg shadow-neutral-500 rounded-lg text-center p-1 mt-8"
                    >
                      <Image
                        src={image4}
                        width = {500}
                        height = {800}
                        className = "border-black border-2"
                        alt="logo"
                        />
                        <p className="text-lg text-white my-3 font-semibold">Caption</p>
                </motion.div>

                    </div>
                  </div>
              </div>
        </section>

    <section className="">
        <motion.div variants={{
                    hidden: {opacity: 0, y:0, x:100},
                    visible: {opacity: 1, y:0, x:0}}}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration:0.7, delay: 0.6
                    }} >
        <h1 className = "font-semibold text-2xl lg:text-3xl 2xl:text-4xl border-b-2 border-neutral-300 text-header">Lorem ipsum dolor sit amet.</h1>
        <ul className = "text-subtext 2xl:text-lg">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, magni.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas!</li>
        </ul>
        </motion.div>

        <motion.div variants={{
                    hidden: {opacity: 0, y:0, x:100},
                    visible: {opacity: 1, y:0, x:0}}}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration:0.7, delay: 0.9
                    }} className = "mt-7">
        <h1 className = "font-semibold text-2xl lg:text-3xl 2xl:text-4xl border-b-2 border-neutral-300 text-header">Lorem ipsum dolor sit amet.</h1>
        <ul className = "text-subtext 2xl:text-lg">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, magni.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas!</li>
        </ul>
        </motion.div>

        <motion.div variants={{
                    hidden: {opacity: 0, y:0, x:100},
                    visible: {opacity: 1, y:0, x:0}}}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration:0.7, delay: 1.2
                    }} className = "mt-7">
        <h1 className = "font-semibold text-2xl lg:text-3xl 2xl:text-4xl border-b-2 border-neutral-300 text-header">Lorem ipsum dolor sit amet.</h1>
        <ul className = "text-subtext 2xl:text-lg">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, magni.</li>
          <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas!</li>
        </ul>
        </motion.div>


      </section>


      </div>
  </section>
  )
}

export default Information
