import React from "react";
import { Image, Grid, Row, Col } from "react-bootstrap";
import headshot from "../../img/home/headshot.jpg";
import email from "../../img/home/email.png";
class Home extends React.Component {
  render() {
    return (
      <Grid id="home" className="page" fluid>
        <Row id="headshotRow">
          <Col md={5} mdOffset={3}>
            <Image
              src={headshot}
              width="400"
              height="400"
              alt="Breeland Abrams"
              circle
              responsive
            />
          </Col>
        </Row>

        <Row id="nameRow">
          <Col md={7} mdOffset={2}>
            <h1 id="name">BREELAND ABRAMS</h1>
          </Col>
        </Row>

        <Row id="taglineRow">
          <Col md={7} mdOffset={2}>
            <h2 id="tagline">STUDENT. DEVELOPER. VISIONARY.</h2>
          </Col>
        </Row>

        <Row id="bioRow">
          <Col md={10}>
            <p id="bio">
              HI THERE. WELCOME TO MY SITE. THIS IS WHERE I'LL POST A LITTLE
              INFO ABOUT MYSELF AS WELL AS LEAVE UPDATES ON MY PROJECTS.
            </p>
          </Col>
        </Row>

        <Row id="contact">
          <Col md={2} mdOffset={4}>
            <Image
              id="email"
              src={email}
              width="40"
              height="40"
              alt="email"
              responsive
            />
          </Col>
          <Col md={3} mdPull={2}>
            <p id="address">BREELAND.ABRAMS@GMAIL.COM</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
