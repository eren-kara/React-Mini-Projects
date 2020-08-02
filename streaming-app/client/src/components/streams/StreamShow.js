import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStream } from "../../actions";

const StreamShow = (props) => {
  const { title, description } = props.stream;
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  });
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
