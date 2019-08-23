import React, { Component } from "react";
import axios from "axios";
import { MDBContainer, MDBCard, MDBCardBody } from "mdbreact";

class ArticleDetail extends Component {
  state = {
    article: {}
  };
  componentDidMount() {
    const slug = this.props.match.params.slug;
    axios.get(`http://127.0.0.1:8000/article/${slug}`).then(res => {
      this.setState({
        article: res.data
      });
    });
  }
  render() {
    const article = this.state.article;
    return (
      <MDBContainer className="container" style={{ minHeight: "100vh" }}>
        <MDBCard className="card mb-4 wow fadeIn">
          <img
            key={article.id}
            className="card-img-top"
            src={article.image}
            alt="Generic placeholder"
          />
          <MDBCardBody className="card-body">
            <p className="h5 my-4">{article.title} </p>
            <h6 className=" my-4">By {article.author}</h6>
            <p className="text-justify">{article.body}</p>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default ArticleDetail;
