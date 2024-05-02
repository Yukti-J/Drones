import React from 'react'
import dronemain from '../assets/dronemain.png'

const Home = () => {
  return (
    <>
     {/* Two sections with 60:40 ratio */}
    <div className="grid grid-cols-2 my-4">

     <section className="flex flex-col justify-center items-center">
       {/* Heading Get Your Dream Drones, subheading Discover Your Perfect Flight, font rubik text aling center button get started, flex column */}
       <h1 className='font-rubik text-7xl py-3 px-10 text-center leading-tight tracking-wide'>Get Your Dream Drones</h1>
       <p className='font-rubik text-2xl tracking-wide'>Discover Your Perfect Flight</p>
       <button className='bg-teal-500 text-xl rounded-md px-10 py-2 tracking-wide text-white my-8 hover:bg-teal-200 hover:text-black'>Get Started</button>
     </section>

     <section>
        {/* Image in the center */}
        <img className='h-full' src={dronemain} alt="Drones"/>
     </section>
   </div>
    </>
  )
}

export default Home
