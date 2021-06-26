import React from 'react';
import { Link } from 'react-router-dom';
import './UserLinks.css'

const UserLinks = () => {
    return (
        <div className="pt-3 pl-3">
            <Link  to="/home"> <p className="userlink" >Home</p></Link>
            <Link  to="/bookinglist"> <p className="userlink">BookingList</p></Link>
            <Link  to="/review"> <p className="userlink">Review</p></Link>
        </div>
    );
};

export default UserLinks;