/*
 * Add New Cases
 */
import React from 'react'
import { Helmet } from 'react-helmet'

import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import classes from './caseslist.module.scss'

const CasesList = props => {

  return (
    <article className={classes.bankaccountbg}>
      <Helmet>
        <title>Case Info - Add new case</title>
        <meta name='description' content='My Expertpay' />
      </Helmet>

      <Container>
          <Row>
              <Col>
              <p>In Cases list</p>
              </Col>
              <Col>
                <Link to='/caseinfo/addnewcase' >Add new case</Link>
              </Col>
          </Row>
      </Container>
    </article>
  )
}

export default CasesList
