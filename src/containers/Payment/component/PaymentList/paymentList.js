/*
 * Payment List
 */
import React from "react";
import classes from "./paymentList.module.scss";

import PaymentItem from "../PaymentItem/paymentItem";

export default function PaymentList(props) {
  const { paymentData } = props;
  console.log(paymentData)

  return (
    <ul className={classes.paymentList}>
      {paymentData.map((item, i) => (
        <PaymentItem paymentData={item} key={`paymentID${i.toString()}`} />
      ))}
    </ul>
  );
}
