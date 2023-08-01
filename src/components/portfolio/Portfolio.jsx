import React from "react";
import "./Portfolio.css";
import se_project_carpark from "../../assets/SE_Project_Carpark_Companion.png";

//Data of projects
const data = [
  {
    id: 1,
    image: se_project_carpark,
    title: "NTU Software Engineering Project (Carpark Companion App)",
    github: "http://github.com",
    demo: "http://github.com",
  },
  {
    id: 2,
    image: se_project_carpark,
    title: "NTU Software Engineering Project (Carpark Companion App)",
    github: "http://github.com",
    demo: "http://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key = {id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
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
