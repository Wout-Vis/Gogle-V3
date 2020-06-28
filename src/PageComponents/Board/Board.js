import React from "react";
import Cards from "./Cards";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Board() {
  return (
    <div style={{ margin: 40 }}>
      <h1 id="cardHeader">Board of Directors</h1>
      <Cards />
      <div id="meetTheBoard">
        <Card style={{ fontSize: 20 }}>
          <Card.Header>Meet a director</Card.Header>
          <Card.Body>
            <Card.Title>Davis Escudero</Card.Title>
            <Card.Text>
              To continue the Meet a director event, we would like to introduce
              you to this month's member: David Escudero. We know David as our
              Senior Vice President of the Gogle Science branch but he is much
              more than that! For example, David is what is known as a
              “trekkie”, a Star Trek fan. He is known around the office for his
              Star Trek mugs and his favourite character is Spock! David also
              has a dog named Chewie, quite a name for a Star Trek fan...
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div id="meetTheBoard">
        <Card style={{ fontSize: 20 }}>
          <Card.Header>Meet a director</Card.Header>
          <Card.Body>
            <Card.Title>Bassira Keita</Card.Title>
            <Card.Text>
              We are starting something new: "Meet a director". Behind all this
              amazing innovation one might be surprised that there are just
              regular people passionately steering the ship. Each with their own
              hobbies, quircks and lifestyles. That's why we want you to get a
              little glimps of who the team consists of. We will kick things off
              with introducing Barissa Keita. This wonderfull person is, next to
              being an amazing collegue, our Public Affairs Officer. She is
              driven and carreer focussed but never fails to make time for her
              other passion: sports! She plays tennis on a regular basis and
              golfs every now and then. She is also an avid cross-fitter, and
              always up for a friendly competition.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
