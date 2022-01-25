/*
 * Payment Item
 */
import React from "react";
import style from "./paymentItem.module.scss";

function labelActive() {
  return <span className={style.labelActive}>Active</span>;
}

function statusCheck(status) {
  return <span className={style.labelVerification}>Require Verification</span>;
}
/*
PaymentDate{
  name,
  date,
  status,
  bank,
  caseNumber
}
*/

export default function PaymentItem(props) {
  const { paymentData } = props;
  return (
    <li className={style.paymentItem}>
      <div className={style.paymentData}>{paymentData.paymentdate}</div>
      <div className={style.paymentName}>{paymentData.name}</div>
      <div className={style.paymentStatus}>
        {statusCheck(paymentData.status)}
      </div>
      {/*<div className={style.paymentcase}>{paymentData.casenumber}</div>
      <div className={style.paymentcatgory}>{paymentData.catgory}</div>*/}
      <div className={style.paymentAmount}>{paymentData.amount}</div>
    </li>
  );
}
