import React, { Component } from "react";

export default class VideoDetails extends Component {
  render() {
    const { video } = this.props;
    if (!video) {
      return <div></div>;
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
      <div className="video-details">
        <div className="ui embed">
          <iframe title={"Youtube Video"} src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
}
