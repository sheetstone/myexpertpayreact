import React from 'react'
import { Helmet } from 'react-helmet'
import { Row, Col, Button, Form } from 'react-bootstrap'

import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import RecipientInput from './RecipientInput/recipientInput'

import { formSettings, formCreator } from './recipientForm.js'

export default function AddNewRecipient (props) {
  const { register, handleSubmit, errors, formState, reset } = useForm(
    formSettings
  )

  const initalState = {};

  const onSubmit = data => {
    console.log('submitted')
  }

  const { payeeName, emailAddress, confirmEmail, phoneNum } = formCreator(register, formState, initalState, errors)

  const formElementNode = () => {
    const formArray = (
      <>
        <RecipientInput {...payeeName} />
        <RecipientInput {...emailAddress} />
        <RecipientInput {...confirmEmail} />
        <RecipientInput {...phoneNum} />
      </>
    )

    return formArray
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
        <Col xs={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
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
    </>
  )
}