
import React from 'react';
import Maya from '../components/installations/Maya';
import Zoom from '../components/installations/Zoom';

const Installations = () => {
  return (
    <div>
        <section className = "text-header tracking-wide flex flex-col w-screen justify-center items-center py-10 bg-neutral-800">
            <h1 className = "text-xl md:text-2xl">Needed Installations</h1>
            <p className = "md:text-md text-sm"><span className = " text-cyan-100">Maya</span> and <span className = "text-cyan-100">Zoom</span></p>
        </section>
        <section className = "bg-gradient-to-b from-neutral-900 via-zinc-700 to-neutral-900">
          <div className = "flex flex-col w-screen px-6 py-10">
            <Maya />
            <div className = "divider divider-neutral p-6"></div>
            <Zoom />
          </div>
        </section>

    </div>
  )
}

export default Installations
