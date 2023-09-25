import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div>
            <Image src='/logo.jpg' alt='next' width={500} height={500}/>
        </div>
    </div>
  )
}

export default Header