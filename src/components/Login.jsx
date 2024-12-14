import React, { useContext, useState } from 'react'
import { AuthContext} from '../contexts/AuthProvider'
import { Link } from 'react-router-dom'
import Googleimage from '../assets/bookimages/google.webp'

function Login() {
    const {login, signInWithGoogle} = useContext(AuthContext)
    const [error, setError] = useState('')

   

    const handleLogin = (e) => {
        e.preventDefault();
        // perform login logic
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('User logged in successfully');
            window.location.href = '/';
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
            // ..
          });
    }
    const handleRegister = (e) => {
        e.preventDefault();
        signInWithGoogle()
        .then((result) =>{
            // signed in successfully
            const user = result.user;
            alert('User signed in with Google successfully');
            window.location.href='/';
        })
        .catch((error) =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
        });
    }
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Log in  form</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input autocomplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                </div>
                                <div className="relative">
                                    <input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>
                                {/* Display error message for incorrect email and password */}
                                {error?<p className='text-red-500'>Incorrect email or password</p>:""}
                                <span>Don't have an account? <Link className='text-blue-700 underline' to={'/signup'}>Sign Up</Link>here</span>
                                <div className="relative">
                                    <button className="bg-blue-500 text-white rounded-md px-2 py-1">Log In</button>
                                </div>
                                <hr />
                                <div>
                                    <button onClick={handleRegister}>
                                        <img src={Googleimage} alt='google image' className='w-12 h-12 inline-block rounded-full' />
                                        Login with Google
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;