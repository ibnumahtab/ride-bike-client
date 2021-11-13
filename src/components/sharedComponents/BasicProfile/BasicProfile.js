import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const BasicProfile = () => {
	const { user } = useAuth();
	return (
		<div>
			<div className='bg-gray-200 grid grid-cols-1 divide-y-2 divide-gray-500 p-8 md:m-12 rounded'>
				<h2 className='text-4xl  py-4 my-4'>My Profile</h2>

				<div className='flex items-center flex-col md:flex-row overflow-hidden pt-8'>
					<div className=' md:w-1/4'>
						{user?.photoURL ? (
							<img
								className='md:w-40 md:h-40 w-12 h-12 my-2 mx-auto rounded-full'
								src={user?.photoURL}
								alt=''
							/>
						) : (
							<FaUserCircle className='md:w-40 md:h-40 w-16 h-16'></FaUserCircle>
						)}
					</div>
					<div className='w-3/4'>
						<h2 className='text-3xl'>{user?.displayName}</h2>
						<h2 className='text-3xl'>{user?.email}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BasicProfile;
