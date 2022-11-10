import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';


const LogIn = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {
        signIn,
        googleProviderLogIn,
        githubProviderLogIn
    } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handelGoogleSignIn = () => {
        googleProviderLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    const handelGithubSignIn = () => {
        githubProviderLogIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }
    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/');
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <label className='text-xl text-orange-700'>{ error.slice(10)}</label>
                            <button className="btn btn-primary">Sign In</button>
                        </div>
                    <div className="text-center m-3">
                        <p className='text-2xl mb-2'>Or</p>
                            <button className='btn btn-outline btn-success mr-4 text-4xl rounded-full' onClick={handelGoogleSignIn}>
                            <FaGoogle/>
                        </button>
                            <button className='btn btn-outline text-4xl rounded-full' onClick={handelGithubSignIn}>
                            <FaGithub/>
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default LogIn;