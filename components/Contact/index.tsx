import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import styles from "./index.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import Modal from "../Modal";

const Contacts = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  return (
    <Container id="nav-5" title="Contact">
      <div
        style={{
          backgroundColor: "white",
          color: "#292631",
          borderRadius: "10px",
          padding: 20,
        }}
      >
        <h3>Email: ductuan1999@gmail.com</h3>{" "}
        <h3>
          GitHub:{" "}
          <a
            href="https://github.com/ductuannguyen134"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            https://github.com/ductuannguyen134
          </a>
        </h3>
        <h3>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/duc-tuan-nguyen-7914a317a/"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            https://www.linkedin.com/in/duc-tuan-nguyen-7914a317a/
          </a>
        </h3>
      </div>
    </Container>
  );
};

export default Contacts;
