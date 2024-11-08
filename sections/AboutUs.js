"use client";

import React from "react";
import { motion } from "framer-motion";
import { Image } from "antd";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.section
        className="aboutUsSection"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="textContent" variants={containerVariants}>
          <h2>About Us</h2>
          <h1>We Offer Expert Solutions</h1>
          <p>
            <strong>Crypthon Lab</strong>, established in <strong>2016</strong>,
            is a leading software house based in the{" "}
            <strong>USA, UK, and Pakistan</strong>. Leveraging technology and
            favorable currency rates, we are recognized as a top-ranked software
            house in the USA.
          </p>
          <p className="lightHeading">
            Registered with the
            <strong> USA Software Export Board (PSEB)</strong> in 2017.
          </p>
          <h2 className="highlightItem">Specialized in:</h2>
          <br />
          <div className="highlights">
            <div className="highlightItem">Enterprise applications</div>
            <div className="highlightItem">Cyber security</div>
            <div className="highlightItem">Big Data & Data engineering</div>
            <div className="highlightItem">Al/ML</div>
            <div className="highlightItem">Website Development & Design</div>
            <div className="highlightItem">Mobile App Development</div>
            <div className="highlightItem">
              Search Engine Optimization (SEO)
            </div>
            <div className="highlightItem">
              Digital & Social Media Marketing (SMM)
            </div>
          </div>
        </motion.div>

        <motion.div className="imageContent" variants={imageVariants}>
          <div className="imgDiv">
            <Image src="/about.png" alt="About Us" className="frontImag" />
          </div>
          <div className="experienceBadge">
            <h2>5+</h2>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <div className="whoWeAre">
            <hr />
            Who We Are
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default AboutUs;
