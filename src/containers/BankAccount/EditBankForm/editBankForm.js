/*
 * Add/Edit Bank List
 */
import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { addBank } from 'api/bankApi';
import validRoutin from 'utils/validRoutin';
import * as yup from 'yup';
import messages from '../messages';

import RequiredStar from 'components/Form/RequiredStar/requiredStar';
import ErrorMessage from 'components/Form/ErrorMessage/errorMessage';

yup.addMethod(yup.string, 'isRounting', validRoutin);

const schema = yup.object().shape({
  rountingNumber: yup
    .string()
    .required('Rounting Number is required')
    .test('isRounting', 'Not a valid Rounting Number', validRoutin),
  accountNumber: yup
    .string()
    .required('Account Number is required')
    .min(4, 'Account Number is too short')
    .max(17, 'Account Number is long'),
  confirmAccountNumber: yup
    .string()
    .required('Account Number is required')
    .min(4, 'Account Number is too short')
    .max(17, 'Account Number is too long')
    .test('passwords-match', 'AccountNumber should match', function(value){
      return this.parent.accountNumber === value;
    }),
});

export default function EditBankAccount(props) {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    reset
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    criteriaMode: "firstErrorDetected",
    shouldFocusError: true,
    shouldUnregister: false,
  });

  const formElement = {
    rountinNumber: {
      type: "text",
      name: "rountingNumber",
      ref: register,
      isValid: formState.touched.rountingNumber && !errors.rountingNumber,
      isInvalid: formState.touched.rountingNumber && errors.rountingNumber,
    },
    accountNumber: {
      type: "text",
      name: "accountNumber",
      ref: register,
      isValid: formState.touched.accountNumber && !errors.accountNumber,
      isInvalid: formState.touched.accountNumber && errors.accountNumber,
    },
    confirmAccountNumber: {
      type: "text",
      name: "confirmAccountNumber",
      ref: register,
      isValid: formState.touched.confirmAccountNumber &&
      !errors.confirmAccountNumber,
      isInvalid: formState.touched.confirmAccountNumber &&
      errors.confirmAccountNumber,
    },
    accountTypeChecking: {
      inline: true,
      type: "radio",
      name: "accountType",
      ref: register,
      id: "accounttype-radio-checking",
      value: "checking",
      label: "Checking"
    },
    accountTypeSaving: {
      inline: true,
      type: "radio",
      name: "accountType",
      ref: register,
      id: "accounttype-radio-saving",
      value: "saving",
      label: "Saving"
    }
  }
 
  const {show} = props;
  useEffect(()=>{
    reset({
      rountinNumber: '',
      accountNumber: '',
      confirmAccountNumber: ''
    });
  },[show, reset]);

  const onSubmit = data => {
    console.log("Submitting:" + JSON.stringify(data));
    addBank(data).then(res => {
      props.reloadState();
      props.onHide();
    });
  };

  //console.log(formState);
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <FormattedMessage {...messages.addBankTitle}/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Row>
            <Col>
              <Form.Group controlId="rountingNumber">
                <Form.Label>
                  <FormattedMessage {...messages.rountingNumber} />
                  <RequiredStar />
                </Form.Label>
                <Form.Control {...formElement.rountinNumber}/>
                <ErrorMessage formEle="rountingNumber" errors={errors}/>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Form.Group controlId="accountNumber">
                <Form.Label>
                  <FormattedMessage {...messages.accountNumber} />
                  <RequiredStar />
                </Form.Label>
                <Form.Control {...formElement.accountNumber} />
                <ErrorMessage formEle="accountNumber"  errors={errors} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="confirmAccountNumber">
                <Form.Label>
                  <FormattedMessage {...messages.accountNumberConfirmation} />
                  <RequiredStar />
                </Form.Label>
                <Form.Control {...formElement.confirmAccountNumber}/>
                <ErrorMessage formEle="confirmAccountNumber"  errors={errors}/>
              </Form.Group>
            </Col>
          </Form.Row>
          
          <Form.Row>
            <Col>
              <Form.Check {...formElement.accountTypeChecking} defaultChecked />
              <Form.Check {...formElement.accountTypeSaving} />
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
