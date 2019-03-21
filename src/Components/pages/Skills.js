import React from "react";
import { Image, Grid, Row, Col } from "react-bootstrap";
import java from "../../img/programming/java.png";
import python from "../../img/programming/python.png";
import cpp from "../../img/programming/cpp.png";
import js from "../../img/programming/javascript.png";
import html from "../../img/design/html5.png";
import css from "../../img/design/css3.png";
import win from "../../img/os/windows.png";
import osx from "../../img/os/apple.png";
import ubuntu from "../../img/os/ubuntu.png";

class Skills extends React.Component {
  render() {
    return (
      <Grid id="skills" className="page" fluid>
        <Row id="header">
          <Col xs={12} sm={12} md={12}>
            <h1>SKILLS</h1>
          </Col>
        </Row>

        <Row id="progLang">
          <Col xs={12} sm={12} md={10}>
            <h2>PROGRAMMING &amp; WEB DEVELOPING LANGUAGES</h2>
          </Col>
        </Row>

        <Row id="primary">
          <Col xs={12} sm={5} md={5}>
            <h3>PRIMARY</h3>
          </Col>
        </Row>

        <Row className="primaryLang">
          <Col xs={6} sm={2} smOffset={3} md={2} mdOffset={3}>
            <Image
              id="java"
              className="skillImg"
              src={java}
              width="70"
              height="70"
              alt="Java"
            />
          </Col>
          <Col xs={6} sm={2} md={2}>
            <Image
              id="python"
              className="skillImg"
              src={python}
              width="70"
              height="70"
              alt="Python"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={5} md={5}>
            <h3>SECONDARY</h3>
          </Col>
        </Row>

        <Row className="secondLang">
          <Col xs={3} sm={2} smOffset={3} md={2} mdOffset={3}>
            <Image
              id="cpp"
              className="skillImg"
              src={cpp}
              width="70"
              height="70"
              alt="C++"
            />
          </Col>
          <Col xs={3} sm={2} md={2}>
            <Image
              id="html"
              className="skillImg"
              src={html}
              width="70"
              height="70"
              alt="HTML"
            />
          </Col>
          <Col xs={3} sm={2} md={2}>
            <Image
              id="css"
              className="skillImg"
              src={css}
              width="80"
              height="85"
              alt="css"
            />
          </Col>
          <Col xs={3} sm={2} md={2}>
            <Image
              id="javascript"
              className="skillImg"
              src={js}
              width="80"
              height="85"
              alt="javascript"
            />
          </Col>
        </Row>

        <Row id="os">
          <Col xs={12} sm={12} md={5}>
            <h2>OPERATING SYSTEMS</h2>
          </Col>
        </Row>

        <Row id="oSys">
          <Col xs={4} sm={2} smOffset={3} md={2} mdOffset={3}>
            <Image
              id="windows"
              className="skillImg"
              src={win}
              width="60"
              height="60"
              s
              alt="Windows"
            />
          </Col>
          <Col xs={4} sm={2} md={2}>
            <Image
              id="osx"
              className="skillImg"
              src={osx}
              width="70"
              height="70"
              alt="OS X"
            />
          </Col>
          <Col xs={4} sm={2} md={2}>
            <Image
              id="ubuntu"
              className="skillImg"
              src={ubuntu}
              width="70"
              height="70"
              alt="Ubuntu"
            />
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default Skills;
