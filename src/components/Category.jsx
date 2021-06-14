import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Category(props){
    return(
        <React.Fragment>
            <div className="mt-4">
                <Link to={{pathname: `/${props.Cat}`}} style={{color:"black", textDecoration: "none" }}>
                    <Card className="border-0 shadow-sm" style={{TextDecoration:"none", width:"260px", height:"200px"}}>
                        <Card.Img variant="top" src={props.img} />
                        <Card.Body>
                            <h6 className="card-text font-weight-bold">{props.Cat}</h6>
                        </Card.Body>
                    </Card>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Category;