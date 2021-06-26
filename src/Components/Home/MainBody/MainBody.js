import React from 'react';
import car_1 from '../../images/coverPic1.png';

const MainBody = () => {
    return (
        <main style={{ height: '100%', width: '101.1%',backgroundColor: '#D5F5E3'}} className="row d-flex justify-content-around align-items-center py-md-5 py-sm-2">
            <div className="col-md-4 col-sm-6 col-12 offset-md-1">
                <h1 style={{ color: '#C00C40 ' }}>Repair your car by an easiest way</h1>
                <p className="text-secondary">exclusive car accessories from multi brands are always available for you</p>
                <a href="https://www.loyalparts.com/" target="_blank" rel="noopener noreferrer"><button className="btn btn-brand font-weight-bold ml-2 mt-1" style={{ color: '#1E1F1F', backgroundColor: '#E6962A'}}>Buy Now</button></a>
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <img src={car_1} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default MainBody;

