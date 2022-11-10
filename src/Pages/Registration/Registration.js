import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Registration = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { createUser, updateUserPrifile, googleProviderLogIn, githubProviderLogIn } = useContext(AuthContext);
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
        const fullName = form.fullName.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fullName, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/');
                handelUpdateUserProfile(fullName)
            })
            .catch(error => setError(error.message))
    }
    const handelUpdateUserProfile = (name) => {
        const profile = {
            displayName: name,
        }
        updateUserPrifile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-full md:w-2/4 lg:w-2/6">
                <div className="card w-full shadow-2xl bg-base-100">
                    <form onSubmit={handelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='fullName' placeholder="Full Name" className="input input-bordered" required />
                        </div>
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
                            <label>{error.slice(10)}</label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-center m-3">
                        <p className='text-2xl mb-2'>Or</p>
                        <button className='btn btn-outline btn-success mr-4 text-4xl rounded-full' onClick={handelGoogleSignIn}>
                            <FaGoogle />
                        </button>
                        <button className='btn btn-outline text-4xl rounded-full' onClick={handelGithubSignIn}>
                            <FaGithub />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;