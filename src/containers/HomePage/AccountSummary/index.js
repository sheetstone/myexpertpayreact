import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingIndicator from 'components/LoadingIndicator';

import { getPayments } from 'api/paymentApi';

import DashBoard from '../DashBoard';

import classes from './accountSummary.module.scss';

const AccountSummary = () => {
  //Todo: make payment data from redux
  const [ paymentData, setPaymentData ] = useState({});
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(()=>{
    getPayments().then(data => {
      setPaymentData(data);
      setIsLoading(false);
    })
  }, [])


  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <Container className={classes.Container}>
      <Row>
        <Col>
          <DashBoard type="recieved" paymentData={paymentData} />
        </Col>
        <Col>
          <DashBoard type="sent" paymentData={paymentData} />
        </Col>
      </Row>
    </Container>
  );
  
}

export default AccountSummary;
