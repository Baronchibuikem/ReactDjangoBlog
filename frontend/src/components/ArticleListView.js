import React, { Component } from "react";
import axios from "axios";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn
} from "mdbreact";

class ArticleList extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/articles/").then(res => {
      this.setState({
        articles: res.data
      });
    });
  }

  render() {
    return (
      <MDBCol className="mb-1" style={{ minHeight: "100vh" }}>
        {this.state.articles.map((article, key) => (
          <MDBCard className="my-5 pb-1">
            <MDBCardBody>
              <MDBRow>
                <MDBCol lg="5" xl="4">
                  <MDBView
                    hover
                    className="rounded z-depth-1-half mb-lg-0 mb-4"
                  >
                    <img
                      key={article.slug}
                      className="img-fluid"
                      src={article.image}
                      alt=""
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>
                </MDBCol>
                <MDBCol lg="7" xl="8">
                  <h5 className="font-weight-bold mb-3 p-0">
                    <strong>{article.title.toUpperCase()}</strong>
                  </h5>
                  <p className="dark-grey-text">{article.body}</p>
                  <p>
                    by{" "}
                    <a href="#!" className="font-weight-bold">
                      {article.author.toUpperCase()}
                    </a>
                  </p>
                  <MDBBtn color="primary" size="md">
                    {
                      <a href={`/post/${article.id}`} className="text-light">
                        Read More
                      </a>
                    }
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
              <hr />
            </MDBCardBody>
          </MDBCard>
        ))}
      </MDBCol>
    );
  }
}
export default ArticleList;
