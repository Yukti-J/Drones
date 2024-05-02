import React from 'react'
import buy from '../assets/buy.png'
import pilot from '../assets/pilot.png'
const Services = () => {
  return (
    <div className='mt-24'>
     <h1 className='text-5xl text-center my-4 font-rubik'>Services</h1>
    <div className='grid grid-cols-2 my-10'>
        {/* background image of first div is buy and second is pilot */}
      <div className='h-screen flex items-start justify-around buy'>
        <button className='text-center font-rubik text-5xl font-bold text-white tracking-wide mt-36'>OWN A DRONE</button>
      </div>
      <div className='h-screen flex items-start justify-around pilot' >
        <button className='text-center font-rubik text-5xl font-bold text-black tracking-wide mt-36'>BECOME A PILOT</button>
      </div>
    </div>
    </div>
  )
}

export default Services
