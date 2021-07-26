import React from "react";
import Search from "../../images/svg/search.svg";
const ContentHeadAdmi = () => {
  return (
    <div className="content-admi__head">
      <div className="label-link">ALL PROJECTS</div>
      <div className="label-link">NEW PROJECT</div>
      <div className="label-link">
        MESSAGES <div className="label-link__msg-number">5</div>
      </div>
      <div className="label-link">SETTING</div>
      <div className="search-zone">
        <img src={Search} alt="search" />
        <input type="text" placeholder="" />
      </div>
    </div>
  );
};

export default ContentHeadAdmi;
