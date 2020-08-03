/*
 * Bank List
 */
import React from "react";
import style from "./styles/style.scss";

// import bankData from 'resources/data/bankData';
import PaymentItem from "../PaymentItem";

export default function PaymentList(props) {
  const { paymentData } = props;

  return (
    <ul className={style.paymentList}>
      {paymentData.map((item, i) => (
        <PaymentItem paymentData={item} key={`paymentID${i.toString()}`} />
      ))}
    </ul>
  );
}
