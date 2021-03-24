import React from "react";
import "../utils/projects.css";
import { Card, Carousel, Button } from "react-bootstrap";
import Burger from "../utils/images/Burger.png";
import Weather from "../utils/images/Weather.png";
import Password from "../utils/images/Password.png";
import Coding from "../utils/images/Coding.png";

function Projects() {
  return (
    <div className="body" id="projects">
      <div className="projects_row">
        <Carousel>
          <Carousel.Item>
            <Card className="bgdark text-white card" id="coding_box">
              <Card.Img variant="top" alt="Coding-Quiz" src={Coding} />
              <Button block>
                <Card.Link
                  className="git_link"
                  href="https://github.com/tylerlinen/Coding-Quiz"
                >
                  Github Repository
                </Card.Link>
              </Button>
              <Button block>
                <Card.Link
                  className="app_link"
                  href="https://tylerlinen.github.io/Coding-Quiz/"
                >
                  View Website
                </Card.Link>
              </Button>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card className="bgdark text-white card" id="password_box">
              <Card.Img variant="top" alt="Password-Generator" src={Password} />
              <Button block>
                <Card.Link
                  className="git_link"
                  href="https://github.com/tylerlinen/Password-Generator"
                >
                  Github Repository
                </Card.Link>
              </Button>

              <Button block>
                <Card.Link
                  className="app_link"
                  href="https://tylerlinen.github.io/Password-Generator/"
                >
                  View Website
                </Card.Link>
              </Button>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card className="bgdark text-white card" id="weather_box">
              <Card.Img variant="top" alt="Weather-Dashboard" src={Weather} />
              <Button block>
                <Card.Link
                  className="git_link"
                  href="https://github.com/tylerlinen/Weather-Dashboard"
                >
                  Github Repository
                </Card.Link>
              </Button>

              <Button block>
                <Card.Link
                  className="app_link"
                  href="https://tylerlinen.github.io/Weather-Dashboard/"
                >
                  View Website
                </Card.Link>
              </Button>
            </Card>
          </Carousel.Item>

          <Carousel.Item>
            <Card className="bgdark text-white card" id="burger_box">
              <Card.Img variant="top" alt="Burger-App" src={Burger} />
              <Button block>
                <Card.Link
                  className="git_link"
                  href="https://github.com/tylerlinen/burger_app"
                >
                  Github Repository
                </Card.Link>
              </Button>

              <Button block>
                <Card.Link
                  className="app_link"
                  href="https://burger-app-tylerlinen.herokuapp.com/"
                >
                  View Website
                </Card.Link>
              </Button>
            </Card>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
