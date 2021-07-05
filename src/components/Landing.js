import React from "react";
import Navigation from "./Nav/Navigation";
import Footer from "./Footer";
import {
  Container,
  Card,
  CardDeck,
  Carousel,
  Jumbotron,
} from "react-bootstrap";
import { IoSnowSharp, IoShieldCheckmark, IoBulbSharp } from "react-icons/io5";
import { FaOilCan, FaGasPump } from "react-icons/fa";
import { GiCarWheel, GiFlatTire, GiGears } from "react-icons/gi";
import {
  SiFord,
  SiHonda,
  SiJeep,
  SiNissan,
  SiToyota,
} from "react-icons/si";


const Landing = () => (
  <div className="landing-div">
    <Navigation />
    <Container>
      <Carousel fade>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://s.abcnews.com/images/Business/mustang3-ht-ml-190114_hpEmbed_3x2_992.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              <i>
                <b>Welcome to MechanicNow!</b>
              </i>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Carousel.Caption>
            <h3>
              <i>
                <b>WE work while YOU work so your car...</b>
              </i>
            </h3>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://media.istockphoto.com/photos/auto-mechanic-service-and-repair-picture-id652660336?k=6&m=652660336&s=612x612&w=0&h=VNSrekFECjVczRqjcwTonFvl3CSLuy5U_3A2YORl1no="
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="https://www.cnet.com/a/img/Lq0pr9izf6rW5zlt5BrCQ9Lq40g=/940x0/2019/10/25/9c965540-3447-48a8-b1e4-3a7caf42b58e/2020-ford-mustang-shelby-gt500-08.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>
              <i>
                <b>is READY to GO!</b>
              </i>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    <br />
    <br />
    <Container>
      <CardDeck>
        <Card className="service-card" style={{ maxHeight: "400px" }}>
          <Card.Body>
            <Card.Title>
              <h4>
                <b>List of Services</b>
              </h4>
            </Card.Title>
            <Card.Text>
              <p>
                Flat Tire <GiFlatTire />
              </p>

              <p>
                Oil Change <FaOilCan />
              </p>

              <p>
                Gas Fill Up <FaGasPump />
              </p>

              <p>
                Tire Rotation <GiCarWheel />
              </p>
              <p>
                AC Charge <IoSnowSharp />
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              *Please Select Service from this List
            </small>
          </Card.Footer>
        </Card>
        <Card className="vehicle-card" style={{ maxHeight: "400px" }}>
          <Card.Img />
          <Card.Body>
            <Card.Title>
              <h4>
                <b>Vehicle Makes</b>
              </h4>
            </Card.Title>
            <Card.Text>
              <p>
                Ford <SiFord />
              </p>
              <p>
                Honda <SiHonda />
              </p>
              <p>
                Jeep <SiJeep />
              </p>
              <p>
                Nissan <SiNissan />
              </p>
              <p>
                Toyota <SiToyota />
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">*We Service ALL Vehicle Makes</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
    <br />
    <br />
    <Jumbotron></Jumbotron>
    <Footer />
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
