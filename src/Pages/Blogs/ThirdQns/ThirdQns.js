
import React from 'react';
import { Card } from 'react-bootstrap';

const ThirdQns = () => {
    return (
        <Card className='p-3 border-0 shadow'>
            <Card.Body>
                <h4 className='brand-text text-center mb-3'>When should we use nodejs and when should we use mongodb?</h4>
                <p>MongoDB and NodeJS both are two different technologies. MongoDB is a NoSQL database system. MongoDB is use for store data. When we need to store some data we can use MongoDB.</p>
                <p>On the other hand Node js is an interpreter and environment for running javascript. Its responsibility is to execute our application. Basically, Node Js is used to build servers that can respond to web requests, though it can be used for lots of other types of code too.</p>
            </Card.Body>
        </Card>
    );
};

export default ThirdQns;