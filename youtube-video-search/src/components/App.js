import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/api";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

export default class App extends Component {
  state = { videos: [], selectedVideo: null };

  async componentDidMount() {
    this.onSearchSubmit("Bogazici University");
  }

  onSearchSubmit = async (term) => {
    let response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div style={{ marginTop: "20px" }} className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
