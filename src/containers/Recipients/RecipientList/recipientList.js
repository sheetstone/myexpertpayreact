import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Recipient from './Recipient/recipient'

import classes from './recipientList.module.scss';

export default function RecipientList(props) {
    const item = {
      name: 'Mary',
      email: "mary.mae1990@noname.com",
      tel: "(111)-222-5912"
    }
    return (
        <>
        <h1 className={classes.pageheader}>
          Recipients
        </h1>
        <hr />
        <p>Below is a list of your recipients.</p>
        <Row>
          <Col>
            <Link to={ props.match.url + '/addnewrecipient' }>
              <Button variant="primary" size="md">
                <FontAwesomeIcon icon={faPlus} color="#ffffff" />
            &nbsp;Add New Recipient</Button>
            </Link>
          </Col>
        </Row>
  
        <Row >
          <Col xs='4'>
            <Recipient reciItem={item} />
          </Col>
          <Col xs='4'>
            <Recipient reciItem={item} />
          </Col>
          <Col xs='4'>
            <Recipient reciItem={item} />
          </Col>
        </Row>
      </>
    )
}