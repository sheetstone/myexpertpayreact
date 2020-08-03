import React from "react";

import classes from "./ErrorMessage.module.scss";

const ErrorMessage = (props) => (
  <div className={classes.Wrapper}>
    <div className={classes.ErrorIcon}></div>
    <h4>Something Went Wrong.</h4>
    <p>Possible error: {props.message}</p>
  </div>
);

export default ErrorMessage;
