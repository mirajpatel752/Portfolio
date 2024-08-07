import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tictac from "../../Assets/Projects/MainPage.png";
import vbites from "../../Assets/Projects/layer_vbites.jpg";
import Adminvbites from "../../Assets/Projects/vbitesAdmin.png";
import SymbiotikaSwap from "../../Assets/Projects/about.png";
import krishtal from "../../Assets/Projects/krishtal.png";
import appMunim from "../../Assets/Projects/appMunim.png";
import gst from "../../Assets/Projects/gst.png";
import ecom from "../../Assets/Projects/ecom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appMunim}
              isBlog={false}
              title="A Complete Suite of Accounting and GST Software"
              description="Take complete control of your finances with us.
			  We are your gateway to stress-free accounting and billing. Unlock efficiency and elevate
			  your success now"
              techstack="React.js"
              link="https://app.themunim.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gst}
              isBlog={false}
              title="For GST Filing"
              description="Enrich your GSTR filing experience with our tax management software. Import data, Upload to the GSTN portal, and quickly file GST. Maximize returns with accurate calculations!"
              techstack="React.js"
              link="https://gst.themunim.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictac}
              isBlog={false}
              title="Shaping the future of competitive knowledge games"
              description="There is nothing better than a good competition to push us forward at a faster pace!"
              techstack="React.js"
              link="https://zleetz.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Smart Insight Reports"
              description="Make your customers speak volumes for you!
							VBites is the simplest way to collect feedback, video testimonials, and reviews from your happy customers."
              techstack="React.js"
              link="https://devecom.themunim.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vbites}
              isBlog={false}
              title="Send request, then simply review, edit and share	"
              description="Make your customers speak volumes for you!

							VBites is the simplest way to collect feedback, video testimonials, and reviews from your happy customers."
              techstack="React.js"
              link="https://vbites.ai/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Adminvbites}
              isBlog={false}
              title="Send request, then simply review, edit and share	"
              techstack="React.js Admin Penal"
              link="https://admin.vbites.ai/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SymbiotikaSwap}
              isBlog={false}
              title="An avenue for the evolution of digital assets swap on solana at lightning speed."
              techstack="SymbiotikaSwap"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krishtal}
              isBlog={false}
              title="New Joint Account Created."
              techstack="Insights & Expert Opinions"
              link="https://staging-portal.kristal.ai/login "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
