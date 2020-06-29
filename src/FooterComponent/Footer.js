import React from "react";
//import Container from "react-bootstrap/Container";

const FooterPage = () => {
  return (
    <div class="container bg-light text-secondary mw-100">
      <div class="row w-100 pl-4 pt-3">
        <div class="col-sm-6 ">
          <p>English</p>
        </div>
      </div>
      <div class="row pl-4 pb-2 pt-2">
        <div class="col ">
          <p>Contact</p>
        </div>
        <div class="col footerMiddle">
          <p>Terms</p>
        </div>
        <div class="col footerRight">
          <p>Privacy</p>
        </div>
        {/* <div class="col sm-8">
          <p></p>
        </div> */}
      </div>
    </div>
  );
};

export default FooterPage;
