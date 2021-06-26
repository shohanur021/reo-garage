import React from 'react';
import UserLinks from '../../shared/UserLinks/UserLinks';
import '../../../App.css';
import './Review.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import { useContext } from 'react';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const reviewSubmit = (data) => {
        const userComment = {
            ...data,
            commentTime: new Date()
        }

        if (userComment) {
            fetch('https://serene-cliffs-67475.herokuapp.com/db/addComments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userComment)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert("Review successfully added");
                    }
                })
        }
    }

    return (
        <div className="row w-100">
            <div className="col-md-2 links-container">
                <UserLinks></UserLinks>
            </div>
            <div className="col-md-9">
                <h2>This is Reviews</h2>
                <form className="shipping-form ml-2 mt-2" onSubmit={handleSubmit(reviewSubmit)}>
                    <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="name" />
                    {errors.name && <span className="error"><small>Enter your name</small></span>}
                    <input defaultValue={loggedInUser.email} {...register("email", { required: true, pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })} placeholder="email" />
                    {errors.email && <span className="error"><small>enter your email correctly</small></span>}
                    <textarea {...register("comment", { required: true })} placeholder="opinion*" rows="10" cols="40" />
                    {errors.comment && <span className="error"><small>give your opinion</small></span>}
                    <input type="submit" className="submitStyle mb-2 mt-4 " />
                </form>
            </div>
        </div>
    );
};

export default Review;