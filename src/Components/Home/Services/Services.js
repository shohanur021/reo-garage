import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails'

const Services = () => {
    const  [services,setservices] = useState([]);

    useEffect(() => {
        fetch('https://serene-cliffs-67475.herokuapp.com/db/services')
        .then(res => res.json())
        .then(data => setservices(data))
    },[])
   
    return (
        <section id="services" >
           <h2 className='text-center pt-md-5 pb-md-4'>Our Awasome <span style={{color:'#3F78EA'}}>Services</span></h2>
           <div className="d-flex justify-content-around">
            <div className="w-75 row my-sm-3 mb-md-5">
                {
                    services.map( service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;