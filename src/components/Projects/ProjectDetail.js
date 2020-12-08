import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory, Link } from "react-router-dom";
import ProjectData from "./ProjectData";
import gitHub from "../../img/GitHub-Mark-32px.png";

const ProjectDetail = ({}) => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projectDetail, setProjectDetail] = useState(null);
  const [allProjectsDetails, setAllProjectDetails] = useState(ProjectData());

  useEffect(() => {
    const currentProject = allProjectsDetails.filter(
      (stateProject) => `/projects/${stateProject.url}` === url
    );
    setProjectDetail(currentProject[0]);
  }, [url, allProjectsDetails]);

  return (
    <>
      {projectDetail && (
        <StyledProjectDetail>
          <div className="title-container">
            <h2>{projectDetail.title}</h2>

            <Link to="/projects">Back to all projects</Link>
          </div>
          <p>{projectDetail.description}</p>
          <div className="feature-container">
            <a href={projectDetail.github} target="_blank">
              <img src={gitHub} alt="Github Link" />
            </a>
            <h3>{projectDetail.featureOne}</h3>
            <h3>{projectDetail.featureTwo}</h3>
            <h3>{projectDetail.featureThree}</h3>
          </div>
          <div className="img-container">
            <img
              src={projectDetail.secondaryImg}
              alt={projectDetail.secondaryImg}
            ></img>
          </div>
        </StyledProjectDetail>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const StyledProjectDetail = styled(motion.div)`
  width: 100%;
  border-radius: 1rem;
  padding: 2rem 10rem;
  background: white;
  position: absolute;

  img {
    width: 100%;
  }

  h3 {
    color: #222222;
  }

  .feature-container {
    img {
      width: 2rem;
      cursor: pointer;
    }
  }
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #222222;
    a {
      text-decoration: none;
      cursor: pointer;
      font-size: 2rem;
      color: #222222;
    }
  }
`;

export default ProjectDetail;
