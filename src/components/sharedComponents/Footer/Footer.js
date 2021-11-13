import React from 'react';
import { Link } from 'react-router-dom';

// footer page

const Footer = () => {
	return (
		<div>
			<footer className='footer-1 bg-gray-900 py-8 sm:py-12 text-gray-300'>
				<div className='container mx-auto px-4'>
					<div className='sm:flex sm:flex-wrap sm:-mx-4 md:py-4'>
						<div className='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0'>
							<img
								src='https://i.ibb.co/zVfS2Py/Ride-Bike-Logo.png'
								alt=''
							/>
							<p className='pt-2'>
								TRAVEL MORE TO DISCOVER YOURSELF! IbnuTravel
								Travel is the movement of people between distant
								geographical locations.
							</p>
						</div>
						<div className='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6'>
							<h5 className='text-xl font-bold mb-6'>Features</h5>
							<ul className='list-none footer-links'>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Cool stuff
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Random feature
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Team feature
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Stuff for developers
									</Link>
								</li>
							</ul>
						</div>
						<div className='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0'>
							<h5 className='text-xl font-bold mb-6'>About</h5>
							<ul className='list-none footer-links'>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Team
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Locations
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Privacy
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Terms
									</Link>
								</li>
							</ul>
						</div>

						<div className='px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0'>
							<h5 className='text-xl font-bold mb-6'>Help</h5>
							<ul className='list-none footer-links'>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Support
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Help Center
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
						<div className='px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto'>
							<h5 className='text-xl font-bold mb-6 sm:text-center xl:text-left'>
								Stay connected
							</h5>
							<ul className='list-none footer-links'>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Facebook
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Twitter
									</Link>
								</li>
								<li className='mb-2'>
									<Link
										to='/'
										className='border-b border-solid border-transparent hover:border-gray-800 hover:text-gray-800'
									>
										Instagram
									</Link>
								</li>
							</ul>
						</div>
					</div>

					<div className='text-center sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t text-xl'>
						<p>
							Copyright &copy; 2021 |{' '}
							<span className='text-yellow-500'>Ibnu Mahtab</span>{' '}
							| All Rights Reserved
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
