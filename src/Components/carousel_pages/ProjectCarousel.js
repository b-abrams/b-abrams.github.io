import React from "react";
import {
  Row,
  Col,
  Grid,
  Thumbnail,
  OverlayTrigger,
  Tooltip,
  Carousel,
  CarouselItem
} from "react-bootstrap";

function getLanguages(langs) {
  let str = "";
  for (let i = 0; i < langs.length; i++) {
    str += "[" + langs[i] + "]" + " ";
  }
  return str.trim();
}

class ProjectCarousel extends React.Component {
  render() {
    const knightfall = require("../../projects/knightfall");
    const knightfallImg = require(`../../img/projects/${knightfall.img}`);
    const website = require("../../projects/website");
    const websiteImg = require(`../../img/projects/${website.img}`);
    return (
      <Grid id="projects" className="page carousel" fluid>
        <Row>
          <Col md={2}>
            <h1>PROJECTS</h1>
          </Col>
        </Row>

        <Carousel>
          <CarouselItem>
            <a id="knightfallAnchor" href={knightfall.url}>
              <Thumbnail className="projThumb" src={knightfallImg}>
                <h2>{knightfall.title}</h2>
                <h3>{getLanguages(knightfall.languages)}</h3>
                <h4>{knightfall.summary}</h4>
              </Thumbnail>
            </a>
          </CarouselItem>

          <CarouselItem>
            <a id="websiteAnchor" href={website.url}>
              <Thumbnail className="projThumb" src={websiteImg}>
                <h2>{website.title}</h2>
                <h3>{getLanguages(website.languages)}</h3>
                <h4>{website.summary}</h4>
              </Thumbnail>
            </a>
          </CarouselItem>
        </Carousel>
      </Grid>
    );
  }
}

export default ProjectCarousel;
