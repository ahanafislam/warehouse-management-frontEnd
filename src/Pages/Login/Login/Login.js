import React, { useEffect, useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        user && navigate(from, { replace: true });
    },[user, navigate, from]);

    if(loading || sending) {
        return <Loading></Loading>
    }

    if(error) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        
        if(email) {
            toast("Please Cheack Your Email.");
        }

        else {
            toast("Please Provide email id");
        }
    }

    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center me-auto ms-auto mt-2'>
                <div className="form-shadow p-5">
                    <h2 className='brand-text text-center'>Log In</h2>
                    {errorElement}
                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <button className='brand-btn' type="submit">
                            Log in
                        </button>
                        <p className='mt-2'>New to Ashbab? <Link to="/register" className='text-primary pe-auto text-decoration-none ms-1'>Please Sign Up</Link></p>
                        <p>Forget Password? <button onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button></p>
                        <SocialLogin></SocialLogin>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Login;