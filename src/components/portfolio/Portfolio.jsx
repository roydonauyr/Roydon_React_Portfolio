import React from "react";
import "./Portfolio.css";

//images
import se_project_carpark from "../../assets/SE_Project_Carpark_Companion.png";
import databaseProject from "../../assets/DatabaseProject.png"
import ProjectCarity from "../../assets/ProjectCarity.png"
import ElderCare from "../../assets/ElderCare.png"
import AnalyticsProject1 from "../../assets/AnalyticsProject1.png"
import FYP from "../../assets/FYP.jpg"

//Data of projects
const data = [
  {
    id: "2024-12-31",
    image: FYP,
    title: "Final Year Project",
    description: "Developed a generative ai mobile application that would serve as a companion for mute individuals to assist them in their conversations with a normal speaker",
    github: "https://github.com/roydonauyr/FYP_Final",
  },
  {
    id: "2023-03-31",
    image: ElderCare,
    title: "NTU Software Engineering Project 2 (ElderCare)",
    description: "Elder Care is an web application built for NTU CZ3002 course with the intention to provide elderly with personal care solution with technology to allow them to age and recover gracefully.",
    github: "https://github.com/roydonauyr/CZ3002-Elder-Care",
  },
  {
    id: "2023-03-30",
    image: se_project_carpark,
    title: "NTU Software Engineering Project (Carpark Companion App)",
    description: "Carpark Companion is an application which aims to help users find the suitable carparks based on their needs.",
    github: "https://github.com/roydonauyr/CarparkCompanion",
  },
  {
    id: "2023-03-29",
    image: databaseProject,
    title: "Advanced Database Project",
    description: "The aim of this project is to implement a B+ Tree in C++ which supports searching (both search query and range queries), insertion and deletion operations.",
    github: "https://github.com/roydonauyr/NTU_Past_Projects/tree/main/Database%20and%20Queries",
  },
  {
    id: "2023-04-30",
    image: ProjectCarity,
    title: "Advanced Analytics Project (Project Carity)",
    description: "This application aims to prevent the inaccurate assessment of Length of Stay (LOS) in South African Hospitals. The app helps with the timely discharge of patients.",
    github: "https://github.com/roydonauyr/PROJECT-BC2407-Advanced-Analytics",
  },
  {
    id: "2021-04-30",
    image: AnalyticsProject1,
    title: "GDP and GDP growth Estimator",
    description: "This report studies environmental factors, primarily renewable energy, and their relationship with two variables – GDP per capita, and GDP per capita growth",
    github: "https://github.com/roydonauyr/-Analytics-Renewable-Energy-impacts-GDP",
  },
];

const sortedData = data.slice().sort((a, b) => b.id.localeCompare(a.id));

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {sortedData.map(({ id, image, title, description, github}) => {
          return (
            <article key = {id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} className="portfolio_image"/>
              </div>
              <h3>{title}</h3>
              <h4>{description}</h4>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
