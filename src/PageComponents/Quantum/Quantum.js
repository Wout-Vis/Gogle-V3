import React from "react";

import quantum from "../../GFX/quantumBig.svg";

export default function Quantum() {
  return (
    <div>
      <div>
        <img alt="quantum PC" src={quantum} fluid />
      </div>
      <div class="container">
        <div className="row">
          <div className="col">
            <h1 id="quantumTitle">What is quantum computing?</h1>
          </div>
        </div>
        <div className="row" id="quantumText">
          <div className="col">
            <p>
              Instead of using on and off states, also known as 1's and 0's,
              quantum computing uses quantum-mechanical phenomena such as
              superposition and entanglement to perform computation. Computers
              that perform quantum computations are known as quantum computers.
              These offer vastly greater processing power than traditional
              computers. So much so that we can perform calculations that we not
              ought to be possible before this invention.{" "}
              <span class="yellowText">
                This allows us to calculate what will likely happen in an area
                given certain circumstances.
              </span>
              [1]
            </p>
          </div>

          <div className="col">
            <img
              alt="quantum computer"
              src="https://live.staticflickr.com/4788/40786969122_9a55880199_b.jpg"
              fluid
            />
          </div>
        </div>
      </div>
    </div>
  );
}
