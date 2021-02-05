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
        "This is my main website and a hub for everything I have created. The website is being hosted using nginx on a vultur server. I used React to make the project more responsive and app-like. This was my first project after getting back into front-end web development. I have redux setup for the backend in case I want to pass around data. I used Framer-Motion to apply animations to the website. This package has been great to work with. The more time I spend with it, the more I like it. Styled components are probably an overkill for a project this small. I used styled components because it is used a lot in the industry and I wanted to become familar with it. ",
    },
    {
      title: "PMI Soundboard",
      featureOne: "Tailwind CSS",
      featureTwo: "useSound Hook",
      featureThree: "Audacity",
      mainImg: projectImgs.portfolioTwo.main,
      secondaryImg: projectImgs.portfolioTwo.secondary,
      id: uuidv4(),
      active: false,
      github: "https://github.com/Druashley/PMI-Soundboard",
      url: "pmi-soundboard",
      description:
        "This a react app focused on my favorite online show called The Pat Mcafee Show. I have created a soundboard, featuring many clips for each personality on the show. I used Tailwind CSS for styling. Audacity is a program I used to clip sounds from the show. Getting the audio has been the most time consuming part of the project and I intend to add more as time goes. I found an NPM package called useSound to handle the audio clips. It is a wonderful package and I will use it again the future.",
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
