import React from 'react';
import Image from 'next/image';

function Hero() {
	return (
		<div>
			<Image src='/bg.png' alt='bg' width={800} height={200} className='w-full' />
		</div>
	);
}

export default Hero;
