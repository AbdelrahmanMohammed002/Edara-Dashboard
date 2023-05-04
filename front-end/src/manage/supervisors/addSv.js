import { AdminHeader } from "../../pages/shared/header/admiHeader";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { getAuthUser } from "../../helper/Storage";
import axios from "axios";
import React, { useRef, useState } from "react";

import'../../css/register.css'


export const AddSuberv = () => {
  
  const auth = getAuthUser();
  const [user, setUser] = useState({
    email: "",
    password: "",
    phone: "",
    status: "",
    type: "",
    err: [],
    loading: false,
    success: null,
  });

  const createUser = (e)=>{
    e.preventDefault();
    setUser({ ...user, loading: true });

    

    axios
    .post("http://localhost:5000/auth/register",{
      email:user.email,
      password:user.password,
      phone:user.phone,
      status:user.status,
      type:user.type
    },{
      headers:{
        token: auth
      }
    }).then((resp)=>{
      setUser({
        email: "",
    password: "",
    phone: "",
    status: "",
    type: "",
    err: "",
    loading: false,
    success: "User Created successfully",
      })
    }).catch((err)=>{
      setUser({
        
    loading: false,
    success:null,
    err: err.response.data.errors,
  })
    })
  }

  return (
    <><AdminHeader/>
    <div className='register'>
      <br></br>
    <div className='register1'>
      

    <div className="login-container w-75 ">
      <h1>Add New User Form</h1>

      <>
      {user.err && Array.isArray(user.err) && user.err.map((error, index) => (
              <Alert key={index} variant='danger' className='p-2'>
                {error.msg}
              </Alert>
            ))}

            {user.success && (
              <Alert variant="success" className="p-2">
                {user.success}
              </Alert>
            )}
      </>
      <Form  onSubmit={createUser}>
        <Form.Group className="mb-3">
          <Form.Control
            value={user.email}
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            type="password"
            required
            placeholder="password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Control
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}

            type="phone"
            required
            placeholder="phone"
          />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
            value={user.status}
            onChange={(e) => setUser({ ...user, status: e.target.value })}

            type="text"
            required
            placeholder="status"
          />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Control
            value={user.type}
            onChange={(e) => setUser({ ...user, type: e.target.value })}

            type="text"
            placeholder="type"
          />
        </Form.Group>

        <Button className="btn btn-dark w-100" variant="primary" type="submit">
          Add New User
        </Button>
      </Form>
    </div>

    {/* <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Label>Add Subervisor</Form.Label>
  
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Col>
            <Form.Control
              type="text"
              
              placeholder="Email"
              style={{width:'  15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            />
          </Col>
            
            <Form.Control.Feedback type="invalid">
              Invalid Email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
          <Col>
            <Form.Control
              type="password"
              placeholder="Password"
              style={{width:' 15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Form.Control.Feedback type="invalid">
              Please choose a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Phone</Form.Label>
          <InputGroup hasValidation>
          <Col>
            <Form.Control
              type="number"
              style={{width:'      15cm'}}
              placeholder="Phone"
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Form.Control.Feedback type="invalid">
              Please enter your phone.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Type</Form.Label>
          <InputGroup hasValidation>
          <Col>
            <Form.Control
              type="text"
              placeholder="Phone"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            />
            </Col>
            <Form.Control.Feedback type="invalid">
              Please enter Type.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
        <Form.Group   md="4" controlId="validationCustomUsername">
          <Form.Label>Status</Form.Label>
          <InputGroup hasValidation>
          <Col><Form.Control
              type="Text"
              placeholder="Status"
              style={{width:'      15cm'}}
              aria-describedby="inputGroupPrepend"
              required
            /></Col>
            <Form.Control.Feedback type="invalid">
              Please enter your ID.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button variant="dark" type="submit">Add</Button>
      </Form>*/}
    </div></div> 
    </>
  );
}
