import React, { useEffect, useState} from 'react';
import googleLogo from '../../../images/googleLogo.png';
import './SocialLogin.css';
import { useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();
    const [token, setToken] = useState(false);

    let from = location.state?.from?.pathname || "/";

    const getToken = async email => {
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email})
        }

        const response = await fetch('https://ashbab.herokuapp.com/get_auth_token', options);
        const data = await response.json();
        localStorage.setItem('accessToken', data.accessToken);
        setToken(true);
    }

    useEffect(() => {
        if(googleUser) {
            getToken(googleUser.user.email);
            token && navigate(from, { replace: true });
        }
    },[googleUser, navigate, from, token]);

    if(googleLoading){
        return <Loading></Loading>
    }

    if(googleError) {
        toast(googleError?.message);
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div className='bg-brand m-2' style={{height:'1px'}}></div>
                <p className='mt-2 pt-2'>Or</p>
                <div className='bg-brand m-2' style={{height:'1px'}}></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='d-block mx-auto my-1 google-btn'>
                   <img src={googleLogo} alt="google-logo" style={{width: "25px", marginRight: '4px'}} /> Sign In with Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;