import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import "./KishanManoharanResume-2024.pdf";
import randomColor from "randomcolor";

function randColor() {
  return randomColor({ luminosity: "light" });
}

export const Resume = () => {
  const langs = [
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "C#",
    "Python",
  ];
  const frames = [
    "Bootstrap",
    "ReactJS",
    "AngularJS",
    "NodeJS",
    "Electron",
    "GraphQL",
    "NestJS",
  ];
  const tools = ["PostgreSQL", "MongoDB", "Visual Studio Code", "Git", "Powershell", "Azure Cloud", "Google Cloud Platform"];

  return (
    <>
      <Container fluid className="App-header">
        <Container className="title title-pad-0">
          <Row>
            <h2>Resume</h2>
            <h6>
              Take a look below for a quick run-down, or download my full resume
            </h6>
            <Col>
              <Button href="./KishanManoharanResume-2024.pdf" target="_blank">
                Open Resume
              </Button>
            </Col>
          </Row>
        </Container>
        <Container className="title-pad-0">
          <Row>
            <Col xl={4} className="text-start p-3">
              <h2 className="mb-4">Work Experience</h2>
              <div className="p-3 mt-3 grey">
                <h4>
                <a
                    href="https://www.bridgenext.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>BridgeNext</strong>
                  </a>
                </h4>
                <h5>October 2023 - Present</h5>
                <h6>
                  <strong>Full Stack Developer</strong>
                </h6>
                <h6>
                Tasked as a Fullstack Developer adept at bolstering the functionality and efficiency of a logistics company's flagship microservices. Proficient in ReactJS for frontend and NodeJS with PostgreSQL for backend development, with a focus on bug resolution, feature enhancements, and seamless deployment. Skilled in client interaction to align software improvements with business objectives.

                </h6>
              </div>
              <div className="p-3 mt-3 grey">
                <h4>
                  <a
                    href="https://home.kpmg/ca"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <strong>KPMG Canada</strong>
                  </a>
                </h4>
                <h5>May 2022 - June 2023</h5>
                <h6>
                  <strong>Software Engineer Consultant</strong>
                </h6>
                <h6>
                  Involved in designing, developing, and testing programs and
                  solutions for clients. Worked on a variety of projects,
                  including architecture migration, application development, and
                  data analytics.
                </h6>
              </div>
            </Col>
            <Col xl={4} className="text-start p-3">
              <h2 className="mb-4">Knowledge</h2>
              <Row>
                <Col>
                  <div className="p-3 grey">
                    <h4>
                      <strong>Languages</strong>
                    </h4>
                    {langs.map((lang) => (
                      <div className="tag" style={{ color: randColor() }}>
                        {lang}
                      </div>
                    ))}
                    <h4 className="pt-3">
                      <strong>Frameworks</strong>
                    </h4>
                    {frames.map((frames) => (
                      <div className="tag" style={{ color: randColor() }}>
                        {frames}
                      </div>
                    ))}
                    <h4 className="pt-3">
                      <strong>Others</strong>
                    </h4>
                    {tools.map((tools) => (
                      <div className="tag" style={{ color: randColor() }}>
                        {tools}
                      </div>
                    ))}
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={4} className="text-start p-3">
              <h2 className="mb-4">Education</h2>
              <div className="p-3 grey">
                <h4>
                  <strong>George Brown College</strong>
                </h4>
                <h5>September 2019 - April 2022</h5>
                <h6>
                  <strong>Computer Program Analyst - T177</strong>
                </h6>
                <h6>
                  This program excels at giving students the experience and
                  skills needed for a wide variety of software-based careers.
                  This includes experience in web, open-source, Unix, and
                  object-oriented languages.
                </h6>
              </div>
            </Col>
            
          </Row>
        </Container>
      </Container>
    </>
  );
};
