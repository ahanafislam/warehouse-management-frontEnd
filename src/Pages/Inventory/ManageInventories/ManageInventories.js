import React from 'react';
import { Container } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import {GrDocumentUpdate} from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import './ManageInventories.css';
import { toast } from 'react-toastify';

const ManageInventories = () => {
    const [items, setItems] = useItems();
    const navigate = useNavigate();
    
    let num = 1;

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete that?')

        if(proceed) {
            const url = `https://ashbab.herokuapp.com/inventory/${id}`;
            
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                    if(data.acknowledged) {
                        toast('Your item has been deleted.')
                    }
                });
        }
    }

    return (
        <Container>
            <p className='text-center fs-4 mb-4'>Inventory Items List</p>
            <div className='text-end mb-1'>
                <button onClick={() => navigate('/add_new_item/')} className='brand-btn-md'><AiOutlineAppstoreAdd className='me-2 fs-5'></AiOutlineAppstoreAdd>Add New Item</button>
            </div>
            <div className="table-responsive">
                <table className="table table-hover table-borderless table-sm align-middle text-center">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Product Id</th>
                            <th scope="col">Supplier</th>
                            <th scope="col">Description</th>
                            <th scope="col">Total Stock</th>
                            <th scope="col">Update Stock</th>
                            <th scope="col">Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr key={item._id}>
                                <th scope="row">{num++}</th>
                                <td><img src={item.img} style={{width:"40px"}} alt="product_img"/></td>
                                <td>{item.name}</td>
                                <td>{item._id}</td>
                                <td>{item.supplier}</td>
                                <td>{item.description.slice(0, 30).concat('...')}</td>
                                <td>{item.quantity}</td>
                                <td className='p-0'>
                                    <button className='btn btn-sm btn-outline-info' onClick={() => navigateToInventoryDetail(item._id)}><GrDocumentUpdate></GrDocumentUpdate></button>
                                </td>
                                <td className='p-0' style={{width:"25px"}}>
                                    <button onClick={() => handleDelete(item._id)} className='btn btn-sm btn-outline-danger'><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default ManageInventories;