import React,{useState} from "react";
import {Form, Button} from 'react-bootstrap';


function BannerForm(){
    return(
        <React.Fragment>
            <div className="card border-0 shadow-lg">
                <div className="card-body">
                    <h1 className="font-weight-bold">Dream up</h1>
                    <p>Ambition accepted. Learn the latest skills to <br /> reach your professional goals.</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BannerForm;
