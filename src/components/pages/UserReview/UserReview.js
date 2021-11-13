import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import swal from 'sweetalert';

const UserReview = () => {
	const { user } = useAuth();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = data => {
		console.log(data);
		axios
			.post('https://ride-bike.herokuapp.com/reviews', {
				...data,
				email: user?.email,
			})
			.then(res => {
				console.log(res.data);
				if (res.data?.insertedId) {
					swal(
						'Congratualations!!!',
						`You have ordered successfully`,
						'success'
					);
					reset();
				}
			});
	};
	return (
		<>
			<div>
				<div className='bg-gray-100'>
					<div className='w-2/3 ml-8 mt-8 p-4 border rounded'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								className='bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-gray-500'
								defaultValue={user?.displayName}
								{...register('name', {
									required: true,
								})}
							/>
							{errors.exampleRequired && (
								<span>This field is required</span>
							)}
							<input
								className='bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-gray-500'
								{...register('designation', {
									required: true,
								})}
								placeholder='Position'
							/>
							{errors.exampleRequired && (
								<span>This field is required</span>
							)}
							<textarea
								className='bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-gray-500'
								placeholder='Your Awesome Feedback Here'
								{...register('review', {
									required: true,
								})}
								rows='10'
							></textarea>
							{errors.exampleRequired && (
								<span>This field is required</span>
							)}

							<input
								className='w-full border p-2 bg-primary'
								type='submit'
							/>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default UserReview;
