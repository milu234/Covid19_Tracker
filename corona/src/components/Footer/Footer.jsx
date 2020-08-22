
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="indigo" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Covid-19 Tracker</h5>
            <p>
            Covid-19 Tracker is a small webapp made for the visualizations of the Global and Country wise cases of Corona Virus and India Specific cases of Corona virus.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/milu234/Covid19_Tracker">Source Code</a>
              </li>
              <li className="list-unstyled">
                <a href="https://covid19.mathdro.id/api">Global API</a>
              </li>
              <li className="list-unstyled">
                <a href="https://cors-anywhere.herokuapp.com/https://api.covid19india.org/data.json">State API</a>
              </li>
              <li className="list-unstyled">
                <a href="https://linkedin.com/in/milan-hazra-767759130">LinkedIn</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://linkedin.com/in/milan-hazra-767759130">Milan Hazra</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;








// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';


// const FooterPage = () => {
//   return (
//     <MDBFooter   className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">           </h5>
//             <p>
//             <br></br>
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
            
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright: <a href="https://linkedin.com/in/milan-hazra-767759130">Milan Hazra</a>
//         </MDBContainer>
//       </div>

//     </MDBFooter>
//   );
// }

// export default FooterPage;