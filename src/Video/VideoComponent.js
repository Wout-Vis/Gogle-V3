import React, { Component } from "react";
import VideoThing from "./endVideo.mp4";
import Progress from "../Progress";

export default class VideoComponent extends Component {

  componentDidMount()
  {
    document.getElementById('endVideo').addEventListener('ended', () => Progress.updateProgress("6"), false);
  }

  render() {
    return (
      <div>
        <video id="endVideo" width="100%" height="100%" controls>
          <source src={VideoThing} type="video/mp4" />
        </video>
      </div>
    );
  }
}
