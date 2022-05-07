import React from 'react';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { BsCashCoin } from 'react-icons/bs';
import { GiReturnArrow } from 'react-icons/gi';
import { BiSupport } from 'react-icons/bi';
import { Card, Col } from 'react-bootstrap';

const Facility = () => {
    return (
        <>
            <Col>
                <Card className='border-0 shadow-sm text-center bg-transparent p-2'>
                <Card.Body>
                    <MdOutlineLocalShipping className='fs-1'></MdOutlineLocalShipping>
                    <h6>Free Shipping</h6>
                    <small>You will love at great low prices</small>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='border-0 shadow-sm text-center bg-transparent p-2'>
                <Card.Body>
                    <BsCashCoin className='fs-1'></BsCashCoin>
                    <h6>Flexible Payment</h6>
                    <small>Pay with Multiple Credit Cards</small>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='border-0 shadow-sm text-center bg-transparent p-2'>
                <Card.Body>
                    <GiReturnArrow className='fs-1'></GiReturnArrow>
                    <h6>14 Day Returns</h6>
                    <small>Within 30 days for an exchange.</small>
                </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className='border-0 shadow-sm text-center bg-transparent p-2'>
                <Card.Body>
                    <BiSupport className='fs-1'></BiSupport>
                    <h6>Online Support</h6>
                    <small>24 hours a day, 7 days a week</small>
                </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Facility;