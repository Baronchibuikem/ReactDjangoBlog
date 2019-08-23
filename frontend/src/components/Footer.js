import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  const bgPink = { backgroundColor: "blue" };
  return (
    <MDBFooter style={bgPink} className="font-small pt-4 mt-4">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="8" className="text-center mx-auto">
            This web page is a letter to future me to help me remember where i
            started and make several references
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          Made with Love by <strong>Anozie Baron Chibuikem</strong>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
