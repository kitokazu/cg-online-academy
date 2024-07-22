import React, { useState } from 'react'


const NetworkErrModal = ({setNetworkError}: any) => {
    const [modalOpen, setModalOpen] = useState<boolean>(true);
  return (
    <>
    <dialog open = {modalOpen} className="modal">
        <div className="modal-box">
        <div>
        <button onClick = {() => {setModalOpen(false); setNetworkError(false)}} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </div>
        <div className = "container">
            <header className = "font-bold text-sm md:text-lg">Network Error has occurred</header>
        </div>
        </div>
    </dialog>
    </>
  )
}

export default NetworkErrModal
