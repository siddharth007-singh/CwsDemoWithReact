import React from "react";
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Cource(props){
    return(
        <React.Fragment>
            <Link to={{pathname: `/product/${props.id}`}} style={{color:"black", textDecoration: "none" }}>
                <Card className="border-0 shadow-sm" style={{TextDecoration:"none", width:"260px"}}>
                    <Card.Img variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title className="card-text font-weight-bold">{props.title}</Card.Title>
                        <Card.Text className="small text-muted font-weight-bold">{props.cource_by}</Card.Text>
                        <h6 className="card-text font-weight-bold">{props.price}</h6>
                    </Card.Body>
                </Card>
            </Link>
        </React.Fragment>
    );
}

export default Cource;