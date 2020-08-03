import React from "react";
import { Helmet } from "react-helmet";
import { Row, Col, Button, Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  formSettings,
  payeeName,
  emailAddress,
  confirmEmail,
  phoneNum,
} from "./recipientForm.js";

export default function AddNewRecipient(props) {
  const { register, handleSubmit, errors, formState, reset } = useForm(
    formSettings
  );

  const initalSate = {};

  const onSubmit = (data) => {
    console.log("submitted");
  };

  const formElementNode = () => {
    const formArray = (
      <>
        <input {...payeeName(register, formState, initalSate, errors)} />
        <input {...emailAddress(register, formState, initalSate, errors)} />
        <input {...confirmEmail(register, formState, initalSate, errors)} />
        <input {...phoneNum(register, formState, initalSate, errors)} />
      </>
    );

    return formArray;
  };

  return (
    <>
      <Helmet>
        <title>Case Info - Add new Recipient</title>
        <meta a name="description" content="My Expertpay" />
      </Helmet>
      <h1>Add New Recipient</h1>
      <hr />

      <Row>
        <Col xs={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {formElementNode()}
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Link to="/recipients">
              <Button variant="link" type="button">
                Cancel
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
    </>
  );
}
