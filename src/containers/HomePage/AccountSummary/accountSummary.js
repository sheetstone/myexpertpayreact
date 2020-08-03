import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { getPayments } from "api/paymentApi";

import LoadingIndicator from "components/UI/LoadingIndicator/LoadingIndicator";
import ErrorMessage from "components/UI/errorMessage/ErrorMessage";
import DashBoard from "./DashBoard/dashBoard";

import classes from "./accountSummary.module.scss";

const AccountSummary = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPayments()
      .then((data) => {
        setPaymentData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
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
};

export default AccountSummary;
