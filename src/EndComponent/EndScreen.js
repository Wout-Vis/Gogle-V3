import React from "react";
import Progress from "../Progress";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function EndScreen() {
  function reset() {
    Progress.updateProgress("0");
  }

  return (
    <div>
      <div id="endBox">
        <h1>The End</h1>
        <div id="introTextBox">by Double Quantum Quartet</div>
        <br />
        <Button href="./" id="resetButton" onClick={() => reset()}>
          Reset Experience
        </Button>
      </div>
    </div>
  );
}
