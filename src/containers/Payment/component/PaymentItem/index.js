/*
 * Bank Item
 */
import React from "react";
import style from "./styles/style.scss";
import moment from "moment";

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
      <div className={style.paymentstatus}>{paymentData.paymentdate}</div>
      <div className={style.paymentname}>{paymentData.name}</div>
      <div className={style.paymentstatus}>
        {statusCheck(paymentData.status)}
      </div>
      <div className={style.paymentcase}>{paymentData.casenumber}</div>
      <div className={style.paymentcatgory}>{paymentData.catgory}</div>
      <div className={style.paymentamount}>{paymentData.amount}</div>
    </li>
  );
}
