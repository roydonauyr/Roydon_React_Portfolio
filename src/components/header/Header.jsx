import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

//Assets
import ProfilePic from "../../assets/ProfilePic.jpg";
import light2 from "../../assets/light2.jpg";

const Header = () => {
  return (
    <header>
      <h2 className="name">Au Yew Rong Roydon</h2>
      <div className="container header_container">
        <h1>Welcome To My World</h1>
        <h2>In this website you can find a description of my experimental development and some of my best projects</h2>
        <CTA />
        <HeaderSocials />

        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
