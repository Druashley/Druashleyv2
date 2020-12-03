import React from "react";
import { motion } from "framer-motion";
import MainContactSection from "../components/Contact/MainContactSection";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <MainContactSection />
      <ScrollTop />
    </motion.div>
  );
};

export default Contact;
