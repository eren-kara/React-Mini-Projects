import React, { Component } from "react";
import ImageCard from "./ImageCard";
import "./imageList.css";

export default class imageList extends Component {
  renderImages = () => {
    const images = this.props.images.map((image) => {
      return <ImageCard key={image.id} img={image} />;
    });
    return images;
  };
  render() {
    return <div className="image-list">{this.renderImages()}</div>;
  }
}
