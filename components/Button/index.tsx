import React from "react";
import styles from "./index.module.scss";

const Button = (props: {
  children: string;
  type: string;
  onClick?: () => void;
}) => {
  const getClassName = (buttonType: string) => {
    switch (buttonType) {
      case "header":
        return styles.header;
      case "primary":
        return styles.primary;
      case "outline":
        return styles.outline;
    }
  };

  return (
    <div>
      <button onClick={props.onClick} className={getClassName(props.type)}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
