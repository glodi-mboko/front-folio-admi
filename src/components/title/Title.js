import React from "react";
import monitor from "../../images/svg/monitor.svg";

const Title = () => {
  return (
    <div className="title">
      <img src={monitor} alt="monitor" />
      <h1>
        Portfolio<span className="modify-color">Admi</span>
      </h1>
    </div>
  );
};

export default Title;
