import React from "react";
import Login from "../../components/container_login/ContainerLogin";
import Title from "../../components/title/Title";
const LoginPage = () => {
  return (
    <div className="container">
      <div className="container__bcg-top"></div>
      <div className="container__bcg-bottom"></div>
      <Title />
      <Login myclass="container-login" buttonTxt="Login" route="/admi" />
    </div>
  );
};

export default LoginPage;
