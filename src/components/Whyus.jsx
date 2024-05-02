import React from 'react'

const Whyus = () => {
  return (
    <div className='w-1/2 items-center m-auto mt-24'>
      <h1 className='text-5xl text-center my-4 font-rubik'>Why Us?</h1>
      <p className='font-rubik text-center text-2xl tracking-wide text-gray-600'>We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view for the best of flying operation.</p>
        
        <div className='font-rubik grid grid-cols-4 my-4'>
        <div className='text-center p-4 hover:scale-105'>
            <h2 className='text-3xl font-extrabold text-gray-800 text-center my-4'>5K</h2>
            <p className='text-center text-xl tracking-wide text-gray-600'>Camera Resolution</p>
        </div>
        <div  className='text-center p-4 hover:scale-105'>
            <h2 className='text-3xl font-extrabold text-gray-800 text-center my-4'>80 m/s</h2>
            <p className='text-center text-xl tracking-wide text-gray-600'>High Speed</p>
        </div>
        <div  className='text-center p-4 hover:scale-105'>
            <h2 className='text-3xl font-extrabold text-gray-800 text-center my-4'>3 TB</h2>
            <p className='text-center text-xl tracking-wide text-gray-600'>Storage Capacity</p>
        </div>
        <div  className='text-center p-4 hover:scale-105'>
            <h2 className='text-3xl font-extrabold text-gray-800 text-center my-4'>45 mins</h2>
            <p className='text-center text-xl tracking-wide text-gray-600'>Flight Time</p>
        </div>
        </div>
    </div>
  )
}

export default Whyus
