import React, { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import FormContainer from "../components/FormContainer";
import Loader from '../components/Loader'
import Message from '../components/Message'
import {login} from '../actions/userActions'

function LoginScreen(match, location) {
    const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  

  const redirect = location.search ? location.search.split("=")[1] : "/";
  console.log(redirect)
  const submitHandler = (e) => {
    console.log("Submitted");
    e.preventDefault();
    dispatch(login(email,password))
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [ navigate,userInfo, redirect]);
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New Customer ?
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginScreen;
