import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='bg-gray-400'>
			<div className='container mx-auto pb-4'>
				<ul className='flex justify-center pt-12'>
					<li className='text-lg px-4 border-primary'>
						<Link>Home</Link>
					</li>
					<li className='text-lg px-4 border-primary'>
						<Link>About Us</Link>
					</li>
					<li className='text-lg px-4 border-primary'>
						<Link>Shop</Link>
					</li>
					<li className='text-lg px-4 border-primary'>
						<Link>Blogs</Link>
					</li>
					<li className='text-lg px-4'>
						<Link>Contact</Link>
					</li>
				</ul>
			</div>
			<div className='border-t border-gray-400'>
				<p className='pt-3 text-center'>
					Copyright © 2021 |{' '}
					<span className='text-yellow-800'>Ibnu Mahtab</span> | All
					Right Reserved
				</p>
				<ul className='flex justify-center py-8'>
					<li className='text-xl px-4 text-primary'>
						<Link>
							<FaFacebookF></FaFacebookF>
						</Link>
					</li>
					<li className='text-xl px-4 text-primary'>
						<Link>
							<FaTwitter></FaTwitter>
						</Link>
					</li>
					<li className='text-xl px-4 text-primary'>
						<Link>
							<FaInstagram></FaInstagram>
						</Link>
					</li>
					<li className='text-xl px-4 text-primary'>
						<Link>
							<FaYoutube></FaYoutube>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
