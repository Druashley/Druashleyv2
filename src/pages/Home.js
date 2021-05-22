import React from "react";
import { motion } from "framer-motion";
import MainHomeSection from "../components/Home/MainHomeSection.js";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MainHomeSection />

      <ScrollTop />
    </motion.div>
  );
};

export default Home;
