import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    const [items] = useItems();
    const navigate = useNavigate();

    const filterItems = items.filter((item, index) => index < 6);

    return (
        <div className='mt-5'>
            <p className='text-center fs-4'>Inventory Items</p>
            <Row xs={1} sm={1} md={2} lg={3} className="g-5 me-auto ms-auto">
                {
                    filterItems.map(item => <InventoryItem
                        key={item._id}
                        item={item}
                    ></InventoryItem>)
                }
            </Row>
            <div className="text-center mt-3">
                <button onClick={() => navigate('/manage_inventory/')} className='brand-btn'>Manage Inventories</button>
            </div>
        </div>
    );
};

export default InventoryItems;