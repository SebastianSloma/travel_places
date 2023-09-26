import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div>
            <Image src='/logo.jpg' alt='next' width={200} height={200}/>
            <h2 className='text-[25px] text-red-500'>Discover</h2>
        </div>
    </div>
  )
}

export default Header