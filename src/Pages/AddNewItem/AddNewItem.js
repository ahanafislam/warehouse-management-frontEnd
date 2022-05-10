import React from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleAddItem = event => {
        event.preventDefault();

        const data = {
            name: event.target.name.value,
            img: event.target.imgUrl.value,
            description: event.target.description.value,
            price: parseFloat(event.target.price.value),
            supplier: event.target.supplier.value,
            quantity: parseInt(event.target.quantity.value),
            author: user.displayName,
            author_email: user.email
        }

        fetch ('http://localhost:5000/inventory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                event.target.name.value = "";
                event.target.imgUrl.value = "";
                event.target.description.value = "";
                event.target.price.value = "";
                event.target.supplier.value = "";
                event.target.quantity.value = "";
                
                if(result.acknowledged) {
                    toast("Your product successfully added.");
                    navigate('/my_items/');
                }
            });
    }

    return (
        <Container>
            <p className='text-center fs-4 mb-4'>Add New Item</p>
            <Card className="col-md-7 ms-auto me-auto p-3 p-md-5 form-shadow border-0">
                <Form onSubmit={handleAddItem}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" name='name' placeholder="Enter product Name" required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicImg">
                                <Form.Label>Picture Url</Form.Label>
                                <Form.Control type="url" name='imgUrl' placeholder="Enter product picture link" required/>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" min='1' name='price' placeholder="Enter product price" required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="formBasicQuantity">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" min="1" step="1" name='quantity' placeholder="Enter product quantity" required/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicSupplier">
                                <Form.Label>Supplier Name</Form.Label>
                                <Form.Control type="text" name='supplier' placeholder="Enter supplier name" required/>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control name='description' as="textarea" rows={3} placeholder="Enter some short descriptions" required/>
                    </Form.Group>

                    <div className="text-end">
                        <button type="submit" className='brand-btn-md'><AiOutlineAppstoreAdd className='me-2 fs-5'></AiOutlineAppstoreAdd>Add New Item</button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default AddNewItem;