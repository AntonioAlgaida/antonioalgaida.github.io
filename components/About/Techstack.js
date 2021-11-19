import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiDocker, SiScipy, SiLinux, SiVisualstudiocode, SiJupyter } from "react-icons/si";
import { SiPytorchlightning, SiKeras, SiScikitlearn, SiPandas, SiPlotly } from "react-icons/si";
import {AiFillGithub} from 'react-icons/ai';
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorchlightning />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Techstack;
