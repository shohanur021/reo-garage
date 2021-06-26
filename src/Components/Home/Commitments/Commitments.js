import React from 'react';
import carPic from '../../images/car-2.jpg'

const Commitments = () => {
    return (
        <section className="p-3 mt-4" style={{backgroundColor:'#D6EAF8',marginBottom:'45px'}}>
            <div className="row w-100">
                <div className="col-sm-5  col-md-6 d-flex align-items-center">
                    <img className="img-fluid" src={carPic} alt="" />
                </div>
                <div className="col-sm-7 col-md-6">
                    <h1 style={{color:'#17202A'}}>Let us handle your cars professionally</h1>
                    <p className="text-secondary">
                        We will provide you better services. We have a big place for our workshop. Our all products or accessorise are orginal and well condition.Our machanics are well trained and highly experienced. Our home service will recently add in the services.
                    </p>
                    <div className="row mt-md-5">
                        <div className="col-6">
                            <h2 style={{color:'#009900'}}>5000+</h2>
                            <p>Happy customers</p>
                        </div>
                        <div className="col-6">
                        <h2 style={{color:'#009900'}}>1250+</h2>
                        <p>total services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Commitments;