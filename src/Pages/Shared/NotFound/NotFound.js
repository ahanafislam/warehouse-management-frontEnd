import React from 'react';
import { Container } from 'react-bootstrap';
import notFound from '../../../images/notFoundImg.png';

const NotFound = () => {
    return (
        <Container className="d-flex justify-content-center align-item-center">
            <div className='w-50'>
                <img src={notFound} alt="NotFound" className='img-fluid'/>
                <h1 className='brand-text text-center'>Sorry! Page Not Found</h1>
            </div>
        </Container>
    );
};

export default NotFound;