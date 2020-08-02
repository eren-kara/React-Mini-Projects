import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);
  const actions = (
    <>
      <button
        onClick={() => props.deleteStream(props.match.params.id)}
        className="ui button negative"
      >
        Delete
      </button>
      <div onClick={() => history.push("/")} className="ui button">
        Cancel
      </div>
    </>
  );
  return (
    <div>
      StreamDelete
      <Modal
        header="Delete Stream"
        content={`Are you sure you want to delete ${props.stream.title}  stream?`}
        actions={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
