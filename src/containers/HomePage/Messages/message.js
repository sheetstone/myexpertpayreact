import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

import formatMoney from 'utils/formatMoney';
import {getMessages} from 'api/messagesApi';

import classes from './message.module.scss';

const header = ['Type', 'Recieved', 'Amount', 'Reciptent', 'Action'];

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    getMessages().then(res => {
      setMessages(res);
    }).catch(err => {
      console.log(err)
    })
  }, [])

  //TODO: add accept or decline logic
  return (
    <Container className={classes.messageContainer}>
      <Table hover className={classes.messageTable}>
        <thead>
          <tr>
            {header.map((h, i) => (
              <th key={i}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {messages.map((item, i) => {
            const {type, recieved, amount, reciptent} = item
            return (
              <tr key={i}>
                <td>{type}</td>
                <td>{recieved}</td>
                <td className={classes.price}>
                  <span>$</span>
                  <span className={classes.priceNumber}>{formatMoney(amount)}</span>
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
