'use client'
import React from 'react'
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from 'framer-motion';

const Maya = () => {
    const MayaRef = useRef<any>();
    const MayaInView = useInView(MayaRef, {once:true})
    const MayaControls = useAnimation();

  
    useEffect(() => {
      if (MayaInView) {
        MayaControls.start("visible");
      }
    }, [MayaInView, MayaControls])


  return (
            <div ref = {MayaRef} className = "md:ms-12">
            <motion.div variants={{
      hidden: {opacity: 0, x:200 },
      visible: {opacity: 1, x:0 }}}
      initial="hidden"
      animate={MayaControls}
      transition={{
        duration:0.2, delay: 0.2
      }}
      >
                <header>
                    <h1 className = "text-header text-xl md:text-2xl font-bold">Maya Installation</h1>
                    <h4 className = "text-caption font-medium italic">Please install Maya before class begins</h4>
                </header>

                <div className = "mt-3">
                <ol className = "list-inside list-decimal text-header">
                    <li className = "text-md md:text-lg">Check the operating environment of your computer.</li>

                <div className = "flex justify-center">
                    <table className="table-auto shadow-lg shadow-slate-800 w-2/3 border-collapse border-4 border-slate-400 ...">
                    <caption className="caption-top text-header p-4">
                        Maya 2023 Operating Environment
                    </caption>

                    <tbody className = "text-header text-sm md:text-md">
                        <tr>
                        <td className="border border-slate-300 p-5">Operating System</td>
                        <td className="border border-slate-300 p-5">
                            <ul className = "list-inside list-disc">
                                <li>Microsoft® Windows® 11, 10</li>
                                <li>Apple® macOS® 12.x, 11.x, 10.15.x, 10.14.x</li>  
                                <li>Linux® Red Hat® Enterprise 8.5, 7.6-7.9 WS</li>  
                                <li>Linux CentOS® 8.5, 7.6-7.9</li>  
                                <li>Rocky Linux 8.5</li>  
                                <li>Virtualization guide using Nvidia GRID and VMWare</li>  
                            </ul>   
                            <h3>{"For support information, see Autodesk's Product Support Lifecycle."}</h3>
                        </td>
                        </tr>
                        <tr>
                        <td className="border border-slate-300 p-5">CPU</td>
                        <td className="border border-slate-300 p-5">Apple Mac models with 64-bit Intel® or AMD® multicore processors and M-series chips using the SSE4.2 instruction set are supported by Rosetta 2.</td>
                        </tr>
                        <tr>
                        <td className="border border-slate-300 p-5">Graphics Card</td>
                        <td className="border border-slate-300 p-5">See list of certified hardware</td>
                        </tr>
                        <tr>
                        <td className="border border-slate-300 p-5">RAM</td>
                        <td className="border border-slate-300 p-5">8 GB RAM (16 GB or more recommended)</td>
                        </tr>
                        <tr>
                        <td className="border border-slate-300 p-5">Disk Space</td>
                        <td className="border border-slate-300 p-5">7GB free disk space for installation</td>
                        </tr>

                    </tbody>
                    </table>
                    </div>
                    <li className = "mt-5 text-md md:text-lg">Install Maya</li>
                    <ul className = "list-inside list-disc text-subtext">
                        <li>
                            Click here for installation instructions
                        </li>
                        <li>
                            There is a language setting during the installation. Please select English.
                        </li>
                    </ul>
                    <li className = "mt-5 text-md md:text-lg">Switch to Maya English Version</li>
                    <ul className = "list-inside list-disc text-subtext">
                        <li>
                        Use the English Version
                        </li>
                        <li>
                        Click here for language settings
                        </li>
                    </ul>
                    <li className = "mt-5 text-md md:text-lg">Mouse with 3 buttons</li>
                    <li className = "list-disc text-subtext">Recommend a large mouse with 3 buttons</li>
                </ol>
                </div>
                </motion.div>
                </div>

  )
}

export default Maya
