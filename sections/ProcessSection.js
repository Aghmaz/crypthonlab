"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const ProcessSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="processSection"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.div variants={itemVariants} className="whoWeAre">
        <hr />
        projects in steps
      </motion.div>

      <motion.div className="crypthonanimation2" variants={itemVariants}>
        <motion.h2>HOW WE WORK</motion.h2>
      </motion.div>

      <motion.div className="processSectiontitle" variants={itemVariants}>
        <motion.h1>Our Process For Delivering Results</motion.h1>
      </motion.div>

      <div className="steps">
        <motion.div className="step1" variants={itemVariants}>
          <h3>01.</h3>
          <span>Make An Appointment</span>
        </motion.div>

        <motion.div className="step2" variants={itemVariants}>
          <h3>02.</h3>
          <span>Meet Our Team</span>
        </motion.div>

        <motion.div className="step3" variants={itemVariants}>
          <h3>03.</h3>
          <span>Get Consultation</span>
        </motion.div>

        <motion.div className="step4" variants={itemVariants}>
          <h3>04.</h3>
          <span>Start Project</span>
        </motion.div>
        <motion.div variants={itemVariants}>
          <div className="connector"></div>
        </motion.div>
      </div>

      <div className="contactButton">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link href="/contact">Contact Now</Link>
        </motion.button>
      </div>
    </motion.section>
  );
};

export default ProcessSection;
