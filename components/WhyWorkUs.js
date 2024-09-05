import React from "react";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const WhyWork = () => {
  const Data = [
    {
      num: "90%",
      text: "CLIENT RETENTION",
      class: "whywork-card card",
      numClass: "whywork-card-number",
    },
    {
      num: "70",
      numClass: "whywork-card-number",
      text: "DELIVERED PRODUCTS",
      class: "whywork-card whywork-card--orange card",
    },
    {
      num: "350",
      numClass: "whywork-card-number1",
      year: "/year",
      text: "NO. OF SPRINTS",
      class: "whywork-card",
    },
    {
      num: "63",
      numClass: "whywork-card-number",
      text: "SATISFIED CLIENTS",
      class: "whywork-card whywork-card--orange card",
    },
  ];

  return (
    <motion.section
      className="whywork-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div className="whywork-container">
        <motion.h1 className="title whywork-title ">Why Work With Us</motion.h1>
        <motion.div
          className="whywork-cards"
          variants={containerVariants}
        ></motion.div>
      </motion.div>
    </motion.section>
  );
};

export default WhyWork;
