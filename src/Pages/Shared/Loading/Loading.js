import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container>
            <div style={{height: '300px'}} className='w-100 d-flex justify-content-center align-items-center brand-text display-1'>
                <Spinner animation="border"/>
            </div>
        </Container>
    );
};

export default Loading;