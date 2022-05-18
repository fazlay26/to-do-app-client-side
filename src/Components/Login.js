import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate('/task')
    }
    const handleGoogle = () => {
        signInWithGoogle()
    }
    return (

        <div className='flex flex-col justify-center items-center h-screen'>
            <h2 className='text-2xl'>Please Login!!!</h2>
            <p className='text-xl mb-5'>For To-Do app you must have to Login</p>

            <button onClick={handleGoogle} class="btn btn-active btn-secondary">Google Login</button>
        </div>

    );
};

export default Login;