import React, { useState } from 'react';
import { useEffect } from 'react';
import UserComment from '../UserComment/UserComment'

const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://serene-cliffs-67475.herokuapp.com/db/comments')
            .then(res => res.json())
            .then(data => setComments(data))
    },[])

    return (
        <section id='reviews' className="mb-5">
            <h1 className="text-center my-3" style={{ color: '#d61e68' }}>Reviews</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 w-100 pl-3 mb-4">
                {
                    comments.map(cmt => <UserComment comment={cmt} key={cmt._id}></UserComment>)
                }
            </div>
        </section>
    );
};

export default Comments;