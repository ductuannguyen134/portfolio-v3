import React from "react";
import Button from "../Button";
import { TripSocialIcon } from "../Experience/icons";
import styles from "./index.module.scss";

const ExperienceCard = (props: {
  children: any;
  icon?: JSX.Element;
  title: string;
  companyLink?: string;
  technologies?: string[];
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h3 style={{ fontSize: "20px", textAlign: "center" }}>{props.title}</h3>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.icon}>{props.icon}</div>
        <a
          href={props.companyLink}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          View More
        </a>
        {props.children}

        <p>Technologies: </p>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {props.technologies
            ? props.technologies.map((technology, index) => (
                <p key={index} className={styles.technologies}>
                  {technology}
                </p>
              ))
            : "Soft Skills"}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
