import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar2.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {SiResearchgate} from 'react-icons/si';
import {FiMail} from 'react-icons/fi';

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="red"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Passionate 
              <i><b className="purple"> machine learning </b></i>
              and 
              <i><b className="purple"> research scientist </b></i>
              with a great passion for research and critical thinking since watching Mythbusters 💙. 
              <br />
              <br />I code daily in 
              <i>
                <b className="purple"> Python</b>
              </i>
              , I am also proficient in
              <i>
                <b className="purple"> C++ </b>
              </i>
              and,
              <i>
                <b className="purple"> Java </b>
              </i>
              .
              <br />
              <br />
              My field of Interest's are the research and applications of new 
              <i>
                <b className="purple"> Deep Learning </b>
              </i>
              techniques, 
              <i>
                <b className="purple"> Multi-Agent Deep Reinforcement Learning </b>
              </i>
              , and <i><b className="purple"> AI in healthcare</b></i>.
              I have a strong background in <i><b className="purple">mathematics</b></i> and <i><b className="purple">statistics </b></i>
              and am comfortable with all aspects of <i><b className="purple">Artificial Intelligence</b></i>, 
              <i><b className="purple"> Computer Vision</b></i>, and
              <i><b className="purple"> Natural Language Processing</b></i>.
              <br />
              <br />  
              In addition, I am also passionate about <i><b className="purple">Data Science</b></i>
              , <i><b className="purple">Data Analytics</b></i> , and
              <i><b className="purple"> Data Engineer</b></i>  as well as <i><b className="purple">Data presentation</b></i>.


            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-social">
            <h1>FIND ME ON</h1>
            < br />
            <p>
              Feel free to <span className="purple"><strong>connect</strong> </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AntonioAlgaida"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/agnprz"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/antonioguillenperez/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.researchgate.net/profile/Antonio-Guillen-Perez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiResearchgate/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:antonio_algaida@hotmail.com?subject=Interview"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FiMail/>
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="home-about-social">
            <h1>ADD INFO</h1>
            <p align="center" >
            28 Blasco Ibanez St. < br />
            Archena, Murcia 30600 < br />
            Spain
            < br />
            +34 662-448-206
            < br />
            antonio_algaida@hotmail.com
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
