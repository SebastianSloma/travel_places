import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
        <div>
            <Image src='/public/logo.jpg' alt='next' width={50} height={50}/>
        </div>
    </div>
  )
}

export default Header