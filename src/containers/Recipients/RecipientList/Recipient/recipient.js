import React from "react";

import classes from "./recipient.module.scss";

export default function Recipient(props) {
  const { reciItem } = props;
  const recipientLabel = () => {
    if (reciItem.active){
      return <span className={classes.labelActive}>Active</span>;
    }else{
      return <span className={classes.labelInactive}>Inactive</span>;
    }
  };

  return (
    <div className={classes.Card}>
      <div className={classes.Name}>{reciItem.name}</div>
      {recipientLabel()}
      <div className={classes.Email}>{reciItem.email}</div>
      <div className={classes.Tel}>{reciItem.tel}</div>
    </div>
  );
}
