'use client'
import React from 'react'
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from 'framer-motion';

const Zoom = () => {
    const ZoomRef = useRef<any>();

    const ZoomInView = useInView(ZoomRef, {once: true})
    const ZoomControls = useAnimation();

  
    useEffect(() => {
      if (ZoomInView) {
        ZoomControls.start("visible");
      }
    }, [ZoomInView, ZoomControls])


  return (
        <div ref = {ZoomRef} className = "flex justify-end md:me-24">
                <motion.div variants={{
      hidden: {opacity: 0, x:-200 },
      visible: {opacity: 1, x:0 }}}
      initial="hidden"
      animate={ZoomControls}
      transition={{
        duration:0.2, delay: 0.2
      }}
      >
                    <header>
                        <h1 className = "text-header text-xl md:text-2xl font-bold">Zoom Installation</h1>
                        <h4 className = "text-caption font-medium italic">Please install Zoom before class begins</h4>
                    </header>

                    <div className = "mt-4">
                        <section>
                            <h1 className = "text-md md:text-lg text-header">Use Zoom to participate in online courses</h1>
                            <h5 className = "italic text-caption">*Please check the class registration page for the online course schedule</h5>
                        </section>

                        <section className = "mt-3">
                            <h1 className = "text-md md:text-lg text-header">After registering for the class, you will receive a ZOOM URL</h1>
                            <h5 className = "italic text-caption">Clicking on it will download the app and connect automatically</h5>
                        </section>
                    </div>
                    </motion.div>
                </div>

  )
}

export default Zoom
