import React from "react";
import { Nav, NavItem, Row, Col, Grid, Image } from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import github from "../img/externals/github_logo.png";
import linkedin from "../img/externals/linkedin.png";

class Sidebar extends React.Component {
  render() {
    return (
      <Nav className="navSide" bsStyle="pills" stacked responsive>
        <div id="navSideUl">
          <NavItem className="navSideLi">
            <AnchorLink className="navAnchor" href="#home" class="scroll">
              HOME
            </AnchorLink>
          </NavItem>
          <NavItem className="navSideLi">
            <AnchorLink className="navAnchor" href="#aboutF" class="scroll">
              ABOUT
            </AnchorLink>
          </NavItem>
          <NavItem className="navSideLi">
            <AnchorLink className="navAnchor" href="#skills" class="scroll">
              SKILLS
            </AnchorLink>
          </NavItem>
          <NavItem className="navSideLi">
            <AnchorLink
              className="navAnchor"
              href="#experienceF"
              class="scroll"
            >
              EXPERIENCE
            </AnchorLink>
          </NavItem>
          <NavItem className="navSideLi">
            <AnchorLink className="navAnchor" href="#projectsF" class="scroll">
              PROJECTS
            </AnchorLink>
          </NavItem>
        </div>

        <p id="externals">EXTERNAL LINKS</p>
        <Grid id="linkGrid">
          <Row id="r1">
            <Col md={1}>
              <a href="https://www.linkedin.com/in/breeland-abrams">
                <Image
                  id="linkedin"
                  src={linkedin}
                  width="60"
                  height="60"
                  alt="LinkedIn"
                  circle
                  responsive
                />
              </a>
            </Col>
            <Col md={1}>
              <a href="https://github.com/b-abrams">
                <Image
                  id="github"
                  src={github}
                  width="60"
                  height="60"
                  alt="GitHub"
                  responsive
                />
              </a>
            </Col>
          </Row>
        </Grid>
      </Nav>
    );
  }
}

export default Sidebar;
