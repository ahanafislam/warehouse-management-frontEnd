import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {item_id} = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(0);
    
    useEffect(() => setQuantity(item.quantity), [item.quantity]);
    
    const url = `http://localhost:5000/inventory/${item_id}`;

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setItem(data))
    },[url]);

    const updateStock = () => {
        const newQuentity = quantity - 1;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({newQuentity})
        })
            .then(res => res.json())
            .then(result => {
                setQuantity(newQuentity);
                console.log(result);
            } );
    }

    return (
        <Container>
            <Card className="border-0">
                <div className="row g-3">
                    <div className="col-md-4">
                        <img src={item.img} className="img-fluid rounded-start" alt="itemPicture"/>
                    </div>
                    <div className="col-md-8">
                    <Card.Body>
                        <h5>{item.name}</h5>
                        <h6>Supplier : {item.supplier}</h6>
                        <h6>Product Id : {item._id}</h6>
                        <p>{item.description}</p>
                        <br></br>
                        <h6>Total Stock: {quantity}</h6>
                        <hr className='brand-text mt-2'/>
                        <button className='brand-btn' onClick={updateStock}>Delivered</button>
                    </Card.Body>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default InventoryDetails;