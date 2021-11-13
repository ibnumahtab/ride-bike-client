import React, { useState } from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import UserProfile from '../UserProfile/UserProfile';

const Navigation = () => {
	const { user } = useAuth();
	const [changeHeader, setChangeHeader] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	//header change function
	const onChangeHeader = () => {
		if (window.scrollY >= 150) {
			setChangeHeader(true);
		} else {
			setChangeHeader(false);
		}
	};
	const [profile, setProfile] = useState('hide');

	const toggle = () => {
		profile === 'show' ? setProfile('hide') : setProfile('show');
	};

	//change header by scrolling
	window.addEventListener('scroll', onChangeHeader);
	return (
		<>
			{changeHeader ? (
				<header className='bg-primary fixed z-50 top-0 left-0 w-full shadow-md transition duration-500'>
					<>
						<div className='flex flex-wrap py-2'>
							<div className='w-full px-4'>
								<nav className='relative flex flex-wrap items-center justify-between'>
									<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
										<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
											<Link
												className='text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-yellow-500'
												to='/'
											>
												Ride Bike
											</Link>
											<button
												className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
												type='button'
												onClick={() =>
													setMenuOpen(!menuOpen)
												}
											>
												<FaBars></FaBars>
											</button>
										</div>
										<div
											className={
												'lg:flex flex-grow items-center' +
												(menuOpen ? ' flex' : ' hidden')
											}
											id='example-navbar-info'
										>
											<ul className='flex flex-col items-center lg:flex-row list-none lg:ml-auto'>
												<li className='nav-item'>
													<Link
														className='flex items-center uppercase font-bold leading-snug text-gray-100 px-2 py-2 border-yellow-300 hover:border-gray-300 cursor-pointer md:border-l-2 md:border-b-2 md:border-t-2 mx-1 text-base hover:bg-gray-700'
														to='/'
													>
														Home
													</Link>
												</li>
												<li className='nav-item'>
													<Link
														className='flex items-center uppercase font-bold leading-snug text-gray-100 px-2 py-2 border-yellow-300 hover:border-gray-300 cursor-pointer md:border-b-2 md:border-t-2 mx-1 text-base hover:bg-gray-700'
														to='/about-us'
													>
														About Us
													</Link>
												</li>
												<li className='nav-item'>
													<Link
														className='flex items-center uppercase font-bold leading-snug text-gray-100 px-2 py-2 border-yellow-300 hover:border-gray-300 cursor-pointer md:border-b-2 md:border-t-2 mx-1 text-base hover:bg-gray-700'
														to='/shop'
													>
														Shop
													</Link>
												</li>
												<li className='nav-item'>
													<Link
														className='flex items-center uppercase font-bold leading-snug text-gray-100 px-2 py-2 border-yellow-300 hover:border-gray-300 cursor-pointer md:border-r-2 md:border-b-2 md:border-t-2 mx-1 text-base hover:bg-gray-700'
														to='/contact'
													>
														Contact
													</Link>
												</li>
												<li className='relative ml-3'>
													{user?.photoURL ? (
														<button
															onClick={toggle}
														>
															<img
																className='w-8 h-8 rounded-full'
																src={
																	user.photoURL
																}
																alt=''
															/>
														</button>
													) : (
														<button
															onClick={toggle}
															className='text-3xl text-yellow-300'
														>
															<FaUserCircle></FaUserCircle>
														</button>
													)}
													<div>
														{profile === 'show' ? (
															<UserProfile></UserProfile>
														) : (
															''
														)}
													</div>
												</li>
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</>
				</header>
			) : (
				<header className='bg-primary'>
					<>
						<div className='flex flex-wrap py-2'>
							<div className='w-full px-4'>
								<nav className='relative flex flex-wrap items-center justify-between'>
									<div className='container mx-auto flex flex-wrap items-center justify-between'>
										<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
											<Link
												className='leading-relaxed inline-block mr-4 py-2 whitespace-nowrap d-flex uppercase'
												to='/'
											>
												<div className='d-flex'>
													<img
														src='https://i.ibb.co/zVfS2Py/Ride-Bike-Logo.png'
														alt=''
													/>
												</div>
											</Link>
											<button
												className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
												type='button'
												onClick={() =>
													setMenuOpen(!menuOpen)
												}
											>
												<FaBars></FaBars>
											</button>
										</div>
										<div
											className={
												'lg:flex flex-grow items-center' +
												(menuOpen ? ' flex' : ' hidden')
											}
											id='example-navbar-info'
										>
											<ul className='flex flex-col items-center lg:flex-row list-none lg:ml-auto'>
												<li className='nav-item'>
													<Link
														className='flex items-center uppercase font-bold leading-snug text-gray-100 px-3 py-4 border-yellow-300 hover:border-gray-300 cursor-pointer md:border-l-2 md:border-b-2 md:border-t-2 mx-1 text-base hover:bg-gray-700'
														to='/'
													>
														Home
													</Link>
												</li>
												<li className='nav-item'>
													<Link
														className='flex items-center uppercase font-bold leading-snug text-gray-100 px-3 py-4 border-yellow-300 hover:border-gray-300 cursor-pointer md:border-b-2 md:border-t-2 mx-1 text-base hover:bg-gray-700'
														to='/about-us'
													>
														About Us
													</Link>
												</li>
												<li className='nav-item'>
													<Link
														className='flex items-center uppercase font-bold leading-snug text-gray-100 px-3 py-4 border-yellow-300 hover:border-gray-300 cursor-pointer md:border-b-2 md:border-t-2 mx-1 text-base hover:bg-gray-700'
														to='/shop'
													>
														Shop
													</Link>
												</li>
												<li className='nav-item'>
													<Link
														className='flex items-center uppercase font-bold leading-snug text-gray-100 px-3 py-4 border-yellow-300	 hover:border-gray-300 cursor-pointer md:border-r-2 md:border-b-2 md:border-t-2 mx-1 text-base mr-5 hover:bg-gray-700'
														to='/contact'
													>
														Contact
													</Link>
												</li>
												<li className='relative'>
													{user?.photoURL ? (
														<button
															onClick={toggle}
														>
															<img
																className='w-12 h-12 rounded-full'
																src={
																	user.photoURL
																}
																alt=''
															/>
														</button>
													) : (
														<button
															onClick={toggle}
															className='text-5xl text-yellow-500'
														>
															<FaUserCircle></FaUserCircle>
														</button>
													)}
													<div>
														{profile === 'show' ? (
															<UserProfile></UserProfile>
														) : (
															''
														)}
													</div>
												</li>
											</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</>
				</header>
			)}
		</>
	);
};

export default Navigation;
