import React, { Component } from "react";
import RequestDataService from "../../services/request.service";
import Navigation from "../Nav/Navigation";
import { Container, Col, Row, Button } from "react-bootstrap";

export default class NewRequest extends Component {
  
  render() {
    return (
      <div className="submit-form">
        <Navigation />
        <div className="request">
          <h2>Hello, Admin</h2>
        </div>
        <Container>
          <div className="form-group">
            <Row>
              <Col></Col>
              <Col md={6}>
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"                  
                />
              </Col>
              <Col></Col>
            </Row>
          </div>

          <div className="form-group">
            <Row>
              <Col></Col>
              <Col md={6}>
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  id="email"
                />
              </Col>
              <Col></Col>
            </Row>
          </div>
          
        </Container>
        <div id="submit">
        <Button href="/admin" className="btn btn-secondary">
            Log In
        </Button> <br/> <br/>
        <Button href="/adminsignup" className="btn btn-secondary">
            Sign Up
        </Button>
        </div>
      </div>
    );
  }
}

