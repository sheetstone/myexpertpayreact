/*
 * Case Infor
 */
import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

import AddNewRecipient from "./AddNewRecipient/addNewRecipient";
import RecipientList from "./RecipientList/recipientList";
import classes from "./recipients.module.scss";

export default function Recipients(props) {
  const { match } = props;
  return (
    <article className={classes.recipientsbg}>
      <Helmet>
        <title>Recipients</title>
        <meta name="description" content="My Expertpay" />
      </Helmet>
      <Container>
        <Switch>
          <Route exact path={`${match.url}`} component={RecipientList} />
          <Route
            path={`${match.url}/addnewrecipient`}
            component={AddNewRecipient}
          />
          <Route
            path={`${match.url}/editrecipient`}
            component={AddNewRecipient}
          />
        </Switch>
      </Container>
    </article>
  );
}
