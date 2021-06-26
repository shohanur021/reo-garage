import React from 'react';
import UserLinks from '../../shared/UserLinks/UserLinks';
import { useForm } from "react-hook-form";
import '../../../App.css'
import './Book.css'
import Payment from '../../ProcessPayment/Payment'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useParams } from 'react-router';
import { useEffect } from 'react';

const Book = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orderService,setOrderService] = useState({});
    const { register, handleSubmit, formState: { errors }, reset } = useForm({defaultValues:orderService});
    const [shippingData, setShippingData] = useState(null);
    const { id } = useParams();
    
    useEffect(() => {
        fetch(`https://serene-cliffs-67475.herokuapp.com/db/service/${id}`)
        .then(res => res.json())
        .then(data => {
            setOrderService(data[0])
            reset(data[0])
        })
    },[id,reset])

    const onSubmit = (data) => { 
        if(data.selectedService === orderService.serviceName){
            setShippingData(data)
        }
        else{
            alert("Enter service name correctly") 
        }
        
    }

    const handlePaymentSuccess = (paymentId) => {
        const orderDetails = {
            orderService,
            name:loggedInUser.name,
            email:loggedInUser.email,
            shipment: shippingData,
            paymentId,
            orderStatus:"pending",
            orderTime: new Date()
        }

        fetch('https://serene-cliffs-67475.herokuapp.com/db/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Your order successfully registered")
                }
            })
    }


    return (
        <div className="row w-100">
            <div className="col-md-2 links-container">
                <UserLinks></UserLinks>
            </div>
            <div className="col-md-9">
                <h2>Book</h2>
                <form style={{ display: shippingData ? 'none' : 'block' }} className="shipping-form ml-2 mt-2" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="name" /> {errors.name && <span className="error"><small>Enter your name</small></span>}

                    <input defaultValue={orderService.serviceName} {...register("selectedService",{ required: true})} />
                    {errors.selectedService && <span className="error"><small>Enter your service name</small></span>}
                    
                    <input {...register("address", { required: true })} placeholder="address" />
                    {errors.address && <span className="error"><small>give your address</small></span>}
                   
                    <input {...register("mobileNo", { required: true, pattern: /^(?:\+?88)?01[13-9]\d{8}$/ })} placeholder="mobile number" />
                    {errors.mobileNo && <span className="error"><small>give valid mobile number</small></span>}
                    
                    <input type="submit" className="submitStyle mb-2 mt-4 " />
                </form>
                <div style={{ display: shippingData ? 'block' : 'none' }} className="Payment-container ml-3 mt-3 p-2">
                    <h3 className="mb-3">You have to pay {25}$</h3>
                    <Payment handlePayment={handlePaymentSuccess}></Payment>
                </div>
            </div>
        </div>
    );
};

export default Book;