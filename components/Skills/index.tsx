import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import Button from "../Button";
import Container from "../Container";
import { skills, Skill } from "./constants";
import SkillCard from "../SkillCard";
import Modal from "../Modal";
import Rating from "@material-ui/lab/Rating";

const Skills = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null);

  return (
    <Container id="nav-1" title="Skills">
      <div className={styles.grid}>
        {skills.map((skill: Skill, index: number) => {
          return (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.name}
              onClick={() => {
                setCurrentSkill(skill);
                setModalOpen(true);
              }}
            />
          );
        })}
      </div>

      {currentSkill && (
        <Modal
          open={modalOpen}
          handleClose={() => {
            setModalOpen(false);
          }}
          title={currentSkill.name}
        >
          <p>My Proficiency: </p>
          <Rating
            name="size-large"
            defaultValue={currentSkill.rating}
            size="large"
            disabled
          />
        </Modal>
      )}
    </Container>
  );
};

export default Skills;
