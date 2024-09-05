import React from "react";
import dynamic from "next/dynamic";
import Example from "../components/Example";
import styles from "../styles/Home.module.scss";

const Model = dynamic(() => import("../components/Modal"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.canvasContainer}>
        <Model />
      </div>
    </div>
  );
}
