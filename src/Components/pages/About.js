import React from "react";
import { Image, Col, Row, Grid } from "react-bootstrap";
import desert from "../../img/personal/desert.png";
import park from "../../img/personal/park.jpg";
import burj from "../../img/personal/burj.png";
import mosque from "../../img/personal/mosque.jpg";
import NSBE from "../../img/orgs/nsbe.png";
import PT1 from "../../img/orgs/My_PT.jpg";
import PT2 from "../../img/orgs/CSULB_PT.jpg";
class About extends React.Component {
  render() {
    return (
      <Grid id="about" className="page" fluid>
        <Row>
          <Col md={2}>
            <h1>ABOUT</h1>
          </Col>
        </Row>

        <Row id="aboutPicsR1" className="aboutPics">
          <Col md={3} mdOffset={3}>
            <Image
              id="desert"
              src={desert}
              width="150"
              height="150"
              alt="Family Vacation to Dubai"
              circle
              responsive
            />
          </Col>

          <Col md={3}>
            <Image
              id="park"
              src={park}
              width="150"
              height="150"
              alt="Echo Park"
              circle
              responsive
            />
          </Col>
        </Row>

        <Row id="aboutP1">
          <Col md={10} mdOffset={1}>
            <p>
              I'M BREELAND AND I'M CURRENTLY A 4TH YEAR STUDENT AT CALIFORNIA
              STATE UNIVERTIY, LONG BEACH WORKING TOWARDS A BS IN COMPUTER
              SCIENCE. I LOVE STUDYING COMPUTER SCIENCE AS IT ALLOWS ME TO
              DEVELOP NEW METHODS OF CRITICAL THINKING AND PROVIDES ME WITH
              SEVERAL FUN AND CREATIVE WAYS TO SOLVE PROBLEMS.
            </p>
          </Col>
        </Row>

        <Row id="aboutPicsR2" className="aboutPics">
          <Col md={3} mdOffset={1}>
            <Image
              id="NSBE"
              src={NSBE}
              width="150"
              height="150"
              alt="NSBE Convention"
              circle
              responsive
            />
          </Col>
          <Col md={3}>
            <Image
              id="ACMPT1"
              src={PT1}
              width="150"
              height="150"
              alt="My Programming Team"
              circle
              responsive
            />
          </Col>
          <Col md={3}>
            <Image
              id="ACMPT2"
              src={PT2}
              width="150"
              height="150"
              alt="CSULB"
              circle
              responsive
            />
          </Col>
        </Row>

        <Row id="aboutP2">
          <Col md={10} mdOffset={1}>
            <p>
              OUTSIDE OF SCHOOL, I ENJOY WORKING ON SIDE PROJECTS (LIKE THIS
              SITE) AS WELL AS ATTENDING EVENTS SUCH AS HACKATHONS AND
              PROGRAMMING CONTESTS. I ALSO PARTICIPATE IN THE ASSOCIATION FOR
              COMPUTING MACHINERY(ACM) AND THE NATIONAL SOCIETY OF BLACK
              ENGINEERS(NSBE), TO FURTHER MY KNOWLEGE OF AVALIABLE TECHNOLOGIES
              AND PROBLEM SOLVING PRACTICES.
            </p>
          </Col>
        </Row>

        <Row id="aboutPicsR3" className="aboutPics">
          <Col md={3} mdOffset={3}>
            <Image
              id="burj"
              src={burj}
              width="150"
              height="150"
              alt="Family Vacation to Dubai"
              circle
              responsive
            />
          </Col>
          <Col md={3}>
            <Image
              id="mosque"
              src={mosque}
              width="150"
              height="150"
              alt="Family Vacation to Dubai"
              circle
              responsive
            />
          </Col>
        </Row>

        <Row id="aboutP3">
          <Col md={10} mdOffset={1}>
            <p>
              I TAKE PLEASURE IN READING SCIENCE FICTION AND FANTASTY NOVELS,
              ATTENDING WEEKLY CODE AND COFFEE MEETUPS, TRAVLEING WITH MY
              FAMILY, GOING OUT WITH AND PLAYING MULTIPLAYER/TEAM ORIENTED VIDEO
              GAMES WITH FRIENDS, AND KEEPING UP WITH MY FAVORITE CONTENT
              CREATORS ON YOUTUBE AND TWITCH.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default About;
