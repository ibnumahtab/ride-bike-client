import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AppBar from '../../sharedComponents/AppBar/AppBar';

const Register = () => {
	const {
		handleGoogleSignIn,
		handleGithubSignIn,
		getName,
		getEmail,
		getPassword,
		setError,
		error,
		setUser,
		setIsLogin,
		saveUser,
		handleUpdateUserName,
		registerWithEmailAndPass,
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
	const emailPassRegister = e => {
		e.preventDefault();
		registerWithEmailAndPass()
			.then(result => {
				const user = result.user;
				setUser(user);
				handleUpdateUserName();
				// save user to the database
				saveUser(user?.email, user?.displayName, 'POST');
				history.push(redirect_uri);
			})
			.catch(err => {
				setError(err.message);
				console.log(err.message);
			})
			.finally(() => {
				setIsLogin(false);
			});
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
								Sign Up
							</h2>
							<p className='text-red-600'>{error}</p>
							<form action='' onSubmit={emailPassRegister}>
								<div className='flex flex-col md:flex-row justify-between mb-2'>
									<div className='md:w-1/2 mr-2'>
										<input
											onBlur={getName}
											className='bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-gray-500'
											type='text'
											placeholder='Full Name'
										/>
									</div>
									<div className='md:w-1/2 md:ml-2'>
										<input
											onBlur={getEmail}
											className='bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-gray-500'
											type='text'
											placeholder='Email Address'
										/>
									</div>
								</div>
								<div className='mb-2'>
									<input
										onBlur={getPassword}
										className='bg-transparent p-2 w-full my-2 border-b-2 focus:outline-none border-gray-500'
										type='password'
										placeholder='Password'
									/>
								</div>
								<div>
									<input
										className='md:py-3 md:px-24 px-8 py-3 border text-white hover:text-gray-700 text-lg font-semibold bg-gray-900 hover:bg-white border-gray-700 transition duration-500 ease-in-out cursor-pointer'
										type='submit'
										value='Create An Account'
									/>
								</div>
							</form>
							<p>{error}</p>
							<div className='flex flex-col md:flex-row justify-between my-8'>
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
							<h2 className='my-8'>
								Already have an account ?{' '}
								<Link
									className='primary-color font-bold'
									to='/login'
								>
									Sign In
								</Link>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
