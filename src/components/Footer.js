import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";


const Footer = () => (
  <div className="footer">
    <Container>
      <Row>
        <Col>
          <p>Copyright © 2021 Bethel Boys, Inc. All rights witheld</p>
        </Col>
        <Col>
          <h3>
              <SiFacebook /> 
              <SiInstagram /> 
              <SiTwitter />
          </h3>
        </Col>
        <Col>
          <p>Hours: Monday - Friday: 8am to 6pm</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
