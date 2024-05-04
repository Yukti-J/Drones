import React from 'react'
import buy from '../assets/buy.png'
import pilot from '../assets/pilot.png'
const Services = () => {
  return (
    <div className='mt-24'>
     <h1 className='text-4xl md:text-5xl text-center my-4 font-rubik'>Services</h1>
    <div className='grid grid-cols-1 w-4/5 md:w-full md:grid-cols-2 my-10 m-auto'>
      <div className='w-full flex items-start justify-around buy m-auto'>
        <button className='text-center font-rubik text-2xl md:text-3xl m-auto lg:text-4xl font-bold text-white tracking-wide mt-14 md:mt-20 xl:mt-32'>OWN A DRONE</button>
      </div>
      <div className='w-full flex items-start justify-around pilot m-auto' >
        <button className='text-center font-rubik text-2xl md:text-3xl m-auto lg:text-4xl font-bold text-white tracking-wide mt-14 md:mt-20 xl:mt-32'>BECOME A PILOT</button>
      </div>
    </div>
    </div>
  )
}

export default Services
