import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Vocals2Song from "../../Assets/Projects/singer.png";
import EgdeSRGAN from "../../Assets/Projects/SR.jpg";
import minerl from "../../Assets/Projects/minerl.jpg";
import flatland from "../../Assets/Projects/flatland.png";


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
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Vocals2Song}
              isBlog={false}
              title="Vocals2Song"
              description="This project consists of the creation of music from voice audio, using the implementation of Tensorflow 2.0 pix2pixhd.
              It is approached as an inverse problem of the separation of components in a song. The main idea is to use this network to create music,
              only by introducing voice. To do this, the network will be trained with a dataset with pairs of voices/mixtures
              (voices + piano + guitar + bass + drums + ...). I have pre-processed the raw data (vocals and mixture pair dataset) in musdb dataset,
              in an image that contains encoded information provided by the spectrogram of the signals, which can be treated as a 2-D
              image to train the pix2pix model"
              link="https://github.com/AntonioAlgaida/Vocals2Song"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={EgdeSRGAN}
              isBlog={false}
              title="Edge.SRGAN"
              description="The objective of this project was the development of a new algorithm for the generation of high resolution images
              from low quality images, i.e. within Single Image Super-Resolution (SISR). For this purpose, I decided to implement a solution that unifies
              the advantages offered by SRGAN (Photo-Realistic Single Image Super-Resolution Using a Generative Adversarial Network - GAN) together with
              those offered by edge prediction (Edge-Informed Single Image Super-Resolution).
              Pytorch was used in this project. The model was able to provide results superior to those obtained by the original models."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={minerl}
              isBlog={false}
              title="Competition MineRL 2021 - NeurIPS"
              description="The MineRL 2021 Diamond competition aimed to encourage the development of algorithms that can effectively leverage human demonstrations to drastically reduce the number of samples required to solve complex, hierarchical, and sparse environments. The task to be solved was to develop a reinforcement learning policy that can derive a diamond in Minecraft from raw pixels using only 8,000,000 samples from the MineRL simulator and the MineRL dataset (a large-scale collection of over 60 million human demo frames).
              The proposed control policy combines learning by demonstration, bagging and SAC, showing high robustness, ranking in the top 25% of participants."
              link="https://github.com/AntonioAlgaida/MineRL2021"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={flatland}
              isBlog={false}
              title="Competition - Flatland2021"
              description="Flatland-3 is a simulated game environment aimed at testing multi-agent reinforcement learning solutions for train schedules. For this competition, I investigated the state of the art of multi-agent reinforcement learning algorithms and developed a solution based on tree search, imitation learning, and TD3 (high-performance reinforcement learning algorithm). The results showed that new control policies were discovered that outperformed those shown during imitation learning and the solution managed to rank in the top 20%."
              link="https://github.com/AntonioAlgaida/Flatland2021"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
