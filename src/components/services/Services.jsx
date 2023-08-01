import React from "react";
import "./Services.css";

import { MdOutlineVolunteerActivism } from "react-icons/md";

const Services = () => {
  return (
    <section id="services">
      <h5>Community Service Activities</h5>
      <h2>Most Recent</h2>

      <div className="container service_container">
        {/* CIP 1 */}
        <article className="service">
          <div className="service_head">
            <h3>2023: Citi Para Swimming performance</h3>
          </div>

          <ul className="service_list">
            <li>
              <MdOutlineVolunteerActivism className="service_list-icon" />
              <p>Performed Music for participants of para swimming series</p>
            </li>
            <li>
              <MdOutlineVolunteerActivism className="service_list-icon" />
              <p>
                Interact with the athletes and learned about their struggles
              </p>
            </li>
          </ul>
        </article>
        {/* CIP 2 */}
        <article className="service">
          <div className="service_head">
            <h3>2022: PPIS Volunteering</h3>
          </div>

          <ul className="service_list">
            <li>
              <MdOutlineVolunteerActivism className="service_list-icon" />
              <p>
                Educated less priviledged children on Science through exciting
                activities
              </p>
            </li>
            <li>
              <MdOutlineVolunteerActivism className="service_list-icon" />
              <p>
                Introduced the concept of recycling to the children through arts
                and craft
              </p>
            </li>
            <li>
              <MdOutlineVolunteerActivism className="service_list-icon" />
              <p>
                Shared studying experiences and important values to the children
              </p>
            </li>
          </ul>
        </article>
        {/* CIP 3*/}
        <article className="service">
          <div className="service_head">
            <h3>2021: Bingo Session at PCS</h3>
          </div>

          <ul className="service_list">
            <li>
              <MdOutlineVolunteerActivism className="service_list-icon" />
              <p>Interacted with the elderly who stays in the old folks home</p>
            </li>
            <li>
              <MdOutlineVolunteerActivism className="service_list-icon" />
              <p>
                Provided company by playing games and listening to their
                stories.
              </p>
            </li>
            <li>
              <MdOutlineVolunteerActivism className="service_list-icon" />
              <p>Facilated activities and sourced equipment and prizes</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
