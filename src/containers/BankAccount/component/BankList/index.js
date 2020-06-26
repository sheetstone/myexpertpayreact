/*
 * Bank List
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// import bankData from 'resources/data/bankData';
import BankItem from '../BankItem';

export default function BankList(props) {
  const { bankData, delBank} = props;

  return (
    <div>
      <Row>
        {bankData.map((item, i) => (
          <Col xl={3} lg={4} md={6} key={`bankitem${i.toString()}`}>
            <BankItem bankitem={item} delBank={delBank} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
