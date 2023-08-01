import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { RxNotionLogo } from "react-icons/rx";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/roydonauyr/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/roydonauyr" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://humdrum-coil-3aa.notion.site/Personal-Dashboard-dd6da9201ed34caaaf401a11a43f2b98"
        target="_blank"
      >
        <RxNotionLogo />
      </a>
    </div>
  );
};

export default HeaderSocials;
