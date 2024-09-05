"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utilis/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="encryptionContainer">
      <div className="titleContainer">
        <motion.div variants={slideInFromTop} className="title">
          Performance
          <span className="gradientTexts"> & </span>
          Security
        </motion.div>
      </div>

      <div className="lockContainer">
        <div className="lockGroup">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="lockTop"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="lockMain"
          />
        </div>

        <div className="welcomeBox">
          <h1 className="welcomeText">Encryption</h1>
        </div>
      </div>
      <div className="subtitleContainer">
        <div className="locksubtitles">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="videoContainer">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="video"
          src="https://res.cloudinary.com/jobifycloud/video/upload/v1724617302/encryption_fkgase.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
