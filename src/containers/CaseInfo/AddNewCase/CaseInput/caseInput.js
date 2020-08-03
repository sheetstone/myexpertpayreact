import React from "react";
import { Form } from "react-bootstrap";

import FormValidationError from "components/Form/formValidationError/formValidationError";
import Popoverbox from "components/UI/popover/Popover";
import classes from "../addNewCase.module.scss";

const CaseInput = ({
  objkey,
  value,
  errors,
  addChild,
  removeChild,
  isTail,
  isChild,
}) => {
  if (isChild) {
    return (
      <Form.Group
        controlId={objkey}
        className={isTail ? classes.indentTail : classes.indent}
      >
        <Form.Control {...value} name={objkey} />
        <button
          onClick={addChild}
          className={classes.addBtn}
          title="Add child"
          type="button"
        ></button>
        <button
          onClick={removeChild}
          className={classes.removeBtn}
          title="Delete"
          type="button"
        ></button>
        <FormValidationError formEle={objkey} errors={errors} />
      </Form.Group>
    );
  }
  return (
    <Form.Group controlId={objkey}>
      <Form.Control {...value} />
      <FormValidationError formEle={objkey} errors={errors} />
      {value.tooltip && !value.isValid ? (
        <Popoverbox tooltip={value.tooltip} isValid={value.isValid} />
      ) : null}
    </Form.Group>
  );
};

export default CaseInput;
