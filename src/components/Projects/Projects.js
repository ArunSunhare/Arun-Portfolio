import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import ecomerce from "../../Assets/Projects/ecomerce.png";
import ToDo from "../../Assets/Projects/ToDo.png";
import voting from "../../Assets/Projects/E-voting.png";
import suicide from "../../Assets/Projects/suicide.png";
import game from "../../Assets/Projects/game.png";

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
              imgPath={voting}
              isBlog={false}
              title="E-Voting System Using Blockchain"
              description="Online Election System would have user registration, user login and admin login.This Online Voting System will manage the Voter’s information by
 which voter can login and use his voting rights.At the time of registration voter will be asked for this: Full name, age,Aadhaar card no, mobile no. email id and after being verified will begiven the access."
              ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="Dicce-game"
              description="A fun and interactive dice game built with React.js, where you test your luck and earn points based on your guesses!

🕹️ How to Play
Select a number between 1 and 6.
Click on the dice to roll it.
If your selected number matches the rolled dice number, you earn points equal to the dice value.
If your guess is incorrect, 2 points will be deducted."
              ghLink="https://github.com/ArunSunhare/Dicce-game"
              demoLink="https://dicce-game.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="ToDo-List"
              description="A to-do list website helps users organize tasks efficiently by allowing them to create, manage, and track their daily activities. It enhances productivity with features like reminders, deadlines, and task categorization."
              ghLink="https://github.com/ArunSunhare/todolist"
              demoLink="https://todolist-rho-indol.vercel.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Dicce-game"
              description="A fun and interactive dice game built with React.js, where you test your luck and earn points based on your guesses!

🕹️ How to Play
Select a number between 1 and 6.
Click on the dice to roll it.
If your selected number matches the rolled dice number, you earn points equal to the dice value.
If your guess is incorrect, 2 points will be deducted."
              ghLink="https://github.com/ArunSunhare/Dicce-game"
              demoLink="dicce-game.vercel.app"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecomerce}
              isBlog={false}
              title="Ecomerce Website"
              description="The ecomerce-website- project by ArunSunhare is a front-end e-commerce website built using HTML and CSS. It features pages like index.html and shop.html, along with associated assets such as images and stylesheets."
              ghLink="https://github.com/ArunSunhare/ecomerce-website-"
              demoLink="https://arunsunhare.github.io/ecomerce-website-/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
