import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setItems(data));
    },[setItems]);

    return (
        <div className='mt-5'>
            <p className='text-center fs-4'>Inventory Items</p>
            <Row xs={1} sm={1} md={2} lg={3} className="g-5 me-auto ms-auto">
                {
                    items.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </Row>
            <div className="text-center mt-3">
                <button className='brand-btn'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default InventoryItems;