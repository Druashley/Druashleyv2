import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Project from "./Project";
import projectData from "./ProjectData";

const ProjectList = () => {
  const [projects, setProjects] = useState(projectData());

  return (
    <div className="project-container">
      <StyledProjectList className="projects">
        {projects
          ? projects.map((project) => (
              <Project
                title={project.title}
                featureOne={project.featureOne}
                featureTwo={project.featureTwo}
                featureThree={project.featureThree}
                mainImg={project.mainImg}
                key={project.id}
                id={project.id}
                projects={projects}
                url={project.url}
              />
            ))
          : ""}
      </StyledProjectList>
    </div>
  );
};

const StyledProjectList = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  padding: 10rem 15rem;

  @media (max-width: 1300px) {
    align-items: center;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    padding: 2rem;
  }

  @media (max-width: 700px) {
    align-items: center;
  }
`;

export default ProjectList;
