import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../../css/login.css"
import Alert from 'react-bootstrap/Alert';


const Login = () => {
    return (
        <div className="login-container">
            <h1>Login Form</h1>

            {['danger',].map((variant) => (
                    <Alert  variant={variant}>
                        This is a {variant} alert—check it out!
                    </Alert>
                ))}
            <Form>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    login
                </Button>
            </Form>
        </div>
    )
}

export default Login;