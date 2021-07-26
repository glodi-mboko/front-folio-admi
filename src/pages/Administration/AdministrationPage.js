import React from "react";
import ContainerLogin from "../../components/container_login/ContainerLogin";
import ContentAdmiPage from "../../components/content_admi/ContentAdmiPage";
import Title from "../../components/title/Title";

const AdministrationPage = () => {
  return (
    <div className="container-admi">
      <div className="container-admi__header">
        <Title myclass="title-in-admi" />
        <ContainerLogin myclass="sign-out" buttonTxt="SIGN OUT" route="/" />
      </div>
      <ContentAdmiPage />
    </div>
  );
};

export default AdministrationPage;
