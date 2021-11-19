import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.svg";
// import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={4}
            style={{ paddingTop: "120px", paddingBottom: "50px", paddingLeft: "0px", paddingRight: "0px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          Another <strong className="purple">Skills</strong>
        </h1>
        <p style={{ textAlign: "justify" }}>
        5G Networks, A/B Testing, AI Healthcare, Algorithm Design, Algorithm Development, Algorithms, Amazon Web Services, Analytical Skill,
        Applied Research, Artificial Intelligence, Big Data, BlueTooth Technology, Business Intelligence, Captum, Computer Architecture,
        Computer Graphics, Computer Hardware, Computer Learning, Computer Science, Computer Vision, C++, CUDA, Dask, Data Analysis, Data Analyst,
        Data Analytics, Data Debugging, Data Processing, Data Science, Data Structures, Data Visualization, Data Wrangling, Debugging,
        Deep Learning, Distributed Computing, Engineering, Exploratory Data Analysis, GPU, GPU computing, Graph Algorithms,
        Graph Neural Networks, Gym, High-efficiency computing, Imbalanced Learning, Imitation Learning, Interpersonal, iPython Notebook,
        Java, Kubernetes, Learning from Demonstration, Learning from Observation, Linear Algebra, Logging, MATLAB, 
        Meta Learning, Model Interpretability, Mujoco, Multi-Agent System, Multi-Modal Learning, 
        Multi-Task Learning, Multi-threading, Natural Language Processing, NumPy, Object-Oriented Programming, Parallel Computing, 
        Performance Optimization, Problem-Solving, Public Speaking, Research, 
        Research And Development, Researcher, Researching, Research Skills, Robotics, Seaborn, Statistical Data Analysis, 
        Statistics, StatsModels, Telecommunications, Theano, Time Series Forecasting, Transformers Neural Networks, Unittest, Wi-Fi, Zero-Shot Learning. 
        </p>
        {/* <Toolstack /> */}
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
