import React from "react";
import Navigation from "./Nav/Navigation";
import { Button } from "react-bootstrap";

const Landing = () => (
  <div className="landing-bg w-100 text-center mt-3">
    <Navigation />
    <br />
    <br />
    <h1>Welcome to MechanicNow!</h1> 
    <br /> 
    <style type="text/css">
    {`
    .btn-flat {
      background-color: #6918b4;
      color: white;
    }
    `}
  </style>
        <Button variant="flat" href="/newrequest">
        New Service Request!
        </Button>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
