import React from "react";
import { motion, useScroll } from "framer-motion";
import "./WorkEx.css";

// Define the type for the LiIcon component props
interface LiIconProps {
  reference: React.RefObject<HTMLLIElement>;
}

const LiIcon: React.FC<LiIconProps> = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="line-circle absolute left-0 stroke-custom">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-red-600 stroke-2 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[5px] fill-red-300"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle cx="75" cy="50" r="10" className="fill-red-600 stroke-none" />
      </svg>
    </figure>
  );
};

export default LiIcon;
