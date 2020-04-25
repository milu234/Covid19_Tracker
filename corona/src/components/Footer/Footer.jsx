import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter   className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">           </h5>
            <p>
            <br></br>
            </p>
          </MDBCol>
          <MDBCol md="6">
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://coronatracker-1cf6e.web.app">Coronatracker.com</a>
        </MDBContainer>
      </div>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
        &nbsp; &nbsp; &nbsp; &nbsp;  Created by: <a href="https://linkedin.com/in/milan-hazra-767759130"><b>Milan Hazra</b></a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;