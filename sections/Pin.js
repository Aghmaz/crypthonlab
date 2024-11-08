import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/PinContainer.module.scss";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={`${styles.pinContainer} ${styles.group} ${containerClassName}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={styles.perspective}
        style={{
          transform: "rotateX(70deg) translateZ(0deg)",
        }}
      >
        <div
          className={`${styles.transformContainer} ${styles.bgBlack}`}
          style={{
            transform: transform,
          }}
        >
          <div className={`${styles.pinPerspective} ${className}`}>
            {children}
          </div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

export const PinPerspective = ({ title, href }) => {
  return (
    <motion.div className={styles.pinPerspective}>
      <div className={styles.pinPerspectiveWrapper}>
        <div className={styles.linkContainer}>
          <Link href={href} legacyBehavior>
            <a target="_blank">
              <span>{title}</span>
            </a>
          </Link>
        </div>

        <div className={styles.perspectiveEffects}>
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 0 }}
            className={styles.motionCircle}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 2 }}
            className={styles.motionCircle}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
            animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
            transition={{ duration: 6, repeat: Infinity, delay: 4 }}
            className={styles.motionCircle}
          />
        </div>

        <>
          <motion.div className={styles.motionEffects} />
          <motion.div className={styles.motionEffects} />
          <motion.div
            className={`${styles.motionEffects} ${styles.blurred} ${styles.rounded}`}
          />
          <motion.div
            className={`${styles.motionEffects} ${styles.smallRounded}`}
          />
        </>
      </div>
    </motion.div>
  );
};
