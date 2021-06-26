import React from 'react';

const UserComment = ({comment}) => {
    return (
        <div className="col mt-md-3 mt-sm-2 mt-xs-2">
        <div className="card border-danger">
            <div className="card-body">
                <h5 className="card-title">{comment.name}</h5>
                <p className="card-text"><small>email: {comment.email}</small></p>
                <p className="card-text">{comment.comment}</p>
            </div>
        </div>
    </div>
    );
};

export default UserComment;
