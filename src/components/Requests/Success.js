import React from "react";
import Navigation from "../Nav/Navigation";
import Footer from "../Footer";
import { Button, Card } from "react-bootstrap";

function Success() {
  return (
    <div className="success-div">
      <Navigation />
      <br />
      <br />
      <Card>
        <h2>Success!</h2>
        <h4>
          Your request has been submitted! Our elite mechanics are heading your
          way now.
        </h4>
        <br />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SwvznR7Y9O5don6my_0JnahAC_6lBKEHYA&usqp=CAU"
          id="check"
          alt="checkmark"
        />
        <br />
        <Button className="btn btn-success" href="/">
          {" "}
          Return Home{" "}
        </Button>
      </Card>
      <Footer />
    </div>
  );
}

export default Success;
