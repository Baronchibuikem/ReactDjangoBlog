import React, { Component, Fragment } from "react";
import Axios from "axios";
// import BaseRouter from "./routes";
import { BrowserRouter, Route } from "react-router-dom";
// import "antd/dist/antd.css";
// import CustomLayout from "./containers/layout";
import axios from "axios";
import Navbar from "./containers/Navbar.js";
import MostVisited from "./containers/MostVisited.js";
import MainLayout from "./containers/MainLayout.js";
import Footer from "./containers/Footer.js";
import SinglePost from "./containers/SinglePost.js";
import TagFilter from "./components/MainLayout/TagFilter.js";

class App extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    Axios.get("http://127.0.0.1:8000/articles/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <MostVisited data={this.state.articles} />
          <Route
            exact={true}
            path=""
            render={() => <MainLayout data={this.state.posts} />}
          />
          <Route exact={true} path="/article/:slug" component={SinglePost} />
          <Route exact={true} path="/tag-filter/:tag" component={TagFilter} />

          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}
export default App;
