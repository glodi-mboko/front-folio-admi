import React from "react";
import CardProject from "../card_project/CardProject";
import ListProjects from "../list_projects/ListProjects";
const AllProjects = () => {
  return (
    <div className="all-project">
      <div className="all-projects__display">
        <CardProject />
      </div>
      <ListProjects />
    </div>
  );
};
export default AllProjects;
