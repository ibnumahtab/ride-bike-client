import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImg from "../../../img/signin.png";
import Footer from "../../sharedComponents/Footer/Footer";
import AppBar from "../../sharedComponents/AppBar/AppBar";

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
    const emailPassLogin = (e) => {
        e.preventDefault();
        console.log("its clicked");
        handleEmailAndPassword()
            .then((result) => {
                console.log(result);
                const user = result.user
                setUser(user);
                history.push(redirect_uri);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => setIsLogin(false));
    };
    return (
        <>
            <AppBar></AppBar>
            <div className='bg-black'>
                <div className='container mx-auto flex flex-col-reverse md:flex-row items-center'>
                    <div className='md:w-3/5 w-full text-white'>
                        <div
                            className='glass-effect overflow-hidden p-8 m-12 rounded-lg'
                            action=''
                        >
                            <h2 className='custom-color text-4xl'>Login</h2>
                            <p className='my-4'>
                                And enjoy life during the time you just saved!
                            </p>
                            <form action="" onSubmit={emailPassLogin}>
                                <div>
                                    <label htmlFor=''>Email Address</label>
                                    <br />
                                    <input
                                        onBlur={getEmail}
                                        className='w-full glass-effect text-gray-700 rounded py-2 pl-4'
                                        type='text'
                                        placeholder='Email Address'
                                    />
                                </div>
                                <div className='mb-2'>
                                    <label htmlFor=''>Password</label>
                                    <br />
                                    <input
                                        onBlur={getPassword}
                                        className='w-full glass-effect text-gray-700 rounded py-2 pl-4'
                                        type='text'
                                        placeholder='Password'
                                    />
                                </div>
                                <div>
                                    <input
                                        className='text-black bg-white md:text-xl rounded mt-4  md:px-8 px-2 py-2'
                                        type='submit'
                                        value='Login'
                                    />
                                </div>
                            </form>
                            <div className='flex flex-col md:flex-row justify-between my-8'>
                                <button
                                    onClick={googleLogin}
                                    className='flex items-center justify-center bg-white text-black px-2  py-1 md:px-4 md:py-2 w-full mb-2 md:mb-0 md:mr-2 bg-color border-custom'
                                >
                                    <FaGoogle />{" "}
                                    <h2 className='pl-2'>
                                        Sign up with Google
                                    </h2>
                                </button>
                                <button
                                    onClick={githubLogin}
                                    className='flex items-center justify-center bg-white text-black px-2 py-1 md:px-4 md:py-2 mt-2 md:mt-0 w-full md:ml-2 bg-color border-custom'
                                >
                                    <FaGithub />{" "}
                                    <h2 className='pl-2'>
                                        Sign up with Github
                                    </h2>
                                </button>
                            </div>
                            <h2 className='my-8'>
                                Haven't Account Yet?{" "}
                                <Link
                                    className='primary-color font-bold'
                                    to='/register'
                                >
                                    Sign Up
                                </Link>
                            </h2>
                        </div>
                    </div>
                    <div className='md:w-2/5 w-full'>
                        <img src={loginImg} alt='' />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Login;
