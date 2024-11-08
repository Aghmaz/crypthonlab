import Head from "next/head";
import React from "react";
import styles from "@/styles/language.module.scss";
import { portfolioData } from "@/assets/data/dummydata";
import dynamic from "next/dynamic";

const PinContainer = dynamic(() => import("../sections/Pin"), { ssr: false });

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Crypthon Lab</title>
      </Head>{" "}
      <div className={styles.container}>
        <h1 className={styles.heading}>
          A small selection of{" "}
          <span style={{ color: "#0079dc" }}>recent projects</span>
        </h1>
        <div className={styles.projectsGrid}>
          {portfolioData.map((item) => (
            <div className={styles.projectContainer} key={item.id}>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <PinContainer title={item?.href} href={item?.href}>
                  <div className={styles.projectContent}>
                    <div style={{ backgroundColor: "#13162D" }}></div>
                    {item.img ? (
                      <img
                        src={item.img}
                        alt="cover"
                        className={styles.projectImage}
                      />
                    ) : (
                      <video
                        loop
                        muted
                        autoPlay
                        playsInline
                        preload="false"
                        className={styles.projectImage}
                        src={item.video}
                      />
                    )}
                  </div>

                  <h1 className={styles.projectTitle}>{item.title}</h1>

                  <p className={styles.projectDescription}>{item.des}</p>
                </PinContainer>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default portfolio;
