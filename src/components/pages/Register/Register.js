import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import signUp from "../../../img/signup.png";
import AppBar from "../../sharedComponents/AppBar/AppBar"

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
    const redirect_uri = location.state?.from || "/";

    const googleLogin = () => {
        handleGoogleSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                // save user to the database
                saveUser(user?.email, user?.displayName, "POST");
                history.push(redirect_uri);
            })
            .catch((err) => {
                const error = err.message;
                setError(error);
            })
            .finally(() => {
                setIsLogin(false);
            });
    };
    const githubLogin = () => {
        handleGithubSignIn()
            .then((result) => {
                const user = result.user;
                setUser(user);
                // save user to the database
                saveUser(user?.email, user?.displayName, "POST");
                history.push(redirect_uri);
            })
            .catch((err) => {
                const error = err.message;
                setError(error);
            })
            .finally(() => {
                setIsLogin(false);
            });
    };
    const emailPassRegister = (e) => {
        e.preventDefault();
        registerWithEmailAndPass()
            .then((result) => {
                const user = result.user;
                setUser(user);
                handleUpdateUserName();
                // save user to the database
                saveUser(user?.email, user?.displayName, "POST");
                history.push(redirect_uri);
            })
            .catch((err) => {
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
            <div className='bg-black'>
                <div className='container mx-auto flex flex-col-reverse md:flex-row items-center'>
                    <div className='md:w-3/5 w-full text-white'>
                        <div className='glass-effect p-8 md:m-12 m-4 rounded-lg'>
                            <h2 className='custom-color text-4xl'>Sign Up</h2>
                            <p className='my-4'>
                                And enjoy life during the time you just saved!
                            </p>
                            <p className='text-red-600'>{error}</p>
                            <form action='' onSubmit={emailPassRegister}>
                                <div className='flex flex-col md:flex-row justify-between mb-2'>
                                    <div className='md:w-1/2 mr-2'>
                                        <label htmlFor=''>Full Name</label>
                                        <br />
                                        <input
                                            onBlur={getName}
                                            className='w-full text-gray-500 rounded py-2 pl-4'
                                            type='text'
                                            placeholder='Full Name'
                                        />
                                    </div>
                                    <div className='md:w-1/2 md:ml-2'>
                                        <label htmlFor=''>Email Address</label>
                                        <br />
                                        <input
                                            onBlur={getEmail}
                                            className='w-full text-gray-500 rounded py-2 pl-4'
                                            type='text'
                                            placeholder='Email Address'
                                        />
                                    </div>
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor=''>Password</label>
                                    <br />
                                    <input
                                        onBlur={getPassword}
                                        className='w-full text-gray-500 rounded py-2 pl-4'
                                        type='password'
                                        placeholder='Password'
                                    />
                                </div>
                                <div>
                                    Creating an account means you are okay with
                                    our Terms of Service and Privacy Policy
                                </div>
                                <div>
                                    <input
                                        className='text-black bg-white text-xl rounded mt-4  px-8 py-2'
                                        type='submit'
                                        value='Create An Account'
                                    />
                                </div>
                            </form>
                            <div className='flex flex-col md:flex-row justify-between my-8'>
                                <p>{error}</p>
                                <button
                                    onClick={googleLogin}
                                    className='flex items-center justify-center bg-white text-black px-4 py-2 mb-2 md:mb-0 w-full mr-2 rounded'
                                >
                                    <FaGoogle />{" "}
                                    <h2 className='pl-2'>
                                        Sign up with Google
                                    </h2>
                                </button>
                                <button
                                    onClick={githubLogin}
                                    className='flex items-center justify-center bg-white text-black px-4 py-2 w-full md:ml-2 rounded'
                                >
                                    <FaGithub />{" "}
                                    <h2 className='pl-2'>
                                        Sign up with Github
                                    </h2>
                                </button>
                            </div>
                            <h2 className='my-8'>
                                Already have an account ?{" "}
                                <Link
                                    className='primary-color font-bold'
                                    to='/login'
                                >
                                    Sign In
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className='md:w-2/5 w-full'>
                        <img src={signUp} alt='' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
