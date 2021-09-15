import React from "react";
import Container from "../Container";
import projects from "./projects";
import Image from "next/image";
import styles from "./index.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Projects = () => {
  return (
    <Container
      id="nav-4"
      title="Projects"
      style={{
        backgroundColor: "white",
        color: "#292631",
      }}
    >
      <div style={{ flexDirection: "column" }}>
        {projects.map((project, index) => (
          <div key={index}>
            <div style={{ marginBottom: 50 }}>
              <p style={{ fontWeight: "bold" }}>{project.title}</p>
              <p>{project.body}</p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ marginRight: 5 }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <p style={{ marginRight: 5 }}>GitHub Link:</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  style={{ marginRight: 5 }}
                >
                  {project.github}
                </a>
              </p>{" "}
              <p>Technologies: </p>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {project.technologies
                  ? project.technologies.map((technology, index) => (
                      <p key={index} className={styles.technologies}>
                        {technology}
                      </p>
                    ))
                  : "Soft Skills"}
              </div>
            </div>

            <Carousel autoPlay>
              {project.imageLinks.map((link: string, index: number) => (
                <div key={index} style={{ height: 400 }}>
                  <Image
                    src={link}
                    width={"100%"}
                    height={"100%"}
                    objectFit="contain"
                    layout="fill"
                    alt={`project ${index}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
