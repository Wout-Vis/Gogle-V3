import React from "react";
import SlideShow from "./SlideShow";

import { Link } from "react-router-dom";
import { Image, Card, Button } from "react-bootstrap";
import pictureOne from "../../GFX/combine.svg";

export default function Homepage() {
  return (
    <div>
      <SlideShow />
      <div className="row" style={{ padding: 40 }}>
        <div className="col" id="quoteBox">
          <p id="quote">
            Our goal at Gogle is to contribute to the{" "}
            <span class="blueText">betterment of humanity</span>. Our advanced
            technologies provide<span class="redText"> revolutionary</span> new
            ways to manage and optimize. Let’s all work
            <span class="yellowText"> together</span> on a better{" "}
            <span class="greenText">tomorrow</span>.
          </p>
        </div>
      </div>
      <div className="row" id="everythingUnderQuote">
        <div className="col-md-7" id="containsMedia">
          <div class="embed-responsive embed-responsive-16by9 ">
            <iframe
              class="embed-responsive-item"
              src="https://drive.google.com/file/d/10k7eTDl4_ZWgvrj-f86IYWiAjEW9g-_t/preview"
              allowfullscreen="true"
            ></iframe>
          </div>
        </div>
        <div className="col-md-5">
          <p id="textPic1">
            Introducing our ground breaking new software stack.<br></br>
            <br></br>
            Combining the knowledge gained from products you love like Gogle
            Green, Gogle Gov, Gogle Stocks and Gogle Science, we are ready to
            simulate all of society. So that you can see which changes in your
            company will have what effect in the future.
          </p>
        </div>
      </div>
      <div className="row" id="everythingUnderQuote">
        <div className="col-md-6">
          <p id="textPic2">
            Project Odin is the culmination of the experience of all our
            branches. These individual branches perfected predicting their
            respective expertise, but with Odin everything is interconnected.
            Resulting in far more accurate predictions in any domain.
          </p>
        </div>
        <div className="col-md-6">
          <Image
            alt="Bootstrap Image Preview"
            id="homeImg"
            src={pictureOne}
            fluid
          />
        </div>
      </div>
      <div id="meetTheBoard" id="everythingUnderQuote">
        <Card style={{ fontSize: 20 }}>
          <Card.Header>Meet a director</Card.Header>
          <Card.Body>
            <Card.Title>David Escudero</Card.Title>
            <Card.Text>
              To continue the “Meet a director” event, we would like to
              introduce you to this month's member: David Escudero. We know
              David as our Senior Vice President of the Gogle Science branch but
              he is much more than that! For example, David is what is known as
              a “trekkie”, a Star Trek fan. He is known around the office for
              his Star Trek mugs and his favourite character is Spock! David
              also has a dog named Chewie, quite a name for a Star Trek fan...
            </Card.Text>
            <Button variant="primary" as={Link} to="/board">
              More about the Board
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
