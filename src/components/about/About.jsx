import React from "react";
import "./About.css";
import ProfilePic from "../../assets/ProfilePic.jpg";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";
import { TbAward } from "react-icons/tb";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ProfilePic} alt="Profile Picture" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <MdOutlineVolunteerActivism className="about_icon" />
              <h5>Experience</h5>
              <small>Internship and Volunteering</small>
            </article>
            <article className="about_card">
              <FaRegFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>Software engineering & Datascience projects</small>
            </article>
            <article className="about_card">
              <TbAward className="about_icon" />
              <h5>Competitions</h5>
              <small>Participated: 7, Wins: 4</small>
            </article>
          </div>

          <p>
            Welcome to the story of my life. You can read some of the chapters
            through the links above. I am a fresh graduate from NTU attaining 1st class Honours for 
            Business and Computer Science. Being an
            experimentalist who enjoys working with others, I aim to experiment
            and develop new products that would have a positive impact to
            society.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
