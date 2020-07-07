/*
 * Add New Cases
 */
import React from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'

import { Container, Row, Col, Button, Form } from 'react-bootstrap'

import RequiredStar from 'components/Form/RequiredStar/requiredStar'
import ErrorMessage from 'components/Form/ErrorMessage/errorMessage'
import validCaseNumber from 'utils/validCaseNumber'
import classes from './addNewCase.module.scss'

yup.addMethod(yup.string, 'isCaseNumber', validCaseNumber)

const schema = yup.object().shape({
  caseNumber: yup
    .string()
    .required('Rounting Number is required')
    .min(6, 'Case Number is too short')
    .max(13, 'Case Number is too long')
    .test('isCaseNumber', 'Not a valid Case Number', validCaseNumber),
  ncpName: yup.string(),
  childName: yup.string()
})

const AddNewCase = props => {
  const { register, handleSubmit, errors, formState, reset } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    criteriaMode: 'firstErrorDetected',
    shouldFocusError: true,
    shouldUnregister: false
  })

  const formElement = {
    caseNumber: {
      type: 'text',
      name: 'caseNumber',
      ref: register,
      placeholder: 'Case Number',
      isValid: formState.touched.caseNumber && !errors.caseNumber,
      isInvalid: formState.touched.caseNumber && errors.caseNumber
    },
    ncpName: {
      type: 'text',
      name: 'ncpname',
      ref: register,
      placeholder: 'NCP Name',
      isValid: formState.touched.ncpName && !errors.ncpName,
      isInvalid: formState.touched.ncpName && errors.ncpName
    },
    childName: {
      type: 'text',
      name: 'childName',
      ref: register,
      placeholder: 'Child Name',
      isValid: formState.touched.childName && !errors.childName,
      isInvalid: formState.touched.childName && errors.childName
    }
  }

  return (
    <>
      <Helmet>
        <title>Case Info - Add new case</title>
        <meta name='description' content='My Expertpay' />
      </Helmet>
      <Row>
        <Col>
          <Form.Group controlId='caseNumber'>
            <Form.Control {...formElement.caseNumber} />
            <ErrorMessage formEle='caseNumber' errors={errors} />
          </Form.Group>
          <Form.Group controlId='ncpName'>
            <Form.Control {...formElement.ncpName} />
            <ErrorMessage formEle='ncpName' errors={errors} />
          </Form.Group>

          <Form.Group controlId='childName'>
            <Form.Control {...formElement.childName} />
            <ErrorMessage formEle='childName' errors={errors} />
          </Form.Group>
        </Col>
        <Col>
          <Button variant='primary'>Save</Button>
          <Button variant='link'>Cancel</Button>
        </Col>
      </Row>
    </>
  )
}

export default AddNewCase
