import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminLinks from '../../shared/AdminLinks/AdminLinks';
import UserOrders from '../UserOrders/UserOrders';
import './AllOrder.css'

const AllOrders = () => {
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch('https://serene-cliffs-67475.herokuapp.com/db/allOrders')
            .then(res => res.json())
            .then(data => setOrderList(data))
    },[])

    return (
        <div className="row w-100">
            <div className="col-md-2 links-container">
                <AdminLinks></AdminLinks>
            </div>
            <div className="col-md-10">
                <h2 className="mt-3 ml-2">All Customer Orders :</h2>
                <div className="card-columns p-2">
                    {
                        orderList.map(order => <UserOrders orderlist={order} key={order._id}></UserOrders>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllOrders;

