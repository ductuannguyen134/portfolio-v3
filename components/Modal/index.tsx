import React from "react";
import UiModal from "@material-ui/core/Modal";
import styles from "./index.module.scss";

const Modal = (props: {
  open: boolean;
  handleClose: () => void;
  children: any;
  title?: string;
  noBackground?: boolean;
}) => {
  return (
    <UiModal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={
          props.noBackground
            ? styles.modalContainerNoBackground
            : styles.modalContainer
        }
      >
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </UiModal>
  );
};

export default Modal;
