import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

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

    // Decrease The value of Quantity
    const decreaseQuantity = () => {
        let newQuantity;

        if(quantity <= 0){
            newQuantity = 0;
            toast("Sorry! your stock is empty.");
        }
        else{
            newQuantity = quantity - 1;
        }
            

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({newQuantity: newQuantity})
        })
            .then(res => res.json())
            .then(result => {
                setQuantity(newQuantity);
                console.log(result);
            } );
    }

    // Increase the value of Quentity
    const restock = event => {
        event.preventDefault();
        const newStock = parseInt(event.target.stockNumber.value);

        let updateStock = quantity + newStock;

        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify({updateStock: updateStock})
        })
            .then(res => res.json())
            .then(result => {
                setQuantity(updateStock);
                event.target.stockNumber.value = "";
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
                        <div className='d-md-flex justify-content-between align-items-center'>
                            <form onSubmit={restock}>
                                <div className="input-group">
                                    <input type="number" name='stockNumber' className="form-control" placeholder="Restock Item" aria-label="Restock" aria-describedby="basic-addon2"/>
                                    <button type='submit' className="brand-btn-sm" id="basic-addon2">Restock</button>
                                </div>
                            </form>
                            <button className='brand-btn' onClick={decreaseQuantity}>Delivered</button>
                        </div>
                    </Card.Body>
                    </div>
                </div>
            </Card>
        </Container>
    );
};

export default InventoryDetails;