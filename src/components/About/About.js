import React from "react";
import Navigation from "../Nav/Navigation";
import {
  Carousel,
  Container,
  Card,
  CardGroup,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import { FaOilCan, FaGasPump } from "react-icons/fa";
import { GiCarWheel, GiFlatTire, GiGears } from "react-icons/gi";

const About = () => (
  <div>
    <Navigation />
    <br />
    <br />
    <Container>
    <CardGroup>
  <Card>
    <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/693872833559048192/h0VTAaua_400x400.jpg" />
    <Card.Body>
      <Card.Title>Why MechanicNow?</Card.Title>
      <Card.Text>
      <GiCarWheel /><br />You've never seen a more passionate group of mechanics. Most mechanics walk around a sweaty shop, covered in grease. 100% of our mechanics are former supermodels who love driving, so we let them drive around town all day, looking for people who need service.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Photo: Ford Mustang</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://res.cloudinary.com/roadstrapp/image/upload/$wpsize_!thegem-post-thumb!,w_256,h_256,c_fill,g_auto/v1587526990/MG_4949.jpg" />
    <Card.Body>
      <Card.Title>Services Provided</Card.Title>
      <Card.Text>
      <FaOilCan /><br />We are an unlimited, full service mobile mechanic shop, as long as you only need an oil change, tire rotation, or refueling. That is all that we do, so please do not call and ask for anything else. But we do them really, really well.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Photo: Chevrolet Corvette</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://en.nalinke.com/uploads/5ed0cf8f8b373741e98cf2d7_256x256.png" />
    <Card.Body>
      <Card.Title>Secret Ingredient</Card.Title>
      <Card.Text>
        <FaGasPump /><br />
        We're passionate about people, and not just car people, but all people. That's our secret ingredient. It's an experience you'll never forget when MechanicNow comes to your workplace and finishes a job before you even know it happened.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Photo: Toyota Camry</small>
    </Card.Footer>
  </Card>
</CardGroup>
    </Container>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
