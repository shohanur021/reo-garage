import React from 'react';
import { Link } from 'react-router-dom';

const AdminLinks = () => {
    return (
        <div className="pt-3 pl-3">
            <Link  to="/home"> <p className="userlink" >Home</p></Link>
            <Link  to="/addService"> <p className="userlink" >Add Service</p></Link>
            <Link  to="/addAmdin"> <p className="userlink">Add Admin</p></Link>
            <Link  to="/allOrders"> <p className="userlink">orders</p></Link>
            <Link  to="/adminsEmail"> <p className="userlink">Admins List</p></Link>
        </div>
    );
};

export default AdminLinks;
