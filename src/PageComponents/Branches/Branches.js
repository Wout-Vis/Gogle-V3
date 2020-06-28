import React from "react";
import logoGreen from "../../GFX/branch_icon_Green.svg";
import logoScience from "../../GFX/branch_icon_Science.svg";
import logoStocks from "../../GFX/branch_icon_Stocks.svg";
import logoGov from "../../GFX/branch_icon_Gov.svg";

export default function Branches() {
  return (
    <div class="container" id="branchesContainer">
      <div className="row">
        <div className="col">
          <img alt="logo gogle green" src={logoGreen} fluid />
        </div>
        <div className="col">
          <img alt="logo gogle science" src={logoScience} fluid />
        </div>
        <div className="col">
          <img alt="logo gogle stocks" src={logoStocks} fluid />
        </div>
        <div className="col">
          <img alt="logo gogle gov" src={logoGov} fluid />
        </div>
      </div>

      <div class="row">
        <div class="col">
          “Gogle Green: for the betterment of society” is the slogan we used
          when we launched this branch. After 20 years we still stand by that.
          Gogle Green is involved in over 160 projects around the world where we
          provide funding and our technical expertise to change the climate for
          the better.
        </div>
        <div class="col">
          Gogle Science is the cutting edge of innovation in health, artificial
          intelligence, mechanical engineering and chemical engineering. Our
          quantum computers provide the key processing power to stay ahead of
          the competition and strive for the cutting edge.
        </div>
        <div class="col">
          Gogle Stocks is a service that can elevate your trades to new heights.
          Using state-of-the-art quantum technologies we simulate the stock
          market and predict market behaviour.
        </div>
        <div class="col">
          Gogle Gov is our government-oriented branch. Using advanced quantum
          prediction and simulation technologies we provide governments around
          the world with information on the improvement of infrastructure,
          disaster prevention and law enforcement.{" "}
        </div>
      </div>
      <div class="row">
        <div class="col" id="ourTechnologies">
          <h1 id="ourTechnologiesTitle"> Our technologies: </h1>“From day one
          our goal at Gogle is to contribute to the betterment of humanity”
          (Nicklas Ericksen, Founder & CEO), this quote entails what our
          branches are for: the betterment of humanity. By providing our
          services to both the private and public sectors we believe we achieved
          just that.
        </div>
      </div>
    </div>
  );
}

// export default function Products() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <img> alt="logo gogle green" src={logoGreen} fluid </img>;
//         </Col>

//         <Col>
//           <img alt="logo gogle science" src={logoScience} fluid />;
//         </Col>
//         <Col>
//           <img alt="logo gogle stocks" src={logoStocks} fluid />;
//         </Col>
//         <Col>
//           <img alt="logo gogle gov" src={logoGov} fluid />;
//         </Col>
//       </Row>
//     </Container>
//   );
// }
