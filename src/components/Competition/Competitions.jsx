import React, { useRef, useState } from "react";
import "./Competitions.css";
import CitibankCompetition from "../../assets/Citibank_Competition.png";

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
    title: "CitiHackOver",
    date: 2022,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisciitaque rem laudantium repellat, vel nisi quam cumque fuga suntvoluptates dolores, veritatis nihil hic minus quia culpa magni?Quos, illum.",
  },
  {
    competition_image: CitibankCompetition,
    title: "Test",
    date: 2022,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisciitaque rem laudantium repellat, vel nisi quam cumque fuga suntvoluptates dolores, veritatis nihil hic minus quia culpa magni?Quos, illum.",
  }
];

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
        {data.map(({ competition_image, title, date, description }, index) => {
          return (
            <SwiperSlide key={index} className="competition">
              <div className="competition_image">
                <img src={competition_image} alt={title} />
              </div>
              <h5>{title}</h5>
              <small className="competition_description">{description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Competitions;
