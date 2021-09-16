import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import About from "../components/About";
import Button from "../components/Button";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "./index.module.scss";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { Link } from "react-scroll";
import Contacts from "../components/Contact";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Duc Tuan Nguyen</title>
        <meta name="description" content="Duc Tuan Nguyen's profile" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.headerContainer}>
        <Header
          style={{
            zIndex: 10,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "inherit",
          }}
        >
          <p className={styles.welcomeText}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            "Hello World! My name is Duc Tuan Nguyen"
          </p>
          <Link to="nav-0" smooth={true}>
            <Button type="header">Find out more about me</Button>
          </Link>
        </div>
      </div>
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contacts />
      <div
        className={styles.upArrowButton}
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <ArrowUpwardIcon htmlColor="primary" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
