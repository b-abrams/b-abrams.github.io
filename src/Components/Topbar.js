import React from "react";
import {
  Glyphicon,
  DropdownButton,
  MenuItem,
  Row,
  Col,
  Grid,
  Image
} from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import github from "../img/externals/github_logo.png";
import linkedin from "../img/externals/linkedin.png";

var viewport = window.innerHeight;
const scrollOffset = viewport - viewport * 0.9;

class Topbar extends React.Component {
  render() {
    return (
      <Grid className="navTop">
        <Row>
          <Col xs={1} xsOffset={1} sm={3}>
            <DropdownButton
              id="navButton"
              title={<Glyphicon glyph="align-justify"> </Glyphicon>}
            >
              <MenuItem>
                <AnchorLink
                  className="navAnchor"
                  href="#home"
                  class="scroll"
                  offset={scrollOffset}
                >
                  HOME
                </AnchorLink>
              </MenuItem>
              <MenuItem>
                <AnchorLink
                  className="navAnchor"
                  href="#about"
                  class="scroll"
                  offset={scrollOffset}
                >
                  ABOUT
                </AnchorLink>
              </MenuItem>
              <MenuItem>
                <AnchorLink
                  className="navAnchor"
                  href="#skills"
                  class="scroll"
                  offset={scrollOffset}
                >
                  SKILLS
                </AnchorLink>
              </MenuItem>
              <MenuItem>
                <AnchorLink
                  className="navAnchor"
                  href="#experience"
                  class="scroll"
                  offset={scrollOffset}
                >
                  EXPERIENCE
                </AnchorLink>
              </MenuItem>
              <MenuItem>
                <AnchorLink
                  className="navAnchor"
                  href="#projects"
                  class="scroll"
                  offset={scrollOffset}
                >
                  PROJECTS
                </AnchorLink>
              </MenuItem>
            </DropdownButton>
          </Col>

          <Col xs={2} xsOffset={5} sm={1} smPull={1}>
            <a href="https://www.linkedin.com/in/breeland-abrams">
              <Image
                id="linkedin"
                src={linkedin}
                width="60"
                height="60"
                alt="LinkedIn"
                circle
              />
            </a>
          </Col>
          <Col xs={2} sm={1}>
            <a href="https://github.com/b-abrams">
              <Image
                id="github"
                src={github}
                width="60"
                height="60"
                alt="GitHub"
              />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Topbar;
