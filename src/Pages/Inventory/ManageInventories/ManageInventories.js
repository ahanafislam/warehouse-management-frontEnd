import React from 'react';
import { Container } from 'react-bootstrap';
import useItems from '../../../hooks/useItems';
import {GrDocumentUpdate} from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import './ManageInventories.css';

const ManageInventories = () => {
    const [items] = useItems();
    const navigate = useNavigate();
    
    let num = 1;

    const navigateToInventoryDetail = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <Container>
            <table class="table table-hover table-borderless table-sm text-center">
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
                        items.map(item => <tr>
                            <th scope="row">{num++}</th>
                            <td><img src={item.img} style={{width:"40px"}} alt="product_img"/></td>
                            <td>{item.name}</td>
                            <td>{item._id}</td>
                            <td>{item.supplier}</td>
                            <td>{item.description.slice(0, 30).concat('...')}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button className='btn btn-sm btn-outline-info' onClick={() => navigateToInventoryDetail(item._id)}><GrDocumentUpdate></GrDocumentUpdate></button>
                            </td>
                            <td>
                                <button className='btn btn-sm btn-outline-danger'><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </Container>
    );
};

export default ManageInventories;