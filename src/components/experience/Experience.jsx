import React from "react";
import "./Experience.css";

import { BsFiletypeHtml } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandAngular } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { BsFiletypeCss } from "react-icons/bs";

// For backend
import { GrMysql } from "react-icons/gr";
import { TbBrandMongodb } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <IoLogoJavascript className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandAngular className="experience_details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFiletypeHtml className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFiletypeCss className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <GrMysql className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandMongodb className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandPython className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaNodeJs className="experience_details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
