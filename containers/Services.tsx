import React from "react";
import { services } from "../portfolio";
import { Container, Row } from "reactstrap";
import ServicesCard from "../components/ProjectsCard";
import Fade from "react-reveal/Fade";

const Projects = () => {
  return (
    services && (
      <Fade bottom duration={2000}>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-settings text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Services</h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {services.map((data, i) => {
                return <ServicesCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Projects;
