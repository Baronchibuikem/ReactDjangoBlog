import React from "react";
import { Route, Switch } from "react-router-dom";
import ArticleList from "./components/ArticleListView";
import ArticleDetail from "./components/ArticleDetailView";
import LandingPage from "./components/landingpage";

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/post" component={ArticleList} />
    <Route exact path="/post/:slug" component={ArticleDetail} />
  </Switch>
);
export default BaseRouter;
