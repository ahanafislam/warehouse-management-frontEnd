import React from 'react';
import { Row } from 'react-bootstrap';
import Facility from '../Facility/Facility';

const Facilities = () => {
    return (
        <div className='g-1 mt-5 p-2'>
            <Row xs={1} sm={2} md={3} lg={4} className="me-auto ms-auto">
                <Facility></Facility>
            </Row>
        </div>
    );
};

export default Facilities;