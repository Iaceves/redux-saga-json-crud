import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";

const About = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <MDBTypography note noteColor="primary">
        Hey guys, this is a crud application done with the help of react js. we
        have use Redux-Saga to preform all crud operations in this application.
        In this applicstion we have also routing facility as well. We have use
        MDBBootrap 5 to build the component like Table, Form, Navbar, Button etc
        in this React applicatio.
      </MDBTypography>
    </div>
  );
};

export default About;
