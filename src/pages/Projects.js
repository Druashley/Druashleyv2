import React, { useState } from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import ProjectList from "../components/Projects/ProjectList";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ProjectList />
      <ScrollTop />
    </motion.div>
  );
};

export default Home;
