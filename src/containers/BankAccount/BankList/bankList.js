/*
 * Bank List
 */
import React from 'react';
import { Row, Col } from 'react-bootstrap';

import BankItem from '../BankItem/bankItem';

export default function BankList(props) {
  const { bankData } = props;
  let bankList = [];

  if (bankData === null) {
    bankList = <Col><p>You don't have any bank yet, click add bank button above to add bank.</p></Col>
  } else {
    for (const [key, value] of Object.entries(bankData)){
      bankList.push(
        <Col xl={3} lg={4} md={6} key={key}>
          <BankItem bankitem={value} keyItem={key} /> {/*TODO: if can remove bankitem */}
        </Col>
      )
    }
  }

  return (
    <div>
      <Row>
        {bankList}
      </Row>
    </div>
  );
}
