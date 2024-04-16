'use client'
import React from 'react'
import {Three} from './models/Three'
import Marquee from 'react-fast-marquee'
import { useState, useEffect } from 'react'
import {Sphere} from "./models/Sphere"
import {Rapunzel} from "./models/Rapunzel"
import Modal from './Modal'


const Works = () => {
  //initialize objects as false == not clicked
  const [select, setSelect] = useState<Record<string, any>>({ box: false, sphere: false, rapun: false})

  // whether to stop the Marquee or not / if something is clicked
  const [play, setPlay] = useState<boolean>(true);


  useEffect(() => {
    // result checks if at least one of the values is true
    const result = Object.values(select).some(val => val === true)
    setPlay(!result);
  },[select]);

  return (
    <section className = "relative my-10">
    <span className="flex items-center py-3 md:mx-72 text-white">
          <span className="h-px flex-1 w-0.5 bg-white"></span>
          <span className="shrink-0 px-6 text-2xl">His Works</span>
          <span className="h-px flex-1 bg-white"></span>
        </span>
    <div className = "flex relative justify-center p-5">
      <section className = "w-7/12">
        {/* Passing props from child ==> parent */}
        {/* Put more models */}
        <Marquee play = {play}>
            <Three clicked = {select} setClicked ={setSelect} />
            <Sphere clicked = {select} setClicked = {setSelect} />
            <Rapunzel clicked = {select} setClicked = {setSelect} />
        </Marquee>

      </section>
    </div>
    <Modal play = {play} setPlay = {setPlay} obj = {select} setObj = {setSelect}/>
  </section>
  )
}

export default Works
