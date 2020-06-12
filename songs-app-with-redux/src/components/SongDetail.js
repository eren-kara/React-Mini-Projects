import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  render() {
    const { song } = this.props;
    return (
      song && (
        <div>
          <div>{song.title}</div>
          <div>{song.duration}</div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
