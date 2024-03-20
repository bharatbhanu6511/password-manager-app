import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-300 flex justify-between px-4 h-16 items-center'>
        <div className="logo font-bold text-2xl">
            <span className='text-green-700'>&lt;</span>
            <span>Pass</span>
            <span className='text-green-700'>Man /</span>
            <span className='text-black'>&gt;</span>
        </div>
        <ul className='flex gap-4'>
            <li><a className='hover:font-bold text-white' href="">Home</a></li>
            <li><a className='hover:font-bold text-white' href="">About</a></li>
            <li><a className='hover:font-bold text-white' href="">Contacts</a></li>
            </ul>      
    </nav>
  )
}

export default Navbar
