import React from "react";
import Navigation from "../Nav/Navigation";
import Footer from "../Footer";
import { Button, Card, Container, Image } from "react-bootstrap";
import { ImCheckmark } from "react-icons/im";

function Success() {
  return (
    <div className="success-div">
      <Navigation />
      <br />
      <br />
      <Container style={{ minWidth: "300px", marginTop: "30px" }}>
        <br />
        <Card>
          <br />
          <Card.Header>
            <h2>Success!</h2>
          </Card.Header>
          <Card.Body>
            <h4><ImCheckmark size={42}/></h4>
            <br />
            <h4>
              Your request has been submitted! Our elite mechanics are heading
              your way now.
            </h4>
          </Card.Body>
          <br />
          <Button className="btn btn-success" href="/">
            {" "}
            Return Home{" "}
          </Button>
        </Card>
      </Container>
      <Footer />
    </div>
  );
}

export default Success;
