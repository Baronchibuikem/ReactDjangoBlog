import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBIcon,
  MDBBreadcrumb,
  MDBBreadcrumbItem
} from "mdbreact";
import { Link } from "react-router-dom";

class FixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    const bgPink = { backgroundColor: "blue" };
    const link = { padding: "20px", color: "white" };
    return (
      <div>
        <header>
          <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
            <MDBNavbarBrand href="/">
              <strong>BARONicle</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left>
                <MDBNavItem>
                  <Link style={link} to="#">
                    <MDBIcon fab icon="facebook-f" />
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link style={link} to="#">
                    <MDBIcon fab icon="twitter" />
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link style={link} to="#">
                    <MDBIcon fab icon="instagram" />
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <Link style={link} to="/">
                    Home
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link style={link} to="/post">
                    Blog
                  </Link>
                </MDBNavItem>
                <MDBNavItem>
                  <Link style={link} to="/projects">
                    Projects
                  </Link>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <MDBContainer className="mt-3 pt-5">
            <MDBBreadcrumb>
              <MDBBreadcrumbItem>
                <Link to="/">Home</Link>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>
                <Link to="/post">Blog</Link>
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBContainer>
        </header>
      </div>
    );
  }
}

export default FixedNavbarExample;
