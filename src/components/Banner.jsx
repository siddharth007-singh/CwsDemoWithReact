import React from "react";
import {Form} from 'react-bootstrap';
import Background from '../asset/pro1.jpg';


function Banner(){
    return(
        <React.Fragment>
            <div className="" style={{backgroundImage: "url(" + { Background } + ")"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="card border-0 shadow-lg mt-5">
                            <div className="card-body" style={{ padding:"20px 20px"}}>
                                <h1 className="font-weight-bold">Dream up</h1>
                                <p className="card-text text-muted" style={{fontSize:"20px"}}>Ambition accepted. Learn the latest skills to <br /> reach your professional goals.</p>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="What do you want to learn ?" style={{borderColor:"black", padding:"25px 10px"}} />
                                    </Form.Group>
                                </Form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </React.Fragment>
    );
}

export default Banner;