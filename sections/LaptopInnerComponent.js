import React, { useEffect } from "react";
import styles from "../styles/HomeThree.module.scss";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
  },
];

export default function LaptopInnerComponent() {
  return (
    <div className={styles.exampleContainer}>
      <div className={styles.featuresGrid}>
        {features.map((feature) => (
          <div key={feature.name} className={styles.featureItem}>
            <feature.icon className={styles.featureIcon} />
            <h2>{feature.name}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
