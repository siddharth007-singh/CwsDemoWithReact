import React, { useState } from "react";
import {} from 'react-bootstrap';
import {Link,useParams} from 'react-router-dom';
import img from "../asset/pro1.jpg";
import Lists from "../list";

function Category(props){
    const [li,setli] = useState(Lists);
    let{id} = useParams();
    const pro = Lists.find(com => com.id == id);
    return(
        <React.Fragment>
                <div className="box text-white rounded-0" style={{backgroundColor:"black", padding:"15px 80px"}}>
                    <div className="conatiner mt-5">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2 className="font-weight-bold" style={{fontSize:"45px"}}>{pro.title}</h2>
                                <p className="card-text">How to create recommendation systems with deep learning, collaborative filtering, and machine learning.</p>
                                <h6>{pro.cource_by}</h6>
                                <h3>Rs. {pro.price}</h3>
                            </div>
                            <div className="col-lg-4">
                                <div className="card border-0 mt-2">
                                    <img src={pro.image} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <button className="btn btn-info btn-block btn-lg">Add To Cart</button>
                                            </div>
                                            <div className="col-lg-6">
                                                <Link to="VideoStream" className="btn btn-outline-info btn-block btn-lg">Buy Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default Category;