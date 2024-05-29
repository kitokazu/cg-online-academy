import React from 'react'
import Image from 'next/image'
import cover from "../../../public/cover.png"
import pfp from "../../../public/pfp.png"
import Information from './Information'
import Works from "./Works"
import Link from 'next/link'

const Content = () => {
  return (
    <div>

        <section className = "w-11/12 mx-auto  text-header">
        <div className = "grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
          <section>
            <h1 className = "text-6xl lg:text-7xl font-bold tracking-tight">
              CG-Online Academy
            </h1>

            <p className = "text-lg mt-4 text-slate-400 max-w-xl">
              Learn 3-D Modeling with Hiroki Itokazu
            </p>
          </section>

          <section>
          <Image
              src={cover}
              width={500}
              height={900}
              className = "border-black border-4 roudned-lg"
              alt="logo"
            />
          </section>
        </div>
      </section>



    <section className=" bg-neutral-800 rounded-lg shadow-slate-600 shadow-md flex mx-10 py-4">
      <div className="grid flex-grow ">
              <div className = "flex justify-center py-5">
                  <Image
                    src={pfp}
                    width = {500}
                    height = {800}
                    className = "border-black border-2"
                    alt="logo"
                  />

              </div>
      </div>
      <div className="divider divider-horizontal divider-neutral"></div>
      <div className="grid flex-grow rounded-lg w-7/12">
      <div className = "mx-10 my-8">
            <h3 className="text-3xl mb-3 font-bold text-header">Hiroki Itokazu</h3>

            <p className="mt-0.5 text-subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas distinctio
              nesciunt quas non animi.
            </p>
            </div>
      </div>
    </section>



    <Works />

  <section className = "border-t-2 border-zinc-800 bg-gradient-to-b from-neutral-900 to-gray-700 flex justify-center py-14">
      <div className="w-full md:w-4/12 px-4 text-center ">
        <div className=" relative mb-5 shadow-md shadow-zinc-600 rounded-lg"> 
          <div className="px-4 pt-7 pb-5">
            <h6 className="text-xl font-semibold text-header">
              Lorem, ipsum.
              </h6>
            <p className="mt-2 mb-4 text-subtext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid suscipit odio magni mollitia cum ut.
              </p>
          </div>
        </div>
      </div>
    </section>
  

    <Information />

    <section className = "bg-gradient-to-b py-20 from-gray-700  to-neutral-800">
      <div className = "bg-gradient-to-tr from-neutral-900 to-neutral-700 rounded-lg mx-32 grid grid-cols-1 lg:grid-cols-3 items-center shadow-md shadow-zinc-600 ">
          <section className = "lg:col-span-2 p-10">
            <h1 className = "lg:text-3xl text-2xl mb-6 text-header">Lorem ipsum dolor sit amet.</h1>
            <p className = "text-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eveniet quia quam reprehenderit voluptas aliquid.</p>
          </section>
          <section className = "flex justify-center">
            <button className="btn btn-md lg:btn-lg "><Link href ="./registration">Register</Link></button>
          </section>
        </div>
    </section>

    
    </div>
  )
}

export default Content;
