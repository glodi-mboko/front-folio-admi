import React from "react";
import Search from "../../images/svg/search.svg";
import { NavLink } from "react-router-dom";
const ContentHeadAdmi = () => {
  return (
    <div className="content-admi__head">
      <div className="label-link">
        <NavLink activeClassName="active" to="/admi/all-projects">
          ALL PROJECTS
        </NavLink>
      </div>
      <div className="label-link">
        <NavLink to="/admi/new-project">NEW PROJECT</NavLink>
      </div>
      <div className="label-link">
        <NavLink to="/admi/messages">MESSAGES</NavLink>
        <div className="label-link__msg-number">5</div>
      </div>
      <div className="label-link">
        <NavLink to="/admi/setting">SETTING</NavLink>
      </div>
      <div className="search-zone">
        <img src={Search} alt="search" />
        <input type="text" placeholder="" />
      </div>
    </div>
  );
};

export default ContentHeadAdmi;
