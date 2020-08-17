import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col, Button, Form } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { getCases } from 'api/caseApi.js'
import { addRecepient } from 'api/recipentApi.js'
import { useForm } from 'react-hook-form'
import LoadingIndicator from 'components/UI/LoadingIndicator/LoadingIndicator'
import SuccessModal from 'components/UI/SuccessModal/successModal'
import RecipientInput from './RecipientInput/recipientInput'

import { formSettings, formCreator } from './recipientForm.js'

import classes from "./addNewRecipient.module.scss";

export default function AddNewRecipient (props) {
  const { register, handleSubmit, errors, formState, reset } = useForm(
    formSettings
  )
  const [cases, setCases] = useState([])
  const [selectedCaseKey, setSelectedCaseKey] = useState(0)
  const [receipentName, setReceipentName] = useState('')
  const [emailAddr, setEmailAddr] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    //TODO: move caselist into store
    getCases()
      .then(res => {
        setCases(res)
        setIsLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const initalState = {}

  const onSubmit = data => {
    data['linkedCase'] = selectedCaseKey
    data['active'] = false

    addRecepient(data).then(res => {
      // console.log('Add successful',res);
      // TODO: add a modal to comfirmation
      setShowSuccess(true)
    })
  }

  const { payeeName, emailAddress, confirmEmail, phoneNum } = formCreator(
    register,
    formState,
    initalState,
    errors
  )

  const formElementNode = () => {
    const formArray = (
      <>
        <RecipientInput
          {...payeeName}
          value={receipentName}
          onChange={e => {
            setReceipentName(e.target.value)
          }}
        />
        <RecipientInput
          {...emailAddress}
          value={emailAddr}
          onChange={e => {
            setEmailAddr(e.target.value)
          }}
        />
        <RecipientInput {...confirmEmail} />
        <RecipientInput {...phoneNum} />
      </>
    )

    return formArray
  }

  const caseSelectionChanged = e => {
    const selectedKey = e.target.value
    if (selectedKey === '0') {
      setReceipentName('')
      setSelectedCaseKey(0)
    } else {
      setReceipentName(cases[selectedKey].ncpName)
      setSelectedCaseKey(e.target.value)
    }
  }

  const caseSelectionDropdown = () => {
    if (cases === undefined) return null
    let optionList = []
    optionList.push(
      <option value='0' key='0'>
        Select a case to link with this receiptent
      </option>
    )
    for (const [key, val] of Object.entries(cases)) {
      optionList.push(
        <option value={key} key={key}>
          {val.caseNumber} - {val.ncpName} - {val.children.join(', ')}
        </option>
      )
    }

    return (
      <Form.Group onChange={caseSelectionChanged} value={selectedCaseKey}>
        <Form.Label>Link with case (optional)</Form.Label>
        <Form.Control as='select'>{optionList}</Form.Control>
      </Form.Group>
    )
  }

  const gotoRecipList = () => {
    props.history.push('/recipients')
  }

  const resetForm = () => {
    setReceipentName('')
    reset({
      payeeName: '',
      emailAddress: '',
      confirmEmail: '',
      phoneNum: ''
    })
    setShowSuccess(false)
  }

  return (
    <>
      <Helmet>
        <title>Case Info - Add new Recipient</title>
        <meta a name='description' content='My Expertpay' />
      </Helmet>
      <h1>Add New Recipient</h1>
      <hr />

      <Row>
        <Col xs={12} lg={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            {isLoading ? <LoadingIndicator /> : caseSelectionDropdown()}
            {formElementNode()}
            <Button variant='primary' type='submit'>
              Save
            </Button>
            <Link to='/recipients'>
              <Button variant='link' type='button'>
                Cancel
              </Button>
            </Link>
          </Form>
        </Col>
      </Row>
      <SuccessModal
        show={showSuccess}
        noed={gotoRecipList}
        yesed={resetForm}
        title='Recepient Added Successful'
        body={<>Email sent to <span className={classes.blue}>{emailAddr}</span>. <br/>
              Wait for recipient accept invitation. <br/>
              Do you want to add more Recepients?</>}
      />
    </>
  )
}
