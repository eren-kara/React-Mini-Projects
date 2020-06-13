import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUsersAndPosts } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchUsersAndPosts();
  }

  renderList() {
    const { posts } = this.props;
    return posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned  icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <UserHeader id={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided relaxed list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchUsersAndPosts,
})(PostList);
