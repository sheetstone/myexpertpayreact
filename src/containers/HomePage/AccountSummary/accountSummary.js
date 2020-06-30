import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingIndicator from 'components/UI/LoadingIndicator/LoadingIndicator';

import { getPayments } from 'api/paymentApi';

import DashBoard from './DashBoard/dashBoard';

import classes from './accountSummary.module.scss';

const AccountSummary = () => {
  const [ paymentData, setPaymentData ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(null)

  useEffect(()=>{
    getPayments().then(data => {
      setPaymentData(data);
      setIsLoading(false);
    }).catch(err => {
      setError(err);
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error){
    return <h3>{error.message}</h3>
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
