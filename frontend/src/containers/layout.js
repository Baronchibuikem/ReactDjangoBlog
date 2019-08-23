import React from "react";
import FullPageIntroWithFixedTransparentNavbar from "../components/Navbar";
import FooterPage from "../components/Footer";
import "mdbreact";
import BaseRouter from "../routes";
import { MDBContainer } from "mdbreact";

const CustomLayout = props => {
  return (
    <div>
      <FullPageIntroWithFixedTransparentNavbar />
      <MDBContainer>
        <BaseRouter />
      </MDBContainer>
      <FooterPage />
    </div>
  );
};

export default CustomLayout;
