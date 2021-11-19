import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {SiResearchgate} from 'react-icons/si';
import {FiMail} from 'react-icons/fi';
function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="12" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/AntonioAlgaida"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/agnprz"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/antonioguillenperez/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.researchgate.net/profile/Antonio-Guillen-Perez"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiResearchgate />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:antonio_algaida@hotmail.com?subject=Interview"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FiMail />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
