import React from "react";
import Navigation from "./Nav/Navigation";
import { Container, Row, Col, Image, Carousel, Button } from "react-bootstrap";

const Landing = () => (
  <div>
    <Navigation />
    <br />
    <br />
    <div className="carousel-one">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://s.abcnews.com/images/Business/mustang3-ht-ml-190114_hpEmbed_3x2_992.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3><i>Welcome to MechanicNow!</i></h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3><i>WE work while YOU work so your car...</i></h3>
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
            <h3><i>is READY to GO!</i></h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    <br />
    <br />
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
