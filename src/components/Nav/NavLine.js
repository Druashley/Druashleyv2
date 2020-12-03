import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// This is the animation setup for the Nav Bar Line.
// pathname is based on uselocation when the link is clicked in the nav bar.
// routename is string that is passed down to compare it against.
// when the routename and pathname match the style is applied.

const Line = ({ pathname, routename }) => {
  return (
    <StyledLine
      transition={{ duration: 0.5 }}
      initial={{ width: "0%" }}
      animate={pathname === routename ? { width: "35%" } : { width: "0" }}
    />
  );
};

const StyledLine = styled(motion.div)`
  background: #cf347c;
  height: 0.2rem;
  width: 0%;
  position: absolute;
  bottom: -20%;
`;

export default Line;
