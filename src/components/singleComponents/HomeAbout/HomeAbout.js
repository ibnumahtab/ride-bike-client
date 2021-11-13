import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutHome = () => {
	const aboutus = useHistory();
	const handleAboutUs = () => {
		aboutus.push('/about-us');
	};
	return (
		<div>
			<div className='grid md:grid-cols-2 grid-cols-1 container mx-auto md:px-10 md:pt-5 py-3'>
				<div>
					<img src='https://i.ibb.co/d5pFmKM/about.png' alt='' />
				</div>
				<div className='md:w-4/5 md:ml-auto px-8 md:px-0 mt-10 md:mt-0'>
					<h1 className='md:text-5xl text-xl uppercase font-medium py-8'>
						Bike lovers deserve better!
					</h1>
					<p className='leading-7'>
						Trek Bicycle's motto is{' '}
						<span className='font-bold'>
							"One customer at a time, because that's how we
							roll."
						</span>{' '}
						A bicycle ride around the world begins with a single
						pedal stroke.
					</p>
					<div className='py-10'>
						<button
							onClick={handleAboutUs}
							className='md:py-3 md:px-24 px-8 py-3 border text-white hover:text-gray-700 text-lg font-semibold  bg-gray-900 hover:bg-white border-gray-700 transition duration-500 ease-in-out'
						>
							More About Us
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutHome;
