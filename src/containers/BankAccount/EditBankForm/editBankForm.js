/*
 * Add/Edit Bank List
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { addBank } from 'api/bankApi';
import validRoutin from 'utils/validRoutin';
import * as yup from 'yup';
import messages from '../messages';

import classes from './editBankForm.module.scss';

yup.addMethod(yup.string, 'isRounting', validRoutin);

const schema = yup.object().shape({
  rountingNumber: yup
    .string()
    .required('Rounting Number is required')
    .test('is-Rounting', 'Not a valid Rounting Number', validRoutin),
  accountNumber: yup
    .string()
    .required('Account Number is required')
    .min(4, 'Account Number is invalid')
    .max(17, 'Account Number is invalid'),
  confirmAccountNumber: yup
    .string()
    .required('Account Number is required')
    .min(4, 'Account Number is invalid')
    .max(17, 'Account Number is invalid'),
});

export default function EditBankAccount(props) {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    triggerValidation,
  } = useForm({
    mode: 'onBlur',
    validationSchema: schema,
  });

  const onSubmit = async data => {
    await triggerValidation();
    console.log("Submitting:" + JSON.stringify(data));
    const newdata = await addBank(data);
    props.reloadState();
    props.onHide();
  };

  //console.log(JSON.stringify(formState));
  //console.log(props);

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage {...messages.addBankTitle} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Col>
              <Form.Group controlId="rountingNumber">
                <Form.Label>
                  <FormattedMessage {...messages.rountingNumber} />
                  &nbsp;
                  <span className={classes.required} aria-label="required">
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="rountingNumber"
                  ref={register}
                  isValid={
                    formState.touched.rountingNumber && !errors.rountingNumber
                  }
                  isInvalid={
                    formState.touched.rountingNumber && errors.rountingNumber
                  }
                />
                {errors.rountingNumber && (
                  <Form.Control.Feedback type="invalid">
                    {errors.rountingNumber.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="accountNumber">
                <Form.Label>
                  <FormattedMessage {...messages.accountNumber} />
                  &nbsp;
                  <span className={classes.required} aria-label="required">
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="accountNumber"
                  ref={register}
                  isValid={
                    formState.touched.accountNumber && !errors.accountNumber
                  }
                  isInvalid={
                    formState.touched.accountNumber && errors.accountNumber
                  }
                />
                {errors.accountNumber && (
                  <Form.Control.Feedback type="invalid">
                    {errors.accountNumber.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="confirmAccountNumber">
                <Form.Label>
                  <FormattedMessage {...messages.accountNumberConfirmation} />
                  &nbsp;
                  <span className={classes.required} aria-label="required">
                    *
                  </span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="confirmAccountNumber"
                  ref={register}
                  isValid={
                    formState.touched.confirmAccountNumber &&
                    !errors.confirmAccountNumber
                  }
                  isInvalid={
                    formState.touched.confirmAccountNumber &&
                    errors.confirmAccountNumber
                  }
                />
                {errors.confirmAccountNumber && (
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmAccountNumber.message}
                  </Form.Control.Feedback>
                )}
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Check
                inline
                label="Checking"
                type="radio"
                id="inline-radio-1"
                name="accountType"
                defaultChecked
                value="checking"
                ref={register}
              />
              <Form.Check
                inline
                label="Saving"
                type="radio"
                id="inline-radio-2"
                name="accountType"
                value="saving"
                ref={register}
              />
            </Col>
          </Form.Row>
          <hr />
          <p>
            <FormattedMessage {...messages.addBankMessage} />
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="primary" type="submit" name="submit">
            <FormattedMessage {...messages.addBankSubmit} />
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
