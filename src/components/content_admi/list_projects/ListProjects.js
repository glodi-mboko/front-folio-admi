import React from "react";
import { NavLink } from "react-router-dom";
const ListProjects = () => {
  return (
    <ul className="list-projects">
      <li className="item">
        <NavLink activeClassName="active" to="/admi/all-project">
          MES AMIS ROBOT
        </NavLink>
      </li>
      <li className="item">
        <NavLink to="/admi/all-projects">WAPIFILM</NavLink>
      </li>
      <li className="item">
        <NavLink to="/admi/all-project">PORTFOLIO</NavLink>
      </li>
      <li className="item">
        <NavLink to="/admi/all-project">FORMULAIRE CSS</NavLink>
      </li>
      <li className="item">
        <NavLink to="/admi/all-project">CARNET DE CONTACT</NavLink>
      </li>
      <li className="item">
        <NavLink to="/admi/all-project">HISTOIRE D'INTERNET</NavLink>
      </li>
      <li className="item">
        <NavLink to="/admi/all-project">BACK OFFICE PORTFOLIO</NavLink>
      </li>
    </ul>
  );
};

export default ListProjects;
