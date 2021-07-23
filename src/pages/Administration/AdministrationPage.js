import React from "react";
import ContainerLogin from "../../components/container_login/ContainerLogin";

const AdministrationPage = () => {
  return (
    <div className="container-admi">
      <ContainerLogin myclass="sing-out" buttonTxt="SING OUT" route="/" />
    </div>
  );
};

export default AdministrationPage;
