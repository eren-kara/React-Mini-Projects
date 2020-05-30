import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  state = { pics: [] };

  onSearchSubmit = async (inputValue) => {
    const pics = await unsplash.get("/search/photos", {
      params: { query: inputValue },
    });

    this.setState({ pics: pics.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.pics} />
      </div>
    );
  }
}

export default App;
