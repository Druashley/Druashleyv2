import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { titleAnim, fade, container } from "../../animation";
import code from "../../img/code.svg";

const MainHomeSection = () => {
  return (
    <StyledAbout>
      <StyledDetails
        variants={container}
        initial="hidden"
        animate="show"
        className="about-text"
      >
        <motion.h1 variants={titleAnim}>
          Hello, I am <span>Drew Davidson</span>.
        </motion.h1>
        <motion.h2 variants={fade}>I'm a front-end web developer </motion.h2>
        <motion.h2 variants={fade}>
          specalized in <span>React</span>.
        </motion.h2>
        <motion.p variants={fade}>
          I can assist with your website needs.
        </motion.p>
        <motion.p id="123" variants={fade}>
          Let<span>'</span>s build something together.
        </motion.p>
        <Link to="contact">
          <motion.button variants={fade}>Contact</motion.button>
        </Link>
      </StyledDetails>
      <div className="about-img">
        <img src={code} alt="code"></img>
      </div>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  color: #ccc;
  padding: 5rem 10rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  p {
    padding: 1rem 0rem;
    font-size: 2rem;
  }
  img {
    width: 85%;
  }
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    align-items: center;
    img {
      width: 70%;
      padding-top: 2rem;
    }
    h2 {
      font-size: 2.3rem;
    }
    p {
      padding: 0.75rem 0rem;
      font-size: 1.75rem;
    }
  }

  @media (max-width: 700px) {
    display: block;
    padding: 1rem 2rem;
    text-align: center;
    img {
      width: 70%;
      padding-top: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    p {
      padding: 0.5rem 0rem;
      font-size: 1.5rem;
    }
  }
`;

const StyledDetails = styled(motion.div)`
  padding-top: 5rem;
`;

export default MainHomeSection;
