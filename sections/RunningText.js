"use client";

import React from "react";
import Marquee from "react-marquee-slider";

const RunningText = () => {
  return (
    <div
      style={{
        height: "2rem",
        overflow: "hidden",
        // backgroundColor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Marquee velocity={22} minScale={0.9}>
        <span style={{ fontSize: "1rem", letterSpacing: "3px" }}>
          Click The <strong>"Book an Appointement" </strong> button now to get
          services from
          <strong> Crypthon Lab</strong>, and Save both{" "}
          <strong>Time & Money</strong>,
        </span>
        <span></span>
      </Marquee>
    </div>
  );
};

export default RunningText;
