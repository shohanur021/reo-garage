import React, { useState } from 'react';
import '../../../App.css'
import AdminLinks from '../../shared/AdminLinks/AdminLinks';
import { Form, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import './AddService.css'

const AddService = () => {
    const [service, setService] = useState();

    const handleChange = (e) => {
        if (e.target.value) {
            const newService = { ...service }
            newService[e.target.name] = e.target.value;
            setService(newService)
        }
    }

    const handleImageUpload = (e) => {
        const imageData = new FormData();
        imageData.set('key', '8fc82789f3058f462aa1affcc352466d');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',imageData)
        .then(function (response) {
            const newService = { ...service }
            newService[e.target.name] = response.data.data.display_url;
            setService(newService)
        })
        .catch(function (error) {
            alert(error)
        })
    }

    const submitAddService = (e) => {
        e.preventDefault();

        if(Object.keys(service).length === 4) {
            console.log(service)
            fetch('https://serene-cliffs-67475.herokuapp.com/db/addService', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert("Service successfully added");
                        e.target.reset();
                    }
                })
                .catch(error => {
                    alert(error)
                })
        }
        else{
            alert("fill up correctly or wait a munite before submit")

        } 
    }

    return (
        <div className="row w-100">
            <div className="col-md-2 links-container">
                <AdminLinks></AdminLinks>
            </div>
            <div className="col-md-9">
                <h2>Add New Service :</h2>
                <Form className="serviceformStyle" onSubmit={submitAddService}>
                    <Form.Row>
                        <Col className="mx-2 mt-3 mx-lg-4" >
                            <Form.Control name="serviceName" placeholder="service name" required onBlur={handleChange} />
                        </Col>
                        <Col className="mx-2 mt-3 mx-lg-4">
                            <Form.Control name="cost" type="number" placeholder="cost" required min="1" onBlur={handleChange} />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col className="mx-2 mt-3 mx-lg-4">
                            <Form.Control className='service_details' name='details' as="textarea" placeholder="details*" onBlur={handleChange} required />
                        </Col>
                        <Col className="mx-2 mt-3 mx-lg-4 d-flex align-items-center">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Input name="picture" onChange={handleImageUpload} required />
                            </Form.File>
                        </Col>
                    </Form.Row>
                    <div className="d-flex justify-content-center">
                        <Button className="my-4 " type="submit">Submit form</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddService;