import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";

interface ContainerProp {
  children: any;
  title: string;
}

const Container = (props: ContainerProp & any) => {
  return (
    <div id={props.id}>
      <div style={props.style ?? null} className={styles.container}>
        <h1 style={{ marginBottom: 50 }}>{props.title}</h1>
        <div className={styles.contentContainer}>{props.children}</div>
      </div>
    </div>
  );
};

export default Container;
