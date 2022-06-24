import React from 'react';
import { Row } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import NewProduct from '../NewProduct/NewProduct';

const NewProducts = () => {
    const { isLoading, error, data:products } = useQuery('products', () =>
        fetch('https://ashbab.herokuapp.com/newProducts')
            .then(res =>res.json())
    )

    if(isLoading) {
        return <Loading/>
    }


    return (
        <div className='mt-4'>
            <p className='text-center fs-4'>New Products</p>
            <Row xs={1} sm={2} md={3} lg={4} className="g-5 me-auto ms-auto">
                {
                    products?.map(product => <NewProduct
                        key={product._id}
                        product={product}
                    ></NewProduct>)
                }
            </Row>
        </div>
    );
};

export default NewProducts;