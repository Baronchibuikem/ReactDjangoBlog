import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import CustomLayout from "./containers/layout";
import "mdbreact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout />
        </Router>
      </div>
    );
  }
}
export default App;
