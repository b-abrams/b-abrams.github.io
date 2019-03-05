import React from "react";
import {
  Row,
  Col,
  Grid,
  Thumbnail,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";

function createTooltip(ref) {
  return (
    <Tooltip>
      <strong>
        {ref.map(element => (
          <p>{element}</p>
        ))}
      </strong>
    </Tooltip>
  );
}

function getLanguages(langs) {
  let str = "";
  for (let i = 0; i < langs.length; i++) {
    str += "[" + langs[i] + "]" + " ";
  }
  return str.trim();
}

class Projects extends React.Component {
  render() {
    const knightfall = require("../../projects/knightfall");
    const knightfallImg = require(`../../img/projects/${knightfall.img}`);
    const website = require("../../projects/website");
    const websiteImg = require(`../../img/projects/${website.img}`);
    return (
      <Grid id="projectsF" className="page full" fluid>
        <Row>
          <Col md={2}>
            <h1>PROJECTS</h1>
          </Col>
        </Row>

        <Row>
          <Col sm={3} smOffset={1} md={3} mdOffset={1}>
            <a id="knightfallAnchor" href={knightfall.url}>
              <OverlayTrigger
                placement="bottom"
                overlay={createTooltip(knightfall.more)}
              >
                <Thumbnail className="projThumb" src={knightfallImg}>
                  <h2>{knightfall.title}</h2>
                  <h3>{getLanguages(knightfall.languages)}</h3>
                  <h4>{knightfall.summary}</h4>
                </Thumbnail>
              </OverlayTrigger>
            </a>
          </Col>

          <Col sm={3} md={3}>
            <a id="websiteAnchor" href={website.url}>
              <OverlayTrigger
                placement="bottom"
                overlay={createTooltip(website.more)}
              >
                <Thumbnail className="projThumb" src={websiteImg}>
                  <h2>{website.title}</h2>
                  <h3>{getLanguages(website.languages)}</h3>
                  <h4>{website.summary}</h4>
                </Thumbnail>
              </OverlayTrigger>
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Projects;
