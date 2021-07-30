import React from "react";
import ContentHeadAdmi from "./ContentHeadAdmi";
import AllProjects from "./all_projects/AllProjects";
import NewProject from "./new_project/NewProject";
import Message from "./message/Message";
import Setting from "./setting/Setting";
import { Switch, Route } from "react-router-dom";

const ContentAdmiPage = () => {
  return (
    <div className="content-admi">
      <ContentHeadAdmi />
      <Switch>
        <Route exact path="/admi/all-projects" component={AllProjects} />
        <Route path="/admi/new-project" component={NewProject} />
        <Route path="/admi/messages" component={Message} />
        <Route path="/admi/setting" component={Setting} />
      </Switch>
    </div>
  );
};

export default ContentAdmiPage;
