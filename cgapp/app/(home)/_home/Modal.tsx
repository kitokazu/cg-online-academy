import React, { JSXElementConstructor } from 'react'
import { useState, useEffect } from 'react'
import {ThreeZoom} from './models/Three'
import {SphereZoom} from './models/Sphere'
import {RapunzelZoom} from "./models/Rapunzel"

interface ModalSlide {
  play: boolean;
  setPlay: (val: boolean) => void;
  obj: Record<string, any>;
  setObj: (obj: Record<string, any>) => void;
}
const Modal = ({play, setPlay, obj, setObj}: ModalSlide) => {

  const handleClose = () => {
    // set all values to false
    for (const key in obj) {
      obj[key] = false;
    }
    // resume the Marquee 
    setPlay(true);

  }

  return (
    <>
      <dialog open={!play} className="modal">
  <div className="modal-box rounded-lg shadow-lg shadow-black pt-16 max-w-2xl bg-gradient-to-l from-zinc-900 via-zinc-950 to-zinc-900">
      {obj.box && <ThreeZoom clicked = {obj} setClicked = {setObj}/>}
      {obj.rapun && <RapunzelZoom clicked = {obj} setClicked = {setObj}/>}
      {obj.sphere && <SphereZoom clicked = {obj} setClicked = {setObj}/>}

      <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn" onClick = {handleClose}>Close</button>
      </form>
      </div>
  </div>
  </dialog>
  </>
  )
}

export default Modal
