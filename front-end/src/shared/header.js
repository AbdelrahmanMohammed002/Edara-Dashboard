import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

const header = () => {

    const Logout =()=>{
        
    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Edara</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to={"/"}>Home</Link>  
                        <Link className="nav-link" to={"/"}>Warehouses</Link>    
                        <Link className="nav-link" to={"/"}>Stock Requests</Link> 
                    </Nav>

                    <Nav className="ms-auto">
                        <Link className="nav-link" onClick={Logout} >Log out</Link> 
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default header;