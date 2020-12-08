import { v4 as uuidv4 } from "uuid";
import projectImgs from "./ProjectImgs";
import React from "react";

function projectData() {
  return [
    {
      title: "Portfolio Website",
      featureOne: "React",
      featureTwo: "Framer-Motion",
      featureThree: "Styled Components",
      mainImg: projectImgs.portfolio.main,
      secondaryImg: projectImgs.portfolio.secondary,
      id: uuidv4(),
      active: false,
      github: "https://github.com/Druashley/Druashleyv2",
      url: "portfolio-website",
      description:
        "This is my main website and a hub for everything I have created. The backend is using nginx on a vultur. I used React to make the project more responsive and app-like. This was my first project after getting back into front-end web development. I have redux setup for the backend in case I want to pass around data. I used Framer-Motion to apply animations to the website. This package has been great to work with. The more time I spend with it, the more I like it. Styled components are probably an overkill for a project this small. I used styled components because it is used a lot in the industry and I wanted to become familar with it. ",
    },
    {
      title: "Journal",
      featureOne: "Work in Progress",
      featureTwo: "Not Built Yet",
      featureThree: "Soon to be",
      mainImg: projectImgs.portfolioTwo.main,
      secondaryImg: projectImgs.portfolio.secondary,
      id: uuidv4(),
      active: false,
      github: "#",
      url: "journal",
      description:
        "This project has not been built yet. The goal is to make a journal to document my time learning to code. My main goal for this project is for it to be a decent CRUD application.",
    },
    {
      title: "API",
      featureOne: "Work in Progress",
      featureTwo: "Not Built Yet",
      featureThree: "Soon to be",
      mainImg: projectImgs.portfolioThree.main,
      secondaryImg: projectImgs.portfolio.secondary,
      id: uuidv4(),
      active: false,
      github: "#",
      url: "api",
      description:
        "This project has not been built yet. The goal with this project will be to make a detailed website that utilizes an API I come across online. Not sure which API I will work with yet, but the more data the better. ",
    },
  ];
}

export default projectData;
