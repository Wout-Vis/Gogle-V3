import React from "react";

import Ericksen from "./Ericksen.JPG";

export default function Founder() {
  return (
    <div>
      <div class="container" id="founderContainer">
        <div className="row">
          <div className="col">
            <img
              alt="face of Nicklas Ericksen"
              src={Ericksen}
              class=" mx-auto d-block founderImg"
            />
          </div>
          <div classname="col" id="founderQuote">
            <div>
              <p>
                “From day one our goal at Gogle is to contribute to the
                betterment of humanity. We believe that our advanced
                technologies provide a revolutionary new way to manage finance,
                government, science, environment and more. Let’s all work
                together for a better tomorrow.”
              </p>
            </div>
          </div>
        </div>
        <div class="founderText">
          <h2>Nicklas Ericksen</h2>
          <h3>Founder and Ceo</h3>
          <p>
            <br></br>I was born on the 8th of January 1997 in{" "}
            <span class="blueText">Gothenburg, Sweden</span>. When I was 5 years
            old my parents decided to give me a GameCube as a present. This
            first interaction resulted in my fascination with Nintendo products.
            During high school, I really enjoyed my economics classes and with my
            own interest in everything technology, business & IT was the only
            logical option for me to study. When I was 18 I started studying
            business & IT at Chalmers. That’s where I first met my mentor and
            now good friend <span class="yellowText">Jungkook Ahn</span>. During
            my years at university Jungkook and I learned of our mutual interest
            in helping humanity via technology so that’s when we decided to
            combine our strengths (mine in business and his in electrical and
            mechanical engineering) and develop the next big step in 3D printing
            services. After my graduation, we started Gogle Print. This company
            became such a success that we decided to hire more people and
            started doing research on quantum computers since we believed that
            this would be the next big step in technology and that it could open
            lots of possibilities to help humanity. We also got our first
            inspiration for Mìmir.com and started working on that. The launch of
            Mìmir.com was a big step for us and that was the first time that we
            could see the impact of our work around the world. At the start of
            project Fafnir in 2026 I met{" "}
            <span class="blueText">Chad Bloomberg</span>, a brilliant economist.
            After being together for a few years we married and adopted our{" "}
            <span class="yellowText">two cats Jimmy and Monkey</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
