import React from 'react';

const SingleBookList = (props) => {
    const book = props.booklist;

    return (
    <div className="card shadow border">
        <div className="card-body">
            <h6 className="card-title">Servive : {book.orderService.serviceName}</h6>
            <p className="card-text m-0">Cost : {book.orderService.cost} $</p>
            <div className="d-flex  justify-content-between">
                <p className="card-text m-0"><small className="text-muted">date : {book.orderTime.split('T')[0]}</small></p>
                <p className="card-text m-0" style={{color: (book.orderStatus === "processing") ? "green" : "red"}}><small>{book.orderStatus}</small></p>
            </div>
        </div>
    </div>
    );
};

export default SingleBookList;