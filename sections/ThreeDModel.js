"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TagCloud from "TagCloud";
import ThreeD from "@/pages/threeD";
import styles from "../styles/HomeThree.module.scss";
import { Title, TitleSm } from "@/components/common/Title";

const ThreeDModel = () => {
  const textcontainer = ".tagcloud";
  const texts = [
    "Java",
    "kotlin",
    "python",
    "django",
    "rubby",
    "rails",
    "SASS",
    "React",
    "NodeJS",
    "Babel",
    "Jquery",
    "ES6",
    "Shopify",
    "Wordpress",
    "GIT",
    "GITHUB",
  ];
  const [radius, setRadius] = useState(200);
  const getRadiusBasedOnScreenSize = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      console.log(screenWidth, "screenWidth");
      if (screenWidth > 1280) {
        return 300;
      } else {
        return 200;
      }
    }
    return 200;
  };
  const options = {
    radius: getRadiusBasedOnScreenSize(),
    maxSpeed: "normal",
    initSpeed: "normal",
    keep: true,
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newRadius = getRadiusBasedOnScreenSize();
      setRadius(newRadius);

      const options = {
        radius: newRadius,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
      try {
        let tagcloudinstance = TagCloud(textcontainer, texts, options);
        return () => {
          tagcloudinstance.destroy();
        };
      } catch (error) {
        console.error("TagCloud initialization error:", error);
      }
    }
  }, []);
  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <motion.section
        className="3DContainer bg-top"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="heading-title">
            <TitleSm title="3D Model" /> <br />
            <br />
            <Title
              title="Innovative Software Solutions in 3D"
              className="title-bg"
            />
          </div>
        </div>
        <div className="main">
          <div className="text-sphere">
            <span className="tagcloud"> </span>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.canvasContainer}>
            <ThreeD />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ThreeDModel;
