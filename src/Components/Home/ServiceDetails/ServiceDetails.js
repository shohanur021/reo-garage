import React from 'react';
import '../ServiceDetails/ServiceDetails.css'
import { Link } from "react-router-dom";

const ServiceDetails = (props) => {
    const { _id,serviceName, cost, details, picture } = props.service;

    return (
        <article className="col-md-4 col-sm-6 text-center">
            <div className="m-2 service-container">
                <img style={{ height: '50px', marginTop: '7px' }} src={picture} alt="" />
                <h5 className="mt-3 mb-3 text-success">{serviceName}</h5>
                <h6>Price : <span className="mt-3 mb-3 text-info">{cost}</span> $</h6>
                <p className="text-secondary">{details}</p>
                <Link to={"/service/"+_id}><button className="btn btn-primary mb-2">Order Now</button></Link>
            </div>
        </article>
    );
};

export default ServiceDetails;