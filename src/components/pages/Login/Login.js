import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../sharedComponents/Footer/Footer';
import AppBar from '../../sharedComponents/AppBar/AppBar';

const Login = () => {
	const {
		handleGithubSignIn,
		handleGoogleSignIn,
		handleEmailAndPassword,
		setUser,
		getEmail,
		getPassword,
		setError,
		setIsLogin,
		saveUser,
	} = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/';

	const googleLogin = () => {
		handleGoogleSignIn()
			.then(result => {
				const user = result.user;
				setUser(user);
				// save user to the database
				saveUser(user?.email, user?.displayName, 'POST');
				history.push(redirect_uri);
			})
			.catch(err => {
				const error = err.message;
				setError(error);
			})
			.finally(() => {
				setIsLogin(false);
			});
	};
	const githubLogin = () => {
		handleGithubSignIn()
			.then(result => {
				const user = result.user;
				setUser(user);
				// save user to the database
				saveUser(user?.email, user?.displayName, 'POST');
				history.push(redirect_uri);
			})
			.catch(err => {
				const error = err.message;
				setError(error);
			})
			.finally(() => {
				setIsLogin(false);
			});
	};
	const emailPassLogin = e => {
		e.preventDefault();
		console.log('its clicked');
		handleEmailAndPassword()
			.then(result => {
				console.log(result);
				const user = result.user;
				setUser(user);
				history.push(redirect_uri);
			})
			.catch(err => {
				setError(err);
			})
			.finally(() => setIsLogin(false));
	};

	return (
		<>
			<AppBar></AppBar>
			<div>
				<div className='container mx-auto'>
					<div className='md:w-3/5 w-full mx-auto text-gray-900'>
						<div
							className='glass-effect overflow-hidden p-8 m-12 rounded-lg'
							action=''
						>
							<h2 className='custom-color text-8xl font-bold text-center py-5'>
								Sign In
							</h2>
							<form action='' onSubmit={emailPassLogin}>
								<div className='mb-2'>
									<input
										onBlur={getEmail}
										className='bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-gray-500'
										type='text'
										placeholder='Email Address'
									/>
								</div>
								<div className='mb-2'>
									<input
										onBlur={getPassword}
										className='bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-gray-500'
										type='text'
										placeholder='Password'
									/>
								</div>
								<div className='text-center'>
									<input
										className='md:py-3 md:px-24 px-8 py-3 border text-white hover:text-gray-700 text-lg font-semibold bg-gray-900 hover:bg-white border-gray-700 transition duration-500 ease-in-out cursor-pointer'
										type='submit'
										value='Sign In'
									/>
								</div>
							</form>
							<div className='flex flex-col md:flex-row justify-evenly my-8'>
								<button
									onClick={googleLogin}
									className='flex justify-center px-2 py-1 md:px-4 md:py-2 w-full mb-2 md:mb-0 md:mr-2 bg-color border-custom text-8xl text-red-600'
								>
									<FaGoogle />
								</button>
								<button
									onClick={githubLogin}
									className='flex justify-center px-2 py-1 md:px-4 md:py-2 w-full mb-2 md:mb-0 md:mr-2 bg-color border-custom text-8xl text-gray-900'
								>
									<FaGithub />
								</button>
							</div>
							<h2 className='my-8 text-center text-lg'>
								New User?{' '}
								<Link
									className='primary-color font-bold'
									to='/register'
								>
									Sign Up
								</Link>
							</h2>
						</div>
					</div>
				</div>
			</div>
			<Footer></Footer>
		</>
	);
};

export default Login;
