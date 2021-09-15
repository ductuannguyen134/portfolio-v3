import React from "react";
import { NextApiRequest } from "next";
import {
  apolloIcon,
  awsIcon,
  cssIcon,
  expressIcon,
  firebaseIcon,
  gitIcon,
  graphqlIcon,
  htmlIcon,
  javascriptIcon,
  jestIcon,
  jiraIcon,
  mongodbIcon,
  neo4jIcon,
  nextIcon,
  nodeIcon,
  reactIcon,
  reduxIcon,
  sqlIcon,
  trelloIcon,
  typescriptIcon,
} from "./skillIcons";

export const skills = [
  {
    name: "JavaScript",
    icon: javascriptIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "HTML",
    icon: cssIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "CSS",
    icon: htmlIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "TypeScript",
    icon: typescriptIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "React.js",
    icon: reactIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "Redux",
    icon: reduxIcon({ style: { height: 100, width: 100 } }),
    rating: 4,
  },
  {
    name: "Node.js",
    icon: nodeIcon({ style: { height: 100, width: 100 } }),
    rating: 4,
  },
  {
    name: "Next.js",
    icon: nextIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "Express.js",
    icon: expressIcon({ style: { height: 100, width: 100 } }),
    rating: 4,
  },
  {
    name: "GraphQL",
    icon: graphqlIcon({ style: { height: 100, width: 100 } }),
    rating: 4,
  },
  {
    name: "Apollo",
    icon: apolloIcon({ style: { height: 100, width: 100 } }),
    rating: 4,
  },
  {
    name: "MongoDB",
    icon: mongodbIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "PostgreSQL",
    icon: sqlIcon({ style: { height: 100, width: 100 } }),
    rating: 3,
  },
  {
    name: "Firebase",
    icon: firebaseIcon({ style: { height: 100, width: 100 } }),
    rating: 4,
  },
  {
    name: "Neo4j",
    icon: neo4jIcon({ style: { height: 100, width: 100 } }),
    rating: 3,
  },
  {
    name: "Jest",
    icon: jestIcon({ style: { height: 100, width: 100 } }),
    rating: 2,
  },
  {
    name: "Git",
    icon: gitIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "AWS",
    icon: awsIcon({ style: { height: 100, width: 100 } }),
    rating: 3,
  },
  {
    name: "Jira",
    icon: jiraIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
  {
    name: "Trello",
    icon: trelloIcon({ style: { height: 100, width: 100 } }),
    rating: 5,
  },
];

export interface Skill {
  name: string;
  icon: JSX.Element;
  rating: number;
}
