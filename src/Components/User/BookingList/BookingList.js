import React, { useContext, useEffect, useState } from 'react';
import UserLinks from '../../shared/UserLinks/UserLinks';
import '../../../App.css'
import { UserContext } from '../../../App';
import './Bookinglist.css'
import SingleBookList from '../SingleBookList/SingleBookList';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookingList, setBookingList] = useState([]);

    useEffect(() => {
        fetch('https://serene-cliffs-67475.herokuapp.com/db/order?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookingList(data))
    }, [loggedInUser.email])


    return (
        <div className="row w-100">
            <div className="col-md-2 links-container">
                <UserLinks></UserLinks>
            </div>
            <div className="col-md-10">
                <h2>This is booking list:</h2>
                <div className="card-columns p-3">
                    {
                        bookingList.map(book => <SingleBookList booklist={book} key={book._id}></SingleBookList>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BookingList;