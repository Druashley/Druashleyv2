import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import ContactForm from "./ContactForm";

const MainContactSection = () => {
  return (
    <StyledContact>
      <ContactForm />
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  color: #ccc;
  height: 65vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default MainContactSection;
