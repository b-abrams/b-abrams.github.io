import React from "react";
import { Image, Col, Row, Grid, Carousel, CarouselItem } from "react-bootstrap";
import csulb from "../../img/experience/CSULB.png";
import polb from "../../img/experience/POLB.png";
class ExperienceCarousel extends React.Component {
  render() {
    return (
      <Grid id="experience" className="page carousel" fluid>
        <Row id="expHeader">
          <Col xs={12}>
            <h1>EXPERIENCE</h1>
          </Col>
        </Row>

        <Carousel>
          <CarouselItem>
            <Row id="csulbExp">
              <Col xs={12} align="center">
                <Image
                  id="csulb"
                  className="expImg"
                  src={csulb}
                  width="150"
                  height="150"
                  alt="CSULB"
                  responsive
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12} align="center">
                <h3 id="bs">BS: COMPUTER SCIENCE</h3>
                <h3 id="bs">CALIFORNIA STATE UNIVERSITY, LONG BEACH</h3>
                <h4 id="gradDate">EXPECTED GRADUATION: MAY. 2019</h4>
              </Col>
            </Row>

            <Row id="cw" className="coursework">
              <Col xs={12} align="center">
                <h4>RELEVANT COURSEWORK</h4>
              </Col>
            </Row>
            <Row id="cw1" className="coursework">
              <Col xs={12} align="left">
                <li>CECS 277: OBJECT-ORIENTED APPLICATION DEVELOPMENT</li>
              </Col>
            </Row>
            <Row id="cw2" className="coursework">
              <Col xs={12} align="left">
                <li>CECS 282: C++ FOR JAVA PROGRAMMERS</li>
              </Col>
            </Row>
            <Row id="cw3" className="coursework">
              <Col xs={12} align="left">
                <li>CECS 323: DATABASE FUNDAMENTALS</li>
              </Col>
            </Row>
            <Row id="cw4" className="coursework">
              <Col xs={12} align="left">
                <li>CECS 328: DATA STRUCTURES &amp; ALGORITHMS</li>
              </Col>
            </Row>
          </CarouselItem>

          <CarouselItem>
            <Row id="polbExp">
              <Col xs={12} align="center">
                <Image
                  id="polb"
                  src={polb}
                  width="250"
                  height="125"
                  alt="Port of Long Beach"
                  responsive
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                <h3 id="polbJobTitle" align="center">
                  SECURITY DIVISION INTERN - PORT OF LONG BEACH
                </h3>
                <h4 id="workDates">JUN - AUG 2015</h4>
              </Col>
            </Row>

            <Row id="polbExpR1" className="polbExpR">
              <Col xs={12} align="left">
                <li>
                  Collaborated with engineering project managers by attending
                  business meetings and conferences to develop new and efficient
                  methods for protecting sensitive port information and property
                </li>
              </Col>
            </Row>

            <Row id="polbExpR2" className="polbExpR">
              <Col xs={12} align="left">
                <li>
                  Met with reps from Matson and US Customs and Border Protection
                  to discuss implementation of new procedures to offload and
                  screen shipping containers to increase efficiency and safety
                  in port operations
                </li>
              </Col>
            </Row>
          </CarouselItem>
        </Carousel>
      </Grid>
    );
  }
}

export default ExperienceCarousel;
