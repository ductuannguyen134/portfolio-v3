import React from "react";
import Card from "../Card";
import Container from "../Container";

const Education = () => {
  return (
    <Container
      id="nav-2"
      style={{
        backgroundImage: `url('https://slidechef.net/wp-content/uploads/2021/07/cute-educational-background-designs.jpg')`,
        color: "#292631",
      }}
      title="Education"
    >
      <div style={{ flex: "50%" }}>
        <Card>
          {" "}
          <h1>University of Technology, Sydney</h1>
          <h3>Master of Information Technology</h3>
          <p style={{ fontStyle: "italic" }}>March 2020 - present</p>
          <p>GPA: 6.50 / 7</p>
        </Card>
      </div>
      <div style={{ flex: "50%" }}>
        <Card>
          <h1>James Cook University @ Singapore</h1>
          <h3>Bachelor of Information Technology</h3>
          <p style={{ fontStyle: "italic" }}>11/2017 - 11/2019</p>
          <p>GPA: 5.54 / 7</p>
        </Card>
      </div>
    </Container>
  );
};

export default Education;
