import React from "react";
import Card from "react-bootstrap/Card";
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineRead} from 'react-icons/ai';
import {GiSittingDog} from 'react-icons/gi';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Antonio Guillen-Perez </span>
            from <span className="purple"> Algaida,</span> a pretty little town located in
            <span className="purple"> Murcia, Spain.</span>
            <br />
            <br />

            I am a passionate <span className="purple">machine learning</span> and <span className="purple">research scientist</span> with
            +4 years of experience in <span className="purple">applied AI</span>, and <span className="purple">multi-agent deep reinforcement learning</span>.
            <br />
            <br />
            During my Ph.D., I worked in the <span className="purple">Department of Computer Science, Electronics and Technology</span> of the 
            Polytechnic University of Cartagena (Spain) as a <span className="purple">Ph.D. student</span> and <span className="purple">Associated Professor</span>.
             I was involved in the development of a <span className="purple"> multi-agent system</span> for intelligent traffic control at urban intersections in several European projects.
            <br />
            <br />
            Furthermore, I have also investigated solving <span className="purple">real-world problems</span> such as
            <span className="purple"> cooperative autonomous driving</span> using deep multi-agent reinforcement learning, <span className="purple">pedestrian flow forecasting </span>
            with predictive algorithms, and  analysis of health biomarker signals for throat cancer detection using <span className="purple">health AI</span> techniques.
            <br />
            <br />
            As part of my Ph.D., I have developed an intelligent system that controls <span className="purple">autonomous vehicles</span> in a decentralized fashion, 
            using 6G mobile communication technology. Thanks to <span className="purple">multi-agent deep reinforcement learning</span>, the system can control autonomous vehicles, 
            taking into account all vehicles in complex urban environments. For the training of these proposed algorithms,
            I had to deal with working with <span className="purple">large-scale</span>, <span className="purple">real-world</span> datasets such as <span className="purple">NuScenes</span>,
            <span className="purple"> Waymo</span>, and traffic simulators such as <span className="purple">Carla</span> and <span className="purple">Sumo</span>. 
            <br />
            <br />
            Exploring <span className="purple">new frontiers</span> of knowledge within the field of <span className="purple">multi-agent deep reinforcement learning</span> is a challenge that I would love to tackle
            in my professional and personal development. Likewise, within the field of <span className="purple">artificial intelligence</span>, I
            find the field of <span className="purple">time-series prediction</span>, <span className="purple">multi-task learning</span>, <span className="purple">meta-learning</span>,
            <span className="purple"> imitation-learning</span>, <span className="purple">zero-shot-learning</span>, and
            <span className="purple"> genetic algorithms</span>, in addition, to <span className="purple">signal processing</span>, <span className="purple">natural language processing</span>, and <span className="purple">computer vision</span>, really exciting.
            <br />
            <br />
            As you can see, both on my researchgate and my Github, I am passionate about the field of AI and research, as well as data science.
            I have published several papers related to this field, as well as presented results at conferences such as <span className="purple">NeurIPS</span>.
            I have developed great programming skills in python, as well as having knowledge in C++ and java, developed during my engineering.
            In addition, on my Github page you can find several projects focused on AI such as <span className="purple">Vocals2Song</span>, a project to,
            from the singer's audio wave, generate a song (based on <span className="purple">pix2pixhd</span>); <span className="purple">EdgeSRGAN</span> a <span className="purple">super-resolution (SR)</span> project to
            improve object detection algorithms by helping edges and using generative adversarial networks, among others,
            and several competitions in which I have participated such as <span className="purple">MineRL 2021</span> from <span className="purple">NeurIPS</span>, and <span className="purple">Flatland2021</span>.
            You can find these and other projects I have worked on in the projects section.
            <br />
            <br />
            Personally, I consider myself  <span className="purple">friendly</span>,  <span className="purple">sociable</span>, and  <span className="purple">passionate </span>
            about the world of research and group work, with enormous potential.
            I believe that a lot of progress has been made in the world of science when working in groups and I think there is still
            a lot to develop to achieve a  <span className="purple">better</span>,  <span className="purple">fairer</span>, and  <span className="purple">more equitable</span> world.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <FaTelegramPlane /> Traveling is my passion. I love discovering new places and meeting new people. I really enjoy traveling to different parts of the world to find new cultures and interesting places.
            </li>
            <br />
            <li className="about-activity">
              <AiOutlineRead /> Read many books, blogs, and scientific papers on machine learning, programming, and autonomous vehicles.
            </li>
            <br />
            <li className="about-activity">
              <GiSittingDog /> Going for a run and playing with my dog: he is an adorable shar-pei mix, a super sweet canine who deserves to be well cared for.
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(46 97 188)" }}>
            "Success is not final, failure is not fatal: it is the courage to continue that counts."{" "}
          </p>
          <footer className="blockquote-footer">Winston Churchill</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
