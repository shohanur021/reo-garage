import React, { useEffect, useState } from 'react';
import AdminLinks from '../../shared/AdminLinks/AdminLinks';

const AdminsEmail = () => {
    const [admins,setAdmins] = useState([])

    useEffect(() => {
        fetch('https://serene-cliffs-67475.herokuapp.com/db/adminsEmail')
            .then(res => res.json())
            .then(data => setAdmins(data))
    },[])

    return (
        <div className="row w-100">
        <div className="col-md-2 links-container">
            <AdminLinks></AdminLinks>
        </div>
        <div className="col-md-9">
            <h2>Who's are Admin:</h2>
            <ul style={{listStyleImage:"linear-gradient(to left bottom, red, blue)"}}>
            {
                admins.map(admin => <li key={admin._id}>{admin.admin}</li>)
            }
            </ul>
        </div>
    </div>
    );
};

export default AdminsEmail;