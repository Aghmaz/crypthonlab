import { teamdata } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import { motion } from "framer-motion";

const Team = () => {
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
        className="agency bg-top"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container">
          <div className="heading-title">
            <TitleSm title="MEET OUR TEAM" /> <br />
            <br />
            <Title
              title="A team of smart & passionate creatives"
              className="title-bg"
            />
          </div>
          <motion.div className="grid-2 py" variants={containerVariants}>
            {teamdata.map((item) => (
              <motion.div key={item.id} variants={cardVariants}>
                <Card data={item} caption={item.post} path="team" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Team;
