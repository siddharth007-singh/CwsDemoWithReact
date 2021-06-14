import React from "react";
import {Nav,NavDropdown, Form, FormControl ,Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import { BsArrowRightShort } from 'react-icons/bs';


function Navbars(){
    return(
        <React.Fragment>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">CWS Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Development <BsArrowRightShort/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Bussiness <BsArrowRightShort/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Account <BsArrowRightShort/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Web Designing <BsArrowRightShort/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Game designing <BsArrowRightShort/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Markting <BsArrowRightShort/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Life Style <BsArrowRightShort/></NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Markting <BsArrowRightShort/></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search for anything" className="mr-sm-2"  style={{width:"280%"}}/>
                    </Form>
                    <Nav.Link href="#link"><GiShoppingCart style={{fontSize:"30px"}}/></Nav.Link>
                    <Link to="/login" style={{padding:"5px 30px"}}>Login</Link>
                    <Link to="/register" variant="outline-primary ml-2" style={{padding:"5px 30px"}}>Singup</Link>
                </Navbar.Collapse>
                </Navbar>
        </React.Fragment>
    );
}

export default Navbars;