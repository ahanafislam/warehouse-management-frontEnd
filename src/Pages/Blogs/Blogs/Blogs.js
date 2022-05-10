import React from 'react';
import { Container } from 'react-bootstrap';
import FirstQns from '../FirstQns/FirstQns';
import SecondQns from '../SecondQns/SecondQns';
import ThirdQns from '../ThirdQns/ThirdQns';

const Blogs = () => {
    return (
        <Container>
            <FirstQns></FirstQns>
            <SecondQns></SecondQns>
            <ThirdQns></ThirdQns>
        </Container>
    );
};

export default Blogs;