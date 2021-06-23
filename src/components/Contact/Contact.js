import React from 'react';
import Navigation from '../Nav/Navigation';
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <div>
            <Navigation />
            <br />
            <h2 id="nav">Contact Us</h2>  
            <br />
            <br />
            <p>Rain, snow or shine, we'll be sure that your car is fine.</p>   
            <p>Please send all complaints to Ben Cunningham: 615.645.6015</p>
            <p>Hours of operation: Tuesdays 9-10 am</p>
        </div>
    )
}

export default Contact

