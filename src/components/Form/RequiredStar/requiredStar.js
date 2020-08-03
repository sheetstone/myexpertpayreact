import React from "react";
import classes from "./requiredstar.module.scss";

const RequiredStar = () => (
  <span className={classes.required} aria-label="required">
    &nbsp; *{" "}
  </span>
);

export default RequiredStar;
