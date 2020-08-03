/*
 * Case Infor
 */
import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { Container } from "react-bootstrap";

import AddNewCase from "./AddNewCase/addNewCase";
import CasesList from "./CasesList/caseslist";
import classes from "./caseinfo.module.scss";
import messages from "./messages";

export default function CaseInfo(props) {
  const { match } = props;
  return (
    <article className={classes.caseinfobg}>
      <Helmet>
        <title>Case Info</title>
        <meta name="description" content="My Expertpay" />
      </Helmet>
      <Container>
        <h1 className={classes.pageheader}>
          <FormattedMessage {...messages.header} />
        </h1>
        <hr />
        <Switch>
          <Route exact path={`${match.url}`} component={CasesList} />
          <Route path={`${match.url}/addnewcase`} component={AddNewCase} />
          <Route path={`${match.url}/editcase`} component={AddNewCase} />
        </Switch>
      </Container>
    </article>
  );
}
