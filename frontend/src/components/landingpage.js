import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto", minHeight: "100vh" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={"/img.js"} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | React | Python | Django</p>
              <div className="social-links">
                {/* Linkedin*/}
                <a
                  href="http://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* github*/}
                <a
                  href="http://github.com/baronchibuikem"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Twitter */}
                <a
                  href="http://twitter.com/awesomebaron"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                {/* email */}
                <a
                  href="http://gmail.com/baronchibuike"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
