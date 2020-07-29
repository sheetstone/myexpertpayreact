/*
 * Add New Cases
 */
import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { Link } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap'

import { addCase, updateCase } from 'api/caseApi.js'
import { schema } from './caseValidation.js'

import SuccessModal from './SuccessModal/successModal'
import CaseInput from './CaseInput/caseInput'
import equal from 'deep-equal';



const AddNewCase = props => {
  const updateKey = props.location.state && props.location.state.key;
  const initalState = props.location.state && props.location.state.case;

  const { register, handleSubmit, errors, formState, reset } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    criteriaMode: 'firstErrorDetected',
    shouldFocusError: true,
    shouldUnregister: false
  });

  const caseNumber = {
    type: 'text',
    name: 'caseNumber',
    ref: register,
    placeholder: 'Case Number',
    isValid: formState.touched.caseNumber && !errors.caseNumber,
    isInvalid: formState.touched.caseNumber && errors.caseNumber,
    defaultValue: initalState && initalState.caseNumber,
    disabled: initalState && true,
    tooltip: {
      title: 'Case Number',
      content: <>
        You can find your case number from the back of your case card:
        <li>Case number start with 0-5 Char</li>
        <li>follow with a dash,</li>
        <li>follow with 4-10 numbers,</li>
        <li>and the length of entire case number is 11 characters or less.</li>
      </>
    }
  }

  const ncpName = {
    type: 'text',
    name: 'ncpName',
    ref: register,
    defaultValue: initalState && initalState.ncpName,
    placeholder: 'NCP Name',
  }

  const initalChildrenList = initalState ? initalState.children.map(child => {
    return {
      type: 'text',
      name: 'childname',
      ref: register,
      defaultValue: child,
      placeholder: 'Child Name',
    }
  }) : [{
    type: 'text',
    name: 'childname',
    ref: register,
    placeholder: 'Child Name',
  }]

  const [childrenName, setChildrenName] = useState(initalChildrenList);
  const [showSuccess, setShowSuccess] = useState(false);

  const addChildHandler = (e) => {
    setChildrenName(prevEle => {
      return prevEle.concat({
        type: 'text',
        name: 'childname',
        ref: register,
        placeholder: 'Child Name',
      });
    })
  };

  const removeChildHandler = (e, index) => {
    setChildrenName(prevEle => {
      if (prevEle.length === 1) {
        return prevEle;
      }
      prevEle.splice(index, 1);
      return [...prevEle];
    })
  }

  const formElementNode = () => {
    const formArray = [];
    formArray.push(<CaseInput objkey='caseNumber' value={caseNumber} errors={errors} key='caseNumber' />);
    formArray.push(<CaseInput objkey='ncpName' value={ncpName} errors={errors} key='ncpName' />)
    formArray.push(childrenName.map((item, i, arr) => {
      const kidId = `childName${i}`;
      return (
        <CaseInput objkey={kidId} isChild isTail={(arr.length - 1) === i} value={item} errors={errors} key={kidId} addChild={addChildHandler} removeChild={() => removeChildHandler(i)} />
      )
    }))

    return formArray;
  }

  const gotoCaseInfo = () => {
    props.history.push('/caseinfo');
  }

  const resetForm = () => {
    setChildrenName(initalChildrenList);
    reset({
      'caseNumber': '',
      'ncpName': '',
      'childName0': '',
      'childName': ''
    });
    setShowSuccess(false);
    console.log(formState);
  }

  const onSubmit = data => {
    const result = {};
    result.children = [];
    for (const [key, value] of Object.entries(data)) {
      if (key.includes('childName')) {
        result.children.push(value);
      } else {
        result[key] = value
      }
    }

    if (updateKey) {
      // Update Exist Case
      if (equal(result, initalState)) {
        console.log('no need update database');
        gotoCaseInfo()
      } else {
        updateCase(updateKey, result).then(res => {
          // TODO: add a modal to comfirmation
          gotoCaseInfo();
        })
      }
    } else {
      // Add new case
      addCase(result).then(res => {
        // console.log('Add successful',res);
        // TODO: add a modal to comfirmation
        setShowSuccess(true);
      });
    }
  }


  return (
    <>
      <Helmet>
        <title>Case Info - Add new case</title>
        <meta name='description' content='My Expertpay' />
      </Helmet>
      <Row>
        <Col xs={6}>
          <Form onSubmit={handleSubmit(onSubmit)}> 
            {formElementNode()}
            <Button variant='primary' type="submit">Save</Button>
            <Link to='/caseinfo'>
              <Button variant='link' type="button">Cancel</Button>
            </Link>
            <SuccessModal show={showSuccess} noed={gotoCaseInfo} yesed={resetForm} />
          </Form>
        </Col>
      </Row>

    </>
  )
}

export default AddNewCase
