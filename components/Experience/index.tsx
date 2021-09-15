import Image from "next/image";
import React from "react";
import Container from "../Container";
import ExperienceCard from "../ExperienceCard";
import { MotionGraficIcon, TripSocialIcon } from "./icons";
import styles from "./index.module.scss";

const Experience = () => {
  return (
    <Container id="nav-3" title="Experience">
      <ExperienceCard
        title="Pavel Australia Pty Ltd"
        icon={<TripSocialIcon />}
        companyLink="https://trip.social/"
        technologies={[
          "MongoDB",
          "NodeJS",
          "GraphQL",
          "Apollo",
          "Firebase",
          "React.js",
          "Next.js",
          "Jest",
          "Neo4j",
          "Codeceptjs (Puppeteer)",
          "Mapbox",
        ]}
      >
        <p className={styles.role}>Full-stack Web Developer</p>
        <p>03/2020 - Present</p>
        <p style={{ lineHeight: 1.8 }}>
          Developing new features both frontend and backend of the web
          application using NodeJS and React. Writing unit tests using Jest and
          end-to-end tests using CodeceptJS. Participating in weekly meetings
          with the CEO, CTO and team members
        </p>
      </ExperienceCard>
      <ExperienceCard
        title="Mimosatek Technology Ltd"
        icon={
          <Image
            src="/../public/images/icon.png"
            width="100%"
            height="100%"
            alt="mimosatek"
          />
        }
        technologies={[
          "React Native",
          "React.js",
          "Redux",
          "Apollo Client",
          "GraphQL",
        ]}
        companyLink="https://mimosatek.com/en/"
      >
        <p className={styles.role}>Mobile Application Developer</p>
        <p>11/2020 - Present,</p>
        <p style={{ lineHeight: 1.8 }}>
          Developing new features using React Native, Redux and Expo.
          Participating in monthly meetings with the CEO, Product Owner, and
          team members
        </p>
      </ExperienceCard>
      <ExperienceCard
        title="Motion Grafic"
        icon={<MotionGraficIcon />}
        companyLink="https://www.motiongrafic.com/"
        technologies={[
          "KeystoneJS",
          "React.js",
          "Node.js",
          "Next.js",
          "GraphQL",
        ]}
      >
        <p className={styles.role}>Full-stack Web Developer</p>
        <p>06/2021 - 08/2021</p>
        <p style={{ lineHeight: 1.8 }}>
          Develop new features, debug existing bugs, and raise new issues to
          improve the project functionality.
        </p>
      </ExperienceCard>
    </Container>
  );
};

export default Experience;
