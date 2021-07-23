import React from "react";
import Profil from "../../images/jpg/profil.jpg";
import { Link } from "react-router-dom";

const ContainerLogin = ({ myclass, buttonTxt, route }) => {
  return (
    <div className={myclass}>
      <div className={`${myclass}__image`}>
        <img src={Profil} alt="profil" />
      </div>
      <p>Glodi MBOKO</p>
      <Link to={route}>
        <div className={`${myclass}__button`}>{buttonTxt}</div>
      </Link>
    </div>
  );
};

export default ContainerLogin;
