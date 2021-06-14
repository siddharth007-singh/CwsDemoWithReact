import React,{useState} from "react";
import {} from 'react-bootstrap';
import Cards from './Cource';
import Lists from "../list";



function CourceLayout(){
    const [cd, cardset] = useState(Lists);
    return(
        <React.Fragment>
            <h3 className="font-weight-bold mt-5">The world's largest selection of courses</h3>
            <p className="card-text text-muted">Choose from 155,000 online video courses with new additions published every month</p>
            <div className="container">
                <div className="row">
                    {cd.map((value,key)=>(
                        <div className="col-lg-3">
                            <Cards
                                id = {value.id}
                                image = {value.image}
                                title = {value.title}
                                cource_by = {value.cource_by}
                                price = {value.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    );
}

export default CourceLayout;
