const projects = [
  {
    title: "Real Estate Analytics Dashboard",
    body: "This is a personal project that I created using NodeJS and React server-side rendering (Next.JS). Real Estate Analytics Dashboard was built to visualize and analyze the average real estate prices of different locations in Vietnam in different formats including geo-map, pie chart and table. The application uses data crawled from a Vietnamese real estate website, stored in MongoDB and used Apollo Server for GraphQL API service.",
    imageLinks: [
      "/../public/images/raa-home.PNG",
      "/../public/images/raa-cities.PNG",
      "/../public/images/raa-count.PNG",
      "/../public/images/raa-price.PNG",
      "/../public/images/raa-charts.PNG",
    ],
    github: "https://github.com/ductuannguyen134/real-estate-analytics",
    technologies: [
      "Cheerio",
      "NodeJS",
      "GraphQL",
      "Apollo",
      "GitHub",
      "React",
      "Next.JS",
      "MongoDB",
    ],
  },
  {
    title: "I Owe U (Advanced Internet Programming - SP2020)",
    body: "Me and my teammates created a web application that allows users to log in, record and resolve public requests, favors and debts using MERN stack. My responsibility was building the frontend using ReactJS, and support the other team members with the backend using NodeJS.",
    imageLinks: ["/../public/images/iou.png"],
    github: "https://github.com/ductuannguyen134/aip2020-a2",
    technologies: [
      "NodeJS",
      "React (CRA)",
      "REST Api",
      "GitHub",
      "MongoDB",
      "ExpressJS",
    ],
  },
  {
    title: "Whatsapp Clone",
    body: "I have created a web application that works similar to Whatsapp web app, which includes real-time one-to-one chatting using Pusher, group chats and a contact list. The server was powered by ExpressJS and the database is stored in MongoDB. The frontend was built by React.",
    imageLinks: ["/../public/images/whatsapp-clone.jpg"],
    github: "https://github.com/ductuannguyen134/whatsapp-clone-mern",
    technologies: [
      "NodeJS",
      "React (CRA)",
      "REST Api",
      "GitHub",
      "MongoDB",
      "ExpressJS",
      "Pusher",
    ],
  },
];

export default projects;
