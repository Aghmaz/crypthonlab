"use client";
import React, { useEffect } from "react";
import styles from "@/styles/language.module.scss";
import { projects } from "@/assets/data/dummydata";
import { PinContainer } from "./Pin";
const Languages = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        A small selection of{" "}
        <span style={{ color: "purple" }}>recent projects</span>
      </h1>
      <div className={styles.projectsGrid}>
        {projects.map((item) => (
          <div className={styles.projectContainer} key={item.id}>
            <PinContainer
              title="www.crypthonlab.com"
              href="https://www.crypthonlab.com/"
            >
              <div className={styles.projectContent}>
                <div style={{ backgroundColor: "#13162D" }}></div>
                <img
                  src={item.img}
                  alt="cover"
                  className={styles.projectImage}
                />
              </div>

              <h1 className={styles.projectTitle}>{item.title}</h1>

              <p className={styles.projectDescription}>{item.des}</p>

              {/* <div className={styles.liveSite}>
                <p>Check Live Site</p>
              </div>  */}
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;

{
  /* <FaLocationArrow className="ms-3" color="#CBACF9" /> */
}
