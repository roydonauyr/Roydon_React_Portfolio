import React from "react";
import "./Footer.css";
import {AiOutlineLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (<div>
    <footer>
      <a href="#" className='footer_logo'></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#competitions">Competitions</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/roydonauyr/"><AiOutlineLinkedin/></a>
        <a href="https://github.com/roydonauyr"><BsGithub/></a>
      </div>

    </footer>
  </div>);
};

export default Footer;
