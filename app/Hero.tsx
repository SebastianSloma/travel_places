import React from 'react';
import Image from 'next/image';
import category from '@/data/category';

function Hero() {
	return (
		<div className='text-center'>
			<div>
				<Image
					src='/bg.png'
					alt='bg'
					width={800}
					height={200}
					className='w-full absolute mt-[-100px]z-5'
				/>

				<div className='mt-[40px] z-10'>
					<h2 className='text-[55px] text-red-600 tracking-widest font-semibold'>
						TRAVEL
					</h2>
					<h2 className='text-[20px]'>Your Amazing City</h2>
					<div className='mt-5 z-10 flex gap-2 items-center justify-center'>
						<input
							type='text'
							placeholder='Search Anything'
							className=' bg-white p-3 z-10 border-[1px] rounded-full px-5 w-[36%] shadow-lg outline-red-600'
						/>
						<button className='bg-red-600 rounded-full p-3 z-10 shadow-md cursor-pointer hover:scale-105 transition-all'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 text-white'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
								/>
							</svg>
						</button>
					</div>
					<div className='mt-5 flex flex-col justify-center items-center '>
						<h2>Or Browse The Category</h2>
						<div className='grid grid-cols-3 md:grid-cols-7 w=[50%] justify-center gap-5 mt-3'>
							{category.map((item,index)=>(
								<div key={index} className='border-[1px] w-[60px] p-4 bg-white rounded-full z-10 hover:border-red-600 hover:scale-110 cursor-pointer transition-all' >
									<Image src={item.icon}
									alt={item.name}
									width={30}
									height={30}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
