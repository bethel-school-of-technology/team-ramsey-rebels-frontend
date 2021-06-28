import React from "react";
import Navigation from "./Nav/Navigation";
import { Container, Row, Col, Image, Carousel, Button } from "react-bootstrap";


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

    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.abcnews.com/images/Business/mustang3-ht-ml-190114_hpEmbed_3x2_992.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to MechanicNow!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>WE work while YOU work so your car is ready to go!</h3>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2019/01/15/65642/2020-Ford-Mustang-Shelby-GT500-revealed-news-(1).jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.cnet.com/a/img/Lq0pr9izf6rW5zlt5BrCQ9Lq40g=/940x0/2019/10/25/9c965540-3447-48a8-b1e4-3a7caf42b58e/2020-ford-mustang-shelby-gt500-08.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    <br />
    <br />
    <Container>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://s.abcnews.com/images/Business/mustang3-ht-ml-190114_hpEmbed_3x2_992.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to MechanicNow!</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Carousel.Caption>
            <h3>WE work while YOU work so your car is ready to go!</h3>
          </Carousel.Caption>
          <img
            className="d-block w-100"
            src="https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/whichcar/2019/01/15/65642/2020-Ford-Mustang-Shelby-GT500-revealed-news-(1).jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src="https://www.cnet.com/a/img/Lq0pr9izf6rW5zlt5BrCQ9Lq40g=/940x0/2019/10/25/9c965540-3447-48a8-b1e4-3a7caf42b58e/2020-ford-mustang-shelby-gt500-08.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
    <br />
    <br />
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
