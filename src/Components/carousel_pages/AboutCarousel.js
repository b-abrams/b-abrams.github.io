import React from "react";
import { Image, Col, Row, Grid, Carousel, CarouselItem } from "react-bootstrap";
import desert from "../../img/personal/desert.png";
import park from "../../img/personal/park.jpg";
import burj from "../../img/personal/burj.png";
import mosque from "../../img/personal/mosque.jpg";
import NSBE from "../../img/orgs/nsbe.png";
import PT1 from "../../img/orgs/My_PT.jpg";
import PT2 from "../../img/orgs/CSULB_PT.jpg";
class AboutCarousel extends React.Component {
  render() {
    return (
      <Grid id="about" className="page carousel" fluid>
        <Row>
          <Col>
            <h1>ABOUT</h1>
          </Col>
        </Row>

        <Carousel>
          <CarouselItem>
            <Row id="aboutPicsR1" className="aboutPics">
              <Col xs={6} align="center">
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

              <Col xs={6} align="center">
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
              <Col xs={12} align="center">
                <p>
                  I'M CURRENTLY A COMPUTER SCIENCE STUDENT WORKING TOWARDS A BS.
                  I LOVE STUDYING COMPUTER SCIENCE AS IT ALLOWS ME TO DEVELOP
                  NEW METHODS OF CRITICAL THINKING AND PROVIDES ME WITH SEVERAL
                  FUN AND CREATIVE WAYS TO SOLVE PROBLEMS.
                </p>
              </Col>
            </Row>
          </CarouselItem>

          <CarouselItem>
            <Row id="aboutPicsR2" className="aboutPics">
              <Col xs={6}>
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
              <Col xs={6}>
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
            </Row>

            <Row>
              <Col xs={12} align="center">
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
              <Col xs={12}>
                <p>
                  OUTSIDE OF CLASS, I ENJOY WORKING ON SIDE PROJECTS AS WELL AS
                  ATTENDING HACKATHONS AND PROGRAMMING CONTESTS. I ALSO
                  PARTICIPATE IN ORGANIZATIONS SUCH AS ACM AND NSBE, TO FURTHER
                  MY KNOWLEGE OF AVALIABLE TECHNOLOGIES AND PROBLEM SOLVING
                  PRACTICES.
                </p>
              </Col>
            </Row>
          </CarouselItem>

          <CarouselItem>
            <Row id="aboutPicsR3" className="aboutPics">
              <Col xs={6} align="right">
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
              <Col xs={6} align="left">
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
              <Col
                sm={10}
                smOffset={1}
                md={10}
                mdOffset={1}
                lg={10}
                lgOffset={1}
              >
                <p>
                  I TAKE PLEASURE IN READING SCIENCE FICTION AND FANTASTY
                  NOVELS, ATTENDING WEEKLY CODE AND COFFEE MEETUPS, TRAVLEING
                  WITH MY FAMILY, GOING OUT WITH AND PLAYING MULTIPLAYER/TEAM
                  ORIENTED VIDEO GAMES WITH FRIENDS, AND KEEPING UP WITH MY
                  FAVORITE CONTENT CREATORS ON YOUTUBE AND TWITCH.
                </p>
              </Col>
            </Row>
          </CarouselItem>
        </Carousel>
      </Grid>
    );
  }
}

export default AboutCarousel;
