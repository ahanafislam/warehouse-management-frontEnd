import React from 'react';
import { Card, Col } from 'react-bootstrap';

const InventoryItem = () => {
    return (
        <Col>
            <Card className='service-container border-0 shadow-sm'>
                <Card.Img variant="top" src="https://i.postimg.cc/x1nzL54b/Luzon-319.jpg" />
                <Card.Body>
                    <Card.Title>My Title</Card.Title>
                    <Card.Text>This is my lorem text. That is given to me to . Gibrish text . That have not any minning</Card.Text>
                    <div className="text-end">
                        <button className='brand-btn-sm'>Update Stock</button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default InventoryItem;