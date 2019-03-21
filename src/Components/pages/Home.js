import React from "react";
import { Image, Grid, Row, Col } from "react-bootstrap";
import headshot from "../../img/home/headshot.jpg";
import email from "../../img/home/email.png";

var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;

var h1Style = { fontSize: viewWidth * 0.075 };
var h2Style = { fontSize: viewWidth * 0.04 };
var pStyle = { fontSize: viewWidth * 0.035 };

class Home extends React.Component {
  render() {
    return (
      <Grid id="home" className="page" fluid>
        <Row id="headshotRow">
          <Col xs="auto" sm="auto" md="auto" align="center">
            <Image
              id="headshot"
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
          <Col xs="auto" sm="auto" md="auto" align="center">
            <h1 id="name" style={h1Style}>
              BREELAND ABRAMS
            </h1>
          </Col>
        </Row>

        <Row id="taglineRow">
          <Col xs="auto" sm="auto" md="auto" align="center">
            <h2 id="tagline" style={h2Style}>
              STUDENT. DEVELOPER. VISIONARY.
            </h2>
          </Col>
        </Row>

        <Row id="bioRow">
          <Col xs="auto" sm={10} smOffset={1} md="auto" align="center">
            <p style={pStyle}>
              HI THERE. WELCOME TO MY SITE. THIS IS WHERE I'LL POST A LITTLE
              INFO ABOUT MYSELF AS WELL AS LEAVE UPDATES ON MY PROJECTS.
            </p>
          </Col>
        </Row>

        <Row id="contact">
          <Col xs={4} sm={6} smPull={2} md={2} mdOffset={5} align="right">
            <Image
              id="email"
              src={email}
              width="40"
              height="40"
              alt="email"
              responsive
            />
          </Col>
          <Col xs={4} sm={6} smPull={2} md={3} mdPull={2} align="left">
            <p style={pStyle}>BREELAND.ABRAMS@GMAIL.COM</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
