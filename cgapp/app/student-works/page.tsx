import React from 'react'
import Demos from './demos';

const StudentWorks = () => {
  return (
    <div>
        <section className = "bg-neutral-800">
            <div className = " text-header">
            <div className = "text-center pt-16 pb-8 md:pt-12 md:pb-10">
                <h1 className = "text-2xl">Class projects and student works</h1>
                <p className = "text-caption">Created using <span className = "text-cyan-100">Maya</span>.</p>
            </div>
            </div>
        </section>

        <Demos />

    </div>
  )
}

export default StudentWorks
