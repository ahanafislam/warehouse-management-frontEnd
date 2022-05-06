import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import NewProduct from '../NewProduct/NewProduct';

const NewProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('newProducts.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    },[]);

    return (
        <div className='mt-3'>
            <p className='text-center fs-4'>New Products</p>
            <Row xs={1} sm={2} md={3} lg={4} className="g-5 me-auto ms-auto">
                {
                    products.map(product => <NewProduct
                        key={product.id}
                        product={product}
                    ></NewProduct>)
                }
            </Row>
        </div>
    );
};

export default NewProducts;