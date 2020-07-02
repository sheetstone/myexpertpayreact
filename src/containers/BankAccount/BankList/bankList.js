/*
 * Bank List
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import BankItem from '../BankItem/bankItem';

export default function BankList(props) {
  const { bankData } = props;

  return (
    <div>
      <Row>
        {bankData.map((item, i) => (
          <Col xl={3} lg={4} md={6} key={`bankitem${i.toString()}`}>
            <BankItem bankitem={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
