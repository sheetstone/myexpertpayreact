/*
 * Bank Account
 */
import React from "react";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { Container } from "react-bootstrap";

import BankAccountContextProvider from "./bankAccount-context";
import BankAccountContainer from "./bankAcountContainer";

import classes from "./bankAccount.module.scss";
import messages from "./messages";

const BankAccount = (props) => {
  return (
    <article className={classes.bankaccountbg}>
      <Helmet>
        <title>Bank Account</title>
        <meta name="description" content="My Expertpay" />
      </Helmet>

      <BankAccountContextProvider>
        <Container>
          <h1 className={classes.pageheader}>
            <FormattedMessage {...messages.header} />
          </h1>
          <hr />
          <p className={classes.pageScaffoldingHeader}>
            <FormattedMessage {...messages.scaffoldingHeader} />
          </p>
          <BankAccountContainer />
        </Container>
      </BankAccountContextProvider>
    </article>
  );
};

export default BankAccount;
