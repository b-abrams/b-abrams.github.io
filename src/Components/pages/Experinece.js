import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import csulb from "../../img/experience/CSULB.png";
import polb from "../../img/experience/POLB.png";
class Experience extends React.Component {
  render() {
    return (
      <Grid id="experienceF" className="page full" fluid>
        <Row id="expHeader">
          <Col sm={2} md={2}>
            <h1>EXPERIENCE</h1>
          </Col>
        </Row>
        <Row id="csulbExp">
          <Col md={1} mdOffset={1}>
            <Image
              id="csulb"
              src={csulb}
              width="150"
              height="150"
              alt="CSULB"
              responsive
            />
          </Col>
          <Col md={9} mdOffset={1}>
            <h3 id="bs">BS: COMPUTER SCIENCE</h3>
            <h3 id="bs">CALIFORNIA STATE UNIVERSITY, LONG BEACH</h3>
            <h4 id="gradDate">EXPECTED GRADUATION: MAY. 2019</h4>
          </Col>
        </Row>

        <Row id="cw" className="coursework">
          <Col md={3} mdOffset={2}>
            <h4>RELEVANT COURSEWORK</h4>
          </Col>
        </Row>
        <Row id="cw1" className="coursework">
          <Col md={5} mdOffset={3}>
            <li>CECS 277: OBJECT-ORIENTED APPLICATION DEVELOPMENT</li>
          </Col>
        </Row>
        <Row id="cw2" className="coursework">
          <Col md={5} mdOffset={3}>
            <li>CECS 282: C++ FOR JAVA PROGRAMMERS</li>
          </Col>
        </Row>
        <Row id="cw3" className="coursework">
          <Col md={5} mdOffset={3}>
            <li>CECS 323: DATABASE FUNDAMENTALS</li>
          </Col>
        </Row>
        <Row id="cw4" className="coursework">
          <Col md={5} mdOffset={3}>
            <li>CECS 328: DATA STRUCTURES &amp; ALGORITHMS</li>
          </Col>
        </Row>

        <Row id="polbExp">
          <Col md={1} mdOffset={1}>
            <Image
              id="polb"
              src={polb}
              width="250"
              height="125"
              alt="Port of Long Beach"
              responsive
            />
          </Col>
          <Col md={9} mdOffset={1}>
            <h3 id="polbJobTitle">
              SECURITY DIVISION INTERN - PORT OF LONG BEACH
            </h3>
            <h4 id="workDates">JUN - AUG 2015</h4>
          </Col>
        </Row>

        <Row id="polbExpR1" className="polbExpR">
          <Col md={8} mdOffset={3}>
            <li>
              Collaborated with engineering project managers by attending
              business meetings and conferences to develop new and efficient
              methods for protecting sensitive port information and property
            </li>
          </Col>
        </Row>

        <Row id="polbExpR2" className="polbExpR">
          <Col md={8} mdOffset={3}>
            <li>
              Met with representatives from Matson and US Customs and Border
              Protection to discuss the implementation of new procedures to
              offload and screen shipping containers with the goal of increasing
              efficiency and safety in port operations
            </li>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Experience;
