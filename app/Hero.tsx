import React from 'react';
import Image from 'next/image';

function Hero() {
	return (
		<div className='text-center'>
			<div>

			<Image src='/bg.png' alt='bg' width={800} height={200} className='w-full absolute mt-[-50px]' />
			</div>
			<div>
				<h2 className='text-[55px] text-red-600 tracking-widest font-semibold'>
					TRAVEL
				</h2>
			</div>
		</div>
	);
}

export default Hero;
