import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import formatMoney from 'utils/formatMoney';

import style from './styles/style.scss';

// TODO : move data set to JSON server
const json = {
  data: [
    {
      type: 'Request received',
      recieved: '01/01/2016',
      amount: 100,
      reciptent: 'Betty Brant',
    },
    {
      type: 'Request received',
      recieved: '01/01/2016',
      amount: 2400,
      reciptent: 'Mary Mae',
    },
    {
      type: 'Money recieved',
      recieved: '01/01/2016',
      amount: 29.9,
      reciptent: 'Alice Ace',
    },
  ],
};

const header = ['Type', 'Recieved', 'Amount', 'Reciptent', 'Action'];

function Messages() {
  return (
    <Container className={style.messageContainer}>
      <Table hover className={style.messageTable}>
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {json.data.map((item, i) => {
            const {type, recieved, amount, reciptent} = item
            return (
              <tr key={i}>
                <td>{type}</td>
                <td>{recieved}</td>
                <td className={style.price}>
                  <span>$</span>
                  <span className={style.priceNumber}>{formatMoney(amount)}</span>
                </td>
                <td>{reciptent}</td>
                <td>
                  <Button variant="primary" size="sm">Accept</Button>
                  <Button variant="secondary" size="sm">Decline</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}

export default Messages;
