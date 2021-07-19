import React from "react";
import Profil from "../../images/jpg/profil.jpg";

const ContainerLogin = () => {
  return (
    <div className="container-login">
      <div className="container-login__image">
        <img src={Profil} alt="profil" />
      </div>
      <p>GLODI MBOKO</p>
      <div className="container-login__button">Login</div>
    </div>
  );
};

export default ContainerLogin;
