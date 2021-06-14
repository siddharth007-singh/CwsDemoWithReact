import React from "react";


function Register(){
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-3 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="mb-3">
                                    <label>Username</label>
                                    <input type="text" className="form-control" placeholder="Enter your Username"/>
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="text" className="form-control" placeholder="Enter your Password" />
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                    <input type="text" className="form-control" placeholder="Enter your Password" />
                                </div>
                                <div className="mb-3">
                                    <input type="submit" className="btn btn-primary" name="submit"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Register;