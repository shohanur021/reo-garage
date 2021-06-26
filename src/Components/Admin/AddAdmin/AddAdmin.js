import React, { useState } from 'react';
import AdminLinks from '../../shared/AdminLinks/AdminLinks';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';

const AddAdmin = () => {
    const [adminEmail, setAdminEmail] = useState({});

    const handleEmailChange = (e) => {
        const newAdmin = {
            admin : e.target.value
        }
        setAdminEmail(newAdmin)
    }

    const handleAdminAddition = (e) => {
        e.preventDefault();

        if(adminEmail){
            fetch('https://serene-cliffs-67475.herokuapp.com/db/addAdminMember', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(adminEmail)
            })
                .then(res => res.json())
                .then(result => {
                    if (result) {
                        alert("New admin successfully added");
                        e.target.reset();
                    }
                })
        }
    }

    return (
        <div className="row w-100">
            <div className="col-md-2 links-container">
                <AdminLinks></AdminLinks>
            </div>
            <div className="col-md-9">
                <h2 className="mt-3 ml-2">Add a new admin:</h2>

                <Form onSubmit={handleAdminAddition} className="mx-3 my-4">
                    <InputGroup>
                        <FormControl type="text" required pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder="Enter the email" onBlur={handleEmailChange} />
                        <InputGroup.Append>
                            <Button variant="outline-secondary" type="submit">Update</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
            </div>
        </div>
    );
};

export default AddAdmin;