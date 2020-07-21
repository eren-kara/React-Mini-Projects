import React, { Component } from "react";
import "./videocard.scss";

export default class VideoCard extends Component {
  render() {
    const { video, onVideoSelect } = this.props;
    return (
      <div onClick={() => onVideoSelect(video)} className="video-item item">
        <img
          className="ui image"
          alt={"youtube video"}
          src={video.snippet.thumbnails.medium.url}
        />
        <div className="content">
          <span className="header">{video.snippet.title}</span>
        </div>
      </div>
    );
  }
}
