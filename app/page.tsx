"use client";

import { useEffect } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Skills from "@/components/ui/Skills";
import WorkEx from "@/components/ui/WorkEx";
import SahajProj from "@/components/projects/Projects";

const Home = () => {
  useEffect(() => {
    // Add smooth scroll behavior when the component mounts
    document.documentElement.style.scrollBehavior = "smooth";

    // Cleanup the scroll behavior on component unmount if necessary
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <section id="about" style={{ scrollMarginTop: "100px" }}>
          <Hero />
        </section>
        <section id="grid">
          <Grid />
        </section>
        <section id="workex">
          <WorkEx />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="recentprojects">
          <RecentProjects />
        </section>
        <section id="approach">
          <Approach />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default Home;
