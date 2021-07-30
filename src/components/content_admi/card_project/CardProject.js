import React from "react";
import Image from "../../../images/jpg/Capture d’écran du 2021-06-28 15-44-00.png";
import Button from "../../button/Button";
import Link from "../../../images/svg/link.svg";
import Github from "../../../images/svg/github.svg";
import LogoReact from "../../../images/svg/react.svg";
import Sass from "../../../images/svg/sass.svg";
import JavaScript from "../../../images/svg/javascript.svg";
const CardProject = () => {
  return (
    <div className="card-project">
      <div className="card-project__image">
        <div className="card-project__image__ombre"></div>
        <img src={Image} alt="ima" />
        <div className="btn-container">
          <Button
            btnClass="card"
            buttonTxt="UPDATE"
            route="/admi/all-projects"
          />
          <Button
            btnClass="card"
            buttonTxt="DELETE"
            route="/admi/all-projects"
          />
        </div>
      </div>
      <div className="card-project__detail">
        <div className="card-project__detail__link">
          <div className="card-label">LINKS</div>
          <div className="card-item">
            <a href="/admi/all-project">
              <img src={Link} alt="link" />
            </a>
            <a href="/admi/all-projects">
              <img src={Github} alt="github" />
            </a>
          </div>
        </div>
        <div className="card-project__detail__technologies">
          <div className="card-label">TECHNOLGIES </div>
          <div className="card-item">
            <a href="/admi/all-projects">
              <img src={LogoReact} alt="github" />
            </a>
            <a href="/admi/all-projects">
              <img src={Sass} alt="github" />
            </a>
            <a href="/admi/all-projects">
              <img src={JavaScript} alt="github" />
            </a>
          </div>
        </div>
        <div className="card-project__detail__description">
          <div className="card-item">
            <div className="card-label">DESCRIPTION</div>A site where you can
            search for favorite movies. The site uses the DBMOVIES API
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
