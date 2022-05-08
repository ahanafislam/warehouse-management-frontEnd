import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <Container>
            <div className='d-flex justify-content-center align-items-center me-auto ms-auto'>
                <div className="form-shadow p-5">
                    <h2 className='brand-text text-center'>Sign Up</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required/>
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