import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div className='flex gap-3 items-center'>
            <Image src='/logo.png' alt='next' width={50} height={50}/>
            <h2 className='text-[25px] font-semibold text-red-500 tracking-widest'>Discover</h2>
        </div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Header