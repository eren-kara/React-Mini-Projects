import React from "react";

import StreamForm from "./StreamForm";
import { connect } from "react-redux";
import { createStream } from "../../actions";

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div>
      <h3>Create a Stream</h3>
      <StreamForm onSubmit={onSubmit} />
    </div>
  );
};

export default connect(null, {
  createStream,
})(StreamCreate);
