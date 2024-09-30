import { useRef, useEffect } from "react";
import "./WorkEx.css";
import { motion, useInView, useScroll, useAnimation } from "framer-motion";
import LiIcon from "./LiIcon";

// Define the type for the Details component props
interface DetailsProps {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details: React.FC<DetailsProps> = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}) => {
  const ref = useRef<HTMLLIElement>(null);

  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 capitalize"
          >
            <br />@{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-[rgb(226,226,182)]">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

// WorkEx component
const WorkEx: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <>
      <div className="main-exp" id="experience">
        <h1 className="font-bold text-8x1 w-full text-center">
          <span style={{ color: "white" }}>My&nbsp;</span>
          <span style={{ color: "rgb(203, 172, 249)" }}>Experience</span>
        </h1>
        <div ref={ref} className="exp-part w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="line-part absolute left-9 top-1 w-[4px] h-full bg-white origin-top"
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="Software Developer Enginerr"
              company="Aasma Technology Solutions"
              companyLink="https://aasmatech.com/"
              time="August 2023 - July 2024"
              address="Ahemdabad, Gujarat, India"
              work="In my tenure of Job I migrated and deployed cross-platform data-sharing software using a microservice approach, improving data flow and reducing manual entry. Optimized APIs and UX for low-bandwidth users, and implemented OOP patterns for efficient API integrations. Utilized AWS Glue and S3 for scalable data transformation and storage."
            />
            <Details
              position="Full Stack Develoepr Inter"
              company="Aasma Technology Solutions"
              companyLink="https://aasmatech.com/"
              time="May 2023 – August 2023"
              address="Ahmedabad, Gujarat, India"
              work="In my Summer Intern, I developed a resource management platform using the MERN stack with WebSockets for real-time updates and RESTful APIs. Employed microservices for modular integration and deployed an Azure SQL database, ensuring seamless performance. Optimized code in fast-paced environments, leveraging Google Analytics to reduce resource wastage and improve lead conversions."
            />
            <Details
              position="Web Developer Intern"
              company="LST Capitals"
              companyLink="https://lstcapital.in/"
              time="November 2022 - January 2023"
              address="Surat, Gujarat, India"
              work="During my internship as a web developer, my role was to develop a system architecture and facilitated clear communication between clients and the team, reducing design errors and improving project initiation. Streamlined project delivery by building a Flask API and integrating Firebase cloud systems for seamless compatibility across mobile and web platforms."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default WorkEx;
