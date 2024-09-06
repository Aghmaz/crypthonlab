import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import TagCloud from "TagCloud";
import WhyWork from "@/components/WhyWorkUs";
import Encryption from "@/components/encryption";
import ProcessSection from "./ProcessSection";
import Experience from "./Experience";
import ThreeD from "@/pages/threeD";
import styles from "../styles/HomeThree.module.scss";
import WhyChooseUsSection from "./whyChooseUS";
import Languages from "./languages";
import RunningText from "./RunningText";
import LanguageSection from "./LanguageSection";
import HeaderHero from "@/components/headerHero";
// import Home from "@/pages/threeD";

const Hero = () => {
  //   const textcontainer = ".tagcloud";
  //   const texts = [
  //     "Java",
  //     "kotlin",
  //     "python",
  //     "django",
  //     "rubby",
  //     "rails",
  //     "SASS",
  //     "React",
  //     "NodeJS",
  //     "Babel",
  //     "Jquery",
  //     "ES6",
  //     "Shopify",
  //     "Wordpress",
  //     "GIT",
  //     "GITHUB",
  //   ];

  //   const options = {
  //     radius: 200,
  //     maxSpeed: "normal",
  //     initSpeed: "normal",
  //     keep: true,
  //   };

  //   useEffect(() => {
  //     try {
  //       let tagcloudinstance = TagCloud(textcontainer, texts, options);
  //       return () => {
  //         tagcloudinstance.destroy();
  //       };
  //     } catch (error) {
  //       console.error("TagCloud initialization error:", error);
  //     }
  //   }, []);
  return (
    <>
      <HeaderHero />
      {/* <div className={styles.container}>
        <div className={styles.canvasContainer}>
          <ThreeD />
        </div>
      </div> */}
      <RunningText />
      <Languages />
      <WhyChooseUsSection />
      {/* <LanguageSection /> */}

      {/* <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title
              style={{ marginTop: "-4rem" }}
              title="The last digital agency you'll ever need"
            />
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Brand />
      <WhyWork />
      <Encryption />
      {/* <Expertise /> */}
      {/* <Banner /> */}
      <Testimonial />
      {/* <ShowCase /> */}
      <BlogCard />
      <Experience />
      <ProcessSection />
    </>
  );
};

export default Hero;
