import React from "react";
import Profil from "../../images/jpg/profil.jpg";
import Button from "../button/Button";

const ContainerLogin = ({ myclass, route, buttonTxt }) => {
  return (
    <div className={myclass}>
      <div className={`${myclass}__image`}>
        <img src={Profil} alt="profil" />
      </div>
      <p>Glodi MBOKO</p>
      <Button btnClass={myclass} buttonTxt={buttonTxt} route={route} />
    </div>
  );
};

export default ContainerLogin;
