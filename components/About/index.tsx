import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";

const About = (props: any) => {
  return (
    <Container id="nav-0" title="About Me">
      <div style={{ flex: "50%", padding: 20 }}>
        <Image
          alt="profile-pic"
          className={styles.profileImage}
          width="100%"
          height="100%"
          layout="responsive"
          src="https://scontent.fsyd7-1.fna.fbcdn.net/v/t1.6435-9/128624862_3571608776279779_6774552934546622038_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Kxnj3qWMxZEAX_iD0bc&tn=yWRf2j0DxWaWIHYH&_nc_ht=scontent.fsyd7-1.fna&oh=bee791c6b56b0ea8d0635db3706ea224&oe=61432DA2"
        />
      </div>

      <div style={{ flex: "50%" }}>
        <p style={{ lineHeight: 1.8 }}>
          I am an Front-End Application Developer, currently pursuing Master of
          Information Technology in UTS. I have a great passion in coding and
          exploring new knowledge about technology. I am experienced in web and
          mobile application development, agile methodologies, and working with
          various types of databases. I am excited to work with a global team
          and dedicated to deliver high quality software.
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Beside building software, I am into music and sport! I make my own
          music in my free time and upload it on SoundCloud. I also like playing
          basketball with my friends and my favourite NBA player is Kevin Durant
          :D .
        </p>

        <a href="/files/16092021-resume.pdf" download>
          <Button type="primary">Download my CV </Button>
        </a>
      </div>
    </Container>
  );
};

export default About;
