import React from "react";
import ContainerLogin from "../../components/container_login/ContainerLogin";
import Title from "../../components/title/Title";
const LoginPage = () => {
  return (
    <div className="container">
      <div className="container__bcg-top"></div>
      <div className="container__bcg-bottom"></div>
      <Title myclass="title-in-home" />
      <ContainerLogin
        myclass="login"
        buttonTxt="Login"
        route="/admi/all-projects"
      />
    </div>
  );
};

export default LoginPage;
