import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const UserProfile = () => {
	const { user, logOut } = useAuth();
	return (
		<div className='w-48 absolute right-0 rounded text-white text-center z-50 overflow-auto border border-dashed mt-5'>
			<div className='container mx-auto'>
				<div className=''>
					{user?.photoURL ? (
						<img
							className='w-24 h-24 my-4 rounded-full mx-auto'
							src={user.photoURL}
							alt=''
						/>
					) : (
						<div className='text-4xl py-4 '>
							<FaUserCircle className='mx-auto'></FaUserCircle>
						</div>
					)}
				</div>
				<div>
					<h2>{user.displayName}</h2>
					<div>
						<button className='bg-primary my-4 px-2 py-1 border text-white hover:text-gray-700 text-lg font-semibold  bg-gray-900 hover:bg-white border-gray-700 transition duration-500 ease-in-out'>
							<Link to='/dashboard'>View Profile</Link>
						</button>
					</div>
					<hr />
					<div>
						{user?.email || user?.displayName ? (
							<button
								className='bg-primary my-4 px-4 py-1 primary-color mb-4 border text-white hover:text-gray-700 text-lg font-semibold  bg-gray-900 hover:bg-white border-gray-700 transition duration-500 ease-in-out'
								onClick={logOut}
							>
								LogOut
							</button>
						) : (
							<button className='bg-primary my-4 rounded px-4 py-1 primary-color mb-4'>
								<Link to='/login'>Login</Link>
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfile;
