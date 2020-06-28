import React, { Component } from "react";
import VideoThing from "./endVideo.mp4";

export default class video extends Component {
  render() {
    return (
      <div>
        <video width="100%" height="100%" controls>
          <source src={VideoThing} type="video/mp4" />
        </video>
      </div>
    );
  }
}
