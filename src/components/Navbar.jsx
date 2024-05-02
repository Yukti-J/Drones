import React from 'react'
import logoblack from '../assets/logoblack.png'

const Navbar = () => {
  return (
    <div>
      {/* Flex container with Logo, three links and sign up button rubik font*/}
      <nav className="flex justify-between items-center px-4">
        <div className="Dronelogo">
        <img
          className="w-20"
          src={logoblack}
          alt="Logo"
        />
        </div>

        <div className="flex text-md space-x-6 items-center font-rubik">
            <a className='hover:cursor-pointer hover:text-gray-600'>Home</a>
            <a className='hover:cursor-pointer hover:text-gray-600'>Products</a>
            <a className='hover:cursor-pointer hover:text-gray-600'>Contact</a>
        </div>

        <div className="signup">
                <button className="font-rubik border-black border-2 rounded-md px-2 py-1 hover:bg-black hover:text-white">Sign Up</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
