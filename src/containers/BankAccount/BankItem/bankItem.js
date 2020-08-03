/*
 * Bank Item
 */
import React from "react";

import classes from "./bankItem.module.scss";
import SideDropDown from "../SideDropDown/sideDropDown";

function formatBankNumber(number = "0") {
  const reg = /\d{4}$/gm;
  const found = number.toString().match(reg);
  if (found !== null) {
    return "XXXX-XXXX-XXXX-" + found[0];
  } else {
    return "Error!";
  }
}

function labelActive() {
  return <span className={classes.labelActive}>Active</span>;
}

function labelVerification() {
  return (
    <span className={classes.labelVerification}>Require Verification</span>
  );
}

export default function BankItem(props) {
  const { bankitem, keyItem } = props;
  return (
    <div className={classes.bankCard}>
      <div className={classes.bankName}>{bankitem.name}</div>
      <SideDropDown keyItem={keyItem} bankItem={bankitem} />
      <div className={classes.bankType}>{bankitem.type}</div>
      <div className={classes.bankNum}>
        {formatBankNumber(bankitem.accountnum)}
      </div>
      <div>{bankitem.verified ? labelActive() : labelVerification()}</div>
    </div>
  );
}
