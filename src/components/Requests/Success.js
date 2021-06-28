import React from "react";
import Navigation from "../Nav/Navigation";
import { Container, Button ,Card } from "react-bootstrap";


function Success() {
  return (
    <div>
      <Navigation />
      <br/>
      <br/>
      <Container >
        <Card>
        <h2>Success!</h2>
        <h3>
          Your request has been submitted! Our elite mechanics are heading your
          way now.
        </h3>
        <div>
                <img src="https://user-images.githubusercontent.com/11351528/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png" id="check" alt="checkmark"/>
        </div>
        <Button className="btn btn-success" href="/landing"> Return Home </Button>
        </Card>
      </Container>
      
    </div>
    
  );
}

export default Success;
