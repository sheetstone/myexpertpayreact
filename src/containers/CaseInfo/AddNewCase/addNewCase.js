/*
 * Add New Cases
 */
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'

import { Row, Col, Button, Form } from 'react-bootstrap'

import ErrorMessage from 'components/Form/ErrorMessage/errorMessage'
import validCaseNumber from 'utils/validCaseNumber'
import classes from './addNewCase.module.scss'

yup.addMethod(yup.string, 'isCaseNumber', validCaseNumber)

const schema = yup.object().shape({
  caseNumber: yup
    .string()
    .required('Case Number is required')
    .min(6, 'Case Number is too short')
    .max(13, 'Case Number is too long')
    .test('isCaseNumber', 'Not a valid Case Number', validCaseNumber),
  ncpName: yup.string(),
  childName: yup.string()
})

const CaseInput = ({objkey, value, errors, addChild, removeChild}) => {
  if (objkey === 'childName'){
    return (
      <Form.Group controlId={objkey} className={classes.indent}>
        <Form.Control {...value} />
        <button onClick={addChild}>+</button>
        <button onClick={removeChild}>-</button>
        <ErrorMessage formEle={objkey} errors={errors} />
      </Form.Group>
    )
  }
  return ( 
  <Form.Group controlId={objkey}>
    <Form.Control {...value} />
    <ErrorMessage formEle={objkey} errors={errors} />
  </Form.Group>
  )
}

const AddNewCase = props => {
  const { register, handleSubmit, errors, formState, reset } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    criteriaMode: 'firstErrorDetected',
    shouldFocusError: true,
    shouldUnregister: false
  })

  const [ formElement, setFormElement ] = useState({
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
      name: 'ncpName',
      ref: register,
      placeholder: 'NCP Name',
    }, 
    childName: [{
      type: 'text',
      name: 'childname',
      ref: register,
      placeholder: 'Child Name',
    }]
  });

  const addChildHandler = (e) => {
    setFormElement(prevEle => {
      const children = prevEle.childName;
      children.push({
        type: 'text',
        name: 'childname',
        ref: register,
        placeholder: 'Child Name',
      });
      prevEle.childName = children;
      return {...prevEle};
    })
  };

  const removeChildHandler = (e, index) => {
    setFormElement(prevEle => {
      const children = prevEle.childName;
      if(children.length === 1){
        return {...prevEle};
      }
      children.splice(index, 1);
      prevEle.childName = children;
      return {...prevEle};
    })
  }

  const formElementNode = () => {
    console.log("in addNew Case:formElementNode", formElement)
    if (formElement === undefined) return null;
    const formArray = [];
    for (const [objkey, value] of Object.entries(formElement)) {
      if (objkey === 'childName'){
        formArray.push(value.map((item, i)=>(
          <CaseInput objkey={objkey} value={item} errors={errors} key={objkey+i} addChild={addChildHandler} removeChild={()=>removeChildHandler(i)}/>
        )))
      }else{
        formArray.push(
          <CaseInput objkey={objkey} value={value} errors={errors} key={objkey} />
        )
      }
    }
    return formArray;
  }



  return (
    <>
      <Helmet>
        <title>Case Info - Add new case</title>
        <meta name='description' content='My Expertpay' />
      </Helmet>
      <Row>
        <Col xs={6}>
          {formElementNode()}
          <Button variant='primary' onClick={handleSubmit}>Save</Button>
          <Button variant='link'>Cancel</Button>
        </Col>
      </Row>
    </>
  )
}

export default AddNewCase
