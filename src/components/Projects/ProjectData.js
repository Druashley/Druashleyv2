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
    },
    {
      title: "Journal",
      featureOne: "Work",
      featureTwo: "In",
      featureThree: "Progress",
      mainImg: projectImgs.portfolioTwo.main,
      secondaryImg: projectImgs.portfolio.secondary,
      id: uuidv4(),
      active: false,
      github: "",
    },
    {
      title: "API",
      featureOne: "Work",
      featureTwo: "In",
      featureThree: "Progress",
      mainImg: projectImgs.portfolioThree.main,
      secondaryImg: projectImgs.portfolio.secondary,
      id: uuidv4(),
      active: false,
      github: "",
    },
  ];
}

export default projectData;
