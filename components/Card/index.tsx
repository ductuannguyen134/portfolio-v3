import React from "react";
import styles from "./index.module.scss";

const Card = (props: { children: any }) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default Card;
