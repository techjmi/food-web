import React, { useState } from 'react';
import SignUp from './SignUp';
import { RxCross2 } from "react-icons/rx";
import { Button } from 'flowbite-react';

const Login = ({ onClose,onCancel  }) => {
    const [showSignup, setShowSignup] = useState(false);
    const [currState, setCurrState] = useState('login');

    const handleSignup = () => {
        setCurrState('signUp');
        setShowSignup(true);
    }

    const handleClose = () => {
        setCurrState('login');
        setShowSignup(false);
    }
    return (
        <div className='inset-0 flex items-center justify-center bg-opacity-50 z-40 fixed'>
            <div className="w-[95%] max-w-md bg-white pb-8 pt-2 rounded-lg shadow dark:border md:mt-0 xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <RxCross2 className='float-right mt-4 me-4 font-extrabold cursor-pointer size-6' onClick={onCancel}/>
                <div className="space-y-2 md:space-y-3 sm:p-4">
                    {currState === 'login' ? (
                        <>
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                                Login Here
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                        <h2 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center'>Sign Up Here</h2>
                        <SignUp handleClose />
                        </>
                        
                    )}
                      <Button type="submit" className="w-full text-black bg-blue-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-1 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                {currState==='login'?'Login':"Create An Account"}
            </Button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        {currState === 'login' ? 'Don\'t have an account? ' : 'Already have an account? '}
                        <span onClick={currState === 'login' ? handleSignup : handleClose} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500">
                            {currState === 'login' ? 'Sign Up Here' : 'Login Here'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
