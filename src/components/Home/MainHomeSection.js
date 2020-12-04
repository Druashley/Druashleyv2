import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { titleAnim, fade, container } from "../../animation";

const MainHomeSection = () => {
  return (
    <StyledAbout>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="about-text"
      >
        <motion.h2 variants={titleAnim}>
          Hello, I am <span>Drew Davidson</span>.
        </motion.h2>
        <motion.h2 variants={fade}>I'm a front-end web developer </motion.h2>
        <motion.h2 variants={fade}>
          specalized in <span>React</span>.
        </motion.h2>
        <motion.p variants={fade}>
          I can assist with your website needs.
        </motion.p>
        <motion.p variants={fade}>
          Let<span>'</span>s build something together.
        </motion.p>
        <Link to="contact">
          <motion.button variants={fade}>Contact</motion.button>
        </Link>
      </motion.div>
      <div className="about-img"></div>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  color: #ccc;
  padding: 2rem 10rem;
  h2 {
    font-size: 3rem;
  }
  p {
    padding: 1rem 0rem;
    font-size: 2rem;
  }
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
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
    padding: 2rem 2rem;
    text-align: center;
    h2 {
      font-size: 1.5rem;
    }
    p {
      padding: 0.5rem 0rem;
      font-size: 1.25rem;
    }
  }
`;

export default MainHomeSection;
