import React, { useRef } from "react";
import "./Projects.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// Define the types for project items
interface ProjectItem {
  id: number;
  title: string;
  img: string;
  description: string;
}

const items: ProjectItem[] = [
  {
    id: 1,
    title: "HIMS",
    img: "/img/hims.png",
    description:
      "Gujarat State Hospital Management System for managing patient records, billing, scheduling appointments and other hospital management tasks.",
  },
  {
    id: 2,
    title: "FinNexus",
    img: "/img/FinNexus.png",
    description:
      "Personalized banking system for managing accounts, transactions of debit and credit cards, loans, and other banking tasks.",
  },
  {
    id: 3,
    title: "CPU Scheduler",
    img: "/img/CPU.png",
    description:
      "Operating System project for simulating CPU scheduling algorithms like FCFS, SJF, SRTF, RR, Priority and Multilevel Queue.",
  },
];

// Props type for Single component
interface SingleProps {
  item: ProjectItem;
}

const Single: React.FC<SingleProps> = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer">
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>View</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
