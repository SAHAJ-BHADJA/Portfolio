import React, { useEffect } from "react";
import "./skills.css";
import { motion } from "framer-motion";
import "animate.css/animate.min.css";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-white text-white py-3 px-6 absolute shadow-white cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 2 }}
      style={{ backgroundColor: "rgb(79, 61, 153)" }}
    >
      {name}
    </motion.div>
  );
};

const MobileSkill = ({ name }) => {
  return (
    <motion.span
      className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:bg-blue-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.span>
  );
};

function Skills_page() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, inView]);

  return (
    <>
      <div className="main-Skills">
        <h2 className="headpart">
          <span style={{ color: "white" }}>My&nbsp;</span>
          <span style={{ color: "rgb(203, 172, 249)" }}>Skills</span>
        </h2>

        <div className="circle-part w-full h-screen flex items-center justify-center rounded-full">
          <motion.div
            className="flex items-center justify-center rounded-full font-semibold text-white p-8 shadow-white cursor-pointer"
            style={{ backgroundColor: "rgb(79, 61, 153)" }}
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>
          {/* Adjusted Positions */}
          <Skill name="Python" x="-10vw" y="-6vw" />
          <Skill name="JavaScript" x="-15vw" y="8vw" />
          <Skill name="TypeScript" x="18vw" y="2vw" />
          <Skill name="SQL" x="0vw" y="12vw" />
          <Skill name="HTML" x="-30vw" y="-4vw" />
          <Skill name="Java" x="11vw" y="-10vw" />
          <Skill name="VS Code" x="-10vw" y="16vw" />
          <Skill name="AWS (EC2, S3)" x="-25vw" y="14vw" />
          <Skill name="GCP" x="20vw" y="12vw" />
          <Skill name="Postman" x="-2vw" y="-14vw" />
          <Skill name="PyCharm" x="23vw" y="-10vw" />
          <Skill name="Docker" x="-20vw" y="-12vw" />
          <Skill name="Kubernetes" x="12vw" y="-18vw" />
          <Skill name="TensorFlow" x="37vw" y="6vw" />
          <Skill name="Flask" x="35vw" y="-8vw" />
          <Skill name="React.js" x="-35vw" y="-5vw" />
          <Skill name="Next.js" x="25vw" y="-6vw" />
          <Skill name="Django" x="-18vw" y="0vw" />
          <Skill name="GitHub" x="0vw" y="-20vw" />
          <Skill name="CUDA" x="-20vw" y="18vw" />
        </div>

        <div ref={ref} className="mobile-part">
          <div className="container mx-auto">
            <motion.main
              className="p-4"
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
            >
              <div className="block p-4">
                <h3 className="text-xl font-semibold mb-2">Languages:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Python",
                    "JavaScript",
                    "TypeScript",
                    "SQL",
                    "HTML",
                    "Java",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Developer Tools:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "VS Code",
                    "Eclipse",
                    "Google Cloud Platform",
                    "PyCharm",
                    "AWS (EC2, S3)",
                    "Postman",
                    "Jira",
                    "Docker",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">Frameworks:</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Flask",
                    "Django",
                    "React.js",
                    "Node.js",
                    "Next.js",
                    "TensorFlow",
                    "GitHub",
                    "Kubernetes",
                    "CUDA",
                  ].map((skill, index) => (
                    <MobileSkill key={index} name={skill} />
                  ))}
                </div>
              </div>
            </motion.main>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills_page;
