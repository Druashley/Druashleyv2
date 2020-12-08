import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory, Link } from "react-router-dom";
import ProjectData from "./ProjectData";
import gitHub from "../../img/GitHub-Mark-32px.png";

const ProjectDetail = () => {
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
          <div className="feature-title">
            <a href={projectDetail.github} target="_blank" rel="noreferrer">
              Features & Github <img src={gitHub} alt="Github Link"></img>
            </a>
            <div className="feature-container">
              <h3>{projectDetail.featureOne}</h3>
              <h3>{projectDetail.featureTwo}</h3>
              <h3>{projectDetail.featureThree}</h3>
            </div>
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

const StyledProjectDetail = styled(motion.div)`
  width: 100%;
  padding: 2rem 10rem;
  background: white;
  position: absolute;

  img {
    margin-top: 3rem;
    width: 100%;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform 0.25s ease;
  }

  h3 {
    color: #222222;
  }

  p {
    color: black;
    line-height: 2.5rem;
    padding: 1rem 2rem;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #222222;
  }
  .feature-title {
    display: block;
    border: 2px solid black;
    justify-content: space-between;
    padding: 1rem 3rem;

    img {
      margin-top: 0rem;
      box-shadow: none;
      width: 1.5rem;
      cursor: pointer;
    }
    img:hover {
      -webkit-transform: scale(1.25);
      transform: scale(1.25);
    }
  }
  .feature-container {
    display: flex;
    justify-content: flex-end;
    width: 100%;

    h3 {
      font-weight: lighter;
      padding: 0rem 2rem;
    }
  }
  .title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #222222;
    a {
      font-size: 2rem;
    }
  }

  @media (max-width: 1300px) {
    align-items: center;
  }

  @media (max-width: 700px) {
    padding: 1rem 2rem;
    img {
      padding: 0rem;
      width: 100%;
    }

    img:active {
      -webkit-transform: scale(2);
      transform: scale(2);
    }

    p {
      padding: 0rem;
      font-size: 1rem;
    }

    .feature-container {
      margin: 1rem 0rem;
      display: flex;
      flex-direction: column-reverse;

      h3 {
        font-size: 1rem;
      }
    }
    .title-container {
      display: inline-block;
      text-align: left;
      a {
        font-size: 1.5rem;
        display: block;
        text-decoration: underline;
        text-align: right;
        margin: 1rem 0rem;
      }
    }
  }
`;

export default ProjectDetail;
