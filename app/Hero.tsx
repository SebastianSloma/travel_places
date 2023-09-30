import React from 'react';
import Image from 'next/image';

function Hero() {
	return (
		<div className='text-center'>
			<div>
				<Image
					src='/bg.png'
					alt='bg'
					width={800}
					height={200}
					className='w-full absolute mt-[-50px]'
				/>

				<div>
					<h2 className='text-[55px] text-red-600 tracking-widest font-semibold'>
						TRAVEL
					</h2>
					<h2 className='text-[20px]'>Your Amazing City</h2>
					<div className='mt-5 z-20 '>
						<input type="text" placeholder='Search Anything' className='z-20 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
