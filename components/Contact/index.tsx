import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import styles from "./index.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Modal from "../Modal";
import Card from "../Card";

const Contacts = () => {
  return (
    <Container id="nav-5" title="Contacts">
      <div style={{ flex: "50%" }}>
        <Card>
          <p>Email: ductuan1999@gmail.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/ductuannguyen134"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline", color: "white" }}
            >
              https://github.com/ductuannguyen134
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/duc-tuan-nguyen-7914a317a/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "underline", color: "white" }}
            >
              https://www.linkedin.com/in/duc-tuan-nguyen-7914a317a/{" "}
            </a>
          </p>
        </Card>
      </div>
    </Container>
  );
};

export default Contacts;
