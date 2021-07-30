import React from "react";
import { Link } from "react-router-dom";

const Button = ({ btnClass, route, buttonTxt }) => {
  return (
    <div className="button">
      <Link to={route}>
        <div className={`button__${btnClass}`}>{buttonTxt}</div>
      </Link>
    </div>
  );
};

export default Button;
