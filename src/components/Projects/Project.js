import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Project = ({ title, featureOne, featureTwo, featureThree, mainImg }) => {
  return (
    <StyledProject style={{ backgroundImage: mainImg }}>
      <div className="project-title">{title}</div>
      <div className="test-div">
        <img src={mainImg} alt={`${title} image`}></img>
        <ul>
          <li className="project-feature ">{featureOne}</li>
          <li className="project-feature ">{featureTwo}</li>
          <li className="project-feature ">{featureThree}</li>
        </ul>
      </div>
    </StyledProject>
  );
};

const StyledProject = styled(motion.div)`
  height: 350px;
  width: 350px;
  border: 2px solid #cf347c;
  border-radius: 1rem;
  box-shadow: 0px 0px 30px rgba(207, 52, 124, 0.479);
  color: #ccc;
  position: relative;
  cursor: pointer;
  &:hover {
    ul {
      opacity: 1;
    }
    img {
      opacity: 0.2;
    }
  }
  .project-title {
    font-size: 2rem;
    padding: 1rem 1rem;
    font-weight: bold;
  }
  .project-feature {
    font-size: 1.5rem;
  }
  ul {
    padding: 3rem;
    font-weight: bold;
    list-style-type: decimal;
    z-index: 2;
    position: absolute;
    top: 20%;
    opacity: 0;
  }
  img {
    width: 100%;
    object-fit: stretch;
    opacity: 1;
  }
`;

export default Project;
