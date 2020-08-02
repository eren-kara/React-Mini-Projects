import React from "react";
import { Field, reduxForm } from "redux-form";

const StreamForm = (props) => {
  const renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {renderError(meta)}
      </div>
    );
  };

  const onFormSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <form onSubmit={props.handleSubmit(onFormSubmit)} className="ui form error">
      <Field name="title" component={renderInput} label="Title of stream" />
      <Field
        name="description"
        component={renderInput}
        label="Description of stream"
      />
      <button className="ui button primary">Submit</button>
    </form>
  );
};

const validate = (formValues) => {
  const error = {};

  if (!formValues.title) {
    error.title = "You need to enter a valid title!";
  }
  if (!formValues.description) {
    error.description = "You need to enter a valid descripition!";
  }

  return error;
};

export default reduxForm({
  form: "streamForm",
  validate,
})(StreamForm);
