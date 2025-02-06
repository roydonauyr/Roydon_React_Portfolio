import React, { useRef, useState } from "react";
import "./Competitions.css";

//Images
import CitibankCompetition from "../../assets/Citibank_Competition.png";
import VISA from "../../assets/VISA.png";
import Accenture from "../../assets/Accenture.png";
import ESG_Competition from "../../assets/ESG_Competition.png";
import DeepRacerAISingapore from "../../assets/DeepRacerAISingapore.jpg";

//Swipper imports
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


//competitions data

const data = [
  {
    competition_image: CitibankCompetition,
    title: "CitiHackOver 2022",
    date: "2022-04-31",
    position: "1st",
    github: "https://github.com/roydonauyr/Eternals",
    code: 1,
    description:
     "Wealth Buddy is an application built for CitiHackOver 2022 with the intention to positions Citi as the modern bank for wealth management solutions, to drive client acquisition and strengthen client relationships in the Asian market.",
  },
  {
    competition_image: VISA,
    title: "VISA Internal Hackathon",
    date: "2023-04-29",
    github: "",
    position: "1st",
    code: 0,
    description:
      "Combination of solutions on instagram to boost promoting of offers. These solutions include: Automatic Message Replies, Collaborative Filtering Recommender System, Automatic Posting Of Offers. It helps solve the issue of unclickable offers on instagram through workarounds. A popular workaround is Biolink and another would be a comment triggering the offer being send to the persons inbox automatically.",
  },
  {
    competition_image: Accenture,
    title: "Accenture Pitch Competition",
    date: "2021-04-29",
    github: "",
    position: "1st",
    code: 0,
    description:
      "Problem Statement was to create a solution that would reduce waste. To better target food wastage our solution was a bring your own food restaurant app. This app allows users to pre-order at the restaurant. The app would then display the necessary ingredients for the food and the user will have a choice on ingredients that they can bring to the restaurant. There is also a surprise option allowing the chef to cook something up for the users based on the ingredients that they bring.",
  },
  {
    competition_image: ESG_Competition,
    title: "Goldman ESG Competition",
    date: "2023-03-29",
    github: "https://github.com/roydonauyr/Goldman-Sach-ESG-Competition",
    position: "Finalist",
    code: 1,
    description:
      "We were tasked with designing a solution for ESG investing and transforming unstructured data into structured data for easier analysis/summarization. Using LDA and light gradient boosting we extracted ESG data from public sources and transformed unstructured data to well-curated data.",
  },
  {
    competition_image: DeepRacerAISingapore,
    title: "AI Singapore Deep Racer Dash",
    date: "2023-07-15",
    github: "",
    position: "3rd",
    code: 0,
    description:
      "Competed in AI Singapores Deep Racer race where we had to use reinforcement learning to train a robot car which will race around a race track. Shortest time wins.",
  },
];

const sortedData = data.slice().sort((a, b) => {
  // Sort by position in descending order
  const dateComparison = b.date.localeCompare(a.date);
  const positionComparison = b.position - a.position;
  
  // If the positions are different, return the position comparison result
  if (dateComparison !== 0) {
    return dateComparison;
  }

  // If the positions are the same, sort by date (id) in descending order
  return positionComparison;
});

const Competitions = () => {
  return (
    <section id="competitions">
      <h5>Competitions I Have Taken Part In</h5>
      <h2>Competitions</h2>

      <Swiper
        className="container competition_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {sortedData.map(({ competition_image, title, position, code, github, description}, index) => {
          return (
            <SwiperSlide key={index} className="competition">
              <div className="competition_image">
                <img src={competition_image} alt={title} />
              </div>
              <h5>{title}</h5>
              <h5> Position: {position}</h5>
              <small className="competition_description">{description}</small>
              <div className="competition_item-cta">
                <a href = {github} className={code === 0 ? "hide_button" : "btn"} target="_blank">
                  Github
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Competitions;
