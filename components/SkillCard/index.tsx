import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Button from "../Button";

const SkillCard = (props: {
  icon: any;
  title: string;
  children?: any;
  onClick?: () => void;
}) => {
  return (
    <div className={styles.skillCard}>
      {props.icon}
      <p style={{ textAlign: "center" }}>{props.title}</p>
      {props.children}
      <Button type="outline" onClick={props.onClick}>
        See details
      </Button>
    </div>
  );
};

export default SkillCard;
