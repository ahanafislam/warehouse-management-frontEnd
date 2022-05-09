import React, { useEffect, useRef } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile} from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Registration = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    
    let errorElement;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    useEffect(() => {
        user && navigate("/");
    },[user, navigate]);

    if(loading || updating) {
        return <Loading></Loading>
    }

    if(error || updateError) {
        errorElement = <p className='text-danger'>{error?.message} {updateError?.message}</p>
    }

    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center me-auto ms-auto'>
                <div className="form-shadow p-5">
                    <h2 className='brand-text text-center'>Sign Up</h2>
                    {errorElement}
                    <Form onSubmit={handleRegister}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" placeholder="Name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                        </Form.Group>
                        <button className='brand-btn' type="submit">
                            Sign Up
                        </button>
                        <p className='mt-2'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none ms-1'>Please Login</Link></p>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Registration;