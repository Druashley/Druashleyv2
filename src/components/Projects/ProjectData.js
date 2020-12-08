import { v4 as uuidv4 } from "uuid";
import projectImgs from "./ProjectImgs";

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
        "This is my main website and a hub for everything I have created. ",
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
