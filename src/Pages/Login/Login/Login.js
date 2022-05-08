import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center me-auto ms-auto mt-2'>
                <div className="form-shadow p-5">
                    <h2 className='brand-text text-center'>Log In</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
                        </Form.Group>
                        <button className='brand-btn' type="submit">
                            Log in
                        </button>
                        <p className='mt-2'>New to Ashbab? <Link to="/register" className='text-primary pe-auto text-decoration-none ms-1'>Please Sign Up</Link></p>
                        <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button></p>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Login;