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
          <h2>Admin Sign Up</h2>
        </div>
        <Container>
          <div className="form-group">
            <Row>
              <Col></Col>
              <Col md={6}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="First and Last Name"
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="example@example.com"
                  className="form-control"
                  id="email"
                />
              </Col>
              <Col></Col>
            </Row>
          </div>
          <div className="form-group">
            <Row>
              <Col></Col>
              <Col md={6}>
                <label htmlFor="phone">Password</label>
                <input
                  type="password"
                  placeholder="Password1!"
                  className="form-control"
                  id="password"
                />
              </Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
        <div id="submit">
        <Button href="/adminlogin" className="btn btn-secondary">
            Submit
        </Button>
        </div>
      </div>
    );
  }
}
