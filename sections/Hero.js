import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/AboutUs";
import Testimonial from "@/components/Testimonial";
import { BlogCard, Brand } from "@/components/router";
import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import WhyWork from "@/components/WhyWorkUs";
import Encryption from "@/components/encryption";
import ProcessSection from "./ProcessSection";
import Experience from "./Experience";
import WhyChooseUsSection from "./whyChooseUS";
import Languages from "./languages";
import RunningText from "./RunningText";
import LanguageSection from "./LanguageSection";
import HeaderHero from "@/components/headerHero";

const Hero = () => {
  return (
    <>
      <HeaderHero />
      <RunningText />
      <Languages />
      <WhyChooseUsSection />
      {/* <LanguageSection /> */}

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
