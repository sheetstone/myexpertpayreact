import React from "react";
import { Form } from "react-bootstrap";

import FormValidationError from "components/Form/formValidationError/formValidationError";

import classes from "../addNewRecipient.module.scss";

const RecipientInput = React.forwardRef((props, ref) => {
  return (
    <Form.Group controlId={props.name}>
      <Form.Control {...props} ref={ref} />
      <FormValidationError formEle={props.name} errors={props.errors} />
    </Form.Group>
  );
});

export default RecipientInput;
