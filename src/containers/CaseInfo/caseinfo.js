/*
 * Case Infor
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container } from 'react-bootstrap';
import classes from './caseinfo.module.scss';

import messages from './messages';

export default function CaseInfo() {
  return (
    <article className={classes.Caseinfo}>
      <Helmet>
        <title>Case Info</title>
        <meta name="description" content="My Expertpay" />
      </Helmet>
      <Container>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <p>
          <FormattedMessage {...messages.scaffoldingHeader} />
        </p>
      </Container>
    </article>
  );
}
