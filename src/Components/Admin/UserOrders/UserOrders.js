import React from 'react';
import { useState } from 'react';

const UserOrders = (props) => {
    const order = props.orderlist;
    const [action, setAction] = useState(order.orderStatus)

    const handleProcessing = (id) => {
        fetch(`https://serene-cliffs-67475.herokuapp.com/db/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: "processing" })
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                setAction("processing")
            }
        })
    }

    const handlePending = (id) => {
        fetch(`https://serene-cliffs-67475.herokuapp.com/db/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: "pending" })
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                setAction("pending")
            }
        })
    }


    return (
        <div className="card shadow border">
            <div className="card-body">
                <h6 className="card-title">Servive : {order.orderService.serviceName}</h6>
                <p className="card-text m-0">Cost : {order.orderService.cost} $</p>
                <p className="card-text m-0"><small> Name : {order.name}</small></p>
                <p className="card-text m-0"><small> email : {order.email}</small></p>
                <p className="card-text m-0"><small> adress : {order.shipment.address}</small></p>
                <div className="d-flex  justify-content-between">
                    <p className="card-text m-0"><small> mobile : {order.shipment.mobileNo}</small></p>
                    <p className="card-text m-0"><small className="text-muted">date : {order.orderTime.split('T')[0]}</small></p>
                </div>
                <div className="d-flex  justify-content-between">
                    <p className="card-text m-0 font-weight-bold"> Take Action :</p>
                    {
                        action === "pending" ?
                            <button className="btn btn-success m-0 p-1" onClick={() => handleProcessing(order._id)}>make processing</button>
                            :
                            <button className="btn btn-danger m-0 p-1" onClick={() => handlePending(order._id)}>make pending</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserOrders;