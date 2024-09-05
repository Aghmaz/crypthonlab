"use client";

import React, { useMemo } from "react";
import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";
import { languageLogos } from "@/assets/data/dummydata";

const LanguageSection = () => {
  // Memoizing the rendered icons to avoid unnecessary re-renders
  const renderedIcons = useMemo(
    () =>
      languageLogos.map((icon, index) => (
        <Motion
          key={`marquee-example-company-${index}`}
          initDeg={randomIntFromInterval(0, 360)}
          direction={Math.random() > 0.5 ? "clockwise" : "counterclockwise"}
          velocity={15}
          radius={100}
        >
          <div
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              background: "purple",
              width: "5rem",
              height: "5rem",
              borderRadius: "50%",
              padding: "1.2rem",
              willChange: "transform",
            }}
          >
            <img
              src={icon}
              alt="alternate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                willChange: "transform",
              }}
            />
          </div>
        </Motion>
      )),
    [languageLogos]
  );

  return (
    <div>
      <div
        style={{
          height: "100vh",
          paddingTop: "2%",
          paddingBottom: "2%",
          position: "relative",
          width: "100%",
        }}
      >
        <Marquee
          velocity={15}
          scatterRandomly
          minScale={0.8}
          resetAfterTries={200}
        >
          {renderedIcons}
        </Marquee>
      </div>
    </div>
  );
};

export default LanguageSection;
