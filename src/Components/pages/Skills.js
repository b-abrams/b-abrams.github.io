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
          <Col md={2}>
            <h1>SKILLS</h1>
          </Col>
        </Row>

        <Row id="progLang">
          <Col md={10}>
            <h2>PROGRAMMING &amp; WEB DEVELOPING LANGUAGES</h2>
          </Col>
        </Row>

        <Row id="primary">
          <Col md={5}>
            <h3>PRIMARY</h3>
          </Col>
        </Row>

        <Row className="primaryLang">
          <Col md={2} mdOffset={3}>
            <Image id="java" src={java} width="70" height="70" alt="Java" />
          </Col>
          <Col md={2}>
            <Image
              id="python"
              src={python}
              width="70"
              height="70"
              alt="Python"
            />
          </Col>
        </Row>

        <Row>
          <Col md={5}>
            <h3>SECONDARY</h3>
          </Col>
        </Row>

        <Row className="secondLang">
          <Col md={2} mdOffset={3}>
            <Image id="cpp" src={cpp} width="70" height="70" alt="C++" />
          </Col>
          <Col md={2}>
            <Image id="html" src={html} width="70" height="70" alt="HTML" />
          </Col>
          <Col md={2}>
            <Image id="css" src={css} width="80" height="85" alt="css" />
          </Col>
          <Col md={2}>
            <Image
              id="javascript"
              src={js}
              width="80"
              height="85"
              alt="javascript"
            />
          </Col>
        </Row>

        <Row id="os">
          <Col md={5}>
            <h2>OPERATING SYSTEMS</h2>
          </Col>
        </Row>

        <Row id="oSys">
          <Col md={2} mdOffset={3}>
            <Image
              id="windows"
              src={win}
              width="60"
              height="60"
              s
              alt="Windows"
            />
          </Col>
          <Col md={2}>
            <Image id="osx" src={osx} width="70" height="70" alt="OS X" />
          </Col>
          <Col md={2}>
            <Image
              id="ubuntu"
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
