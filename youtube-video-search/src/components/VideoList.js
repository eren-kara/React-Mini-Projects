import React, { Component } from "react";
import VideoCard from "./VideoCard";

export default class VideoList extends Component {
  render() {
    const { videos, onVideoSelect } = this.props;

    const renderVideos = videos.map((video) => {
      return (
        <VideoCard
          onVideoSelect={onVideoSelect}
          key={video.id.videoId}
          video={video}
        />
      );
    });

    return <div className="ui relaxed divided list">{renderVideos}</div>;
  }
}
