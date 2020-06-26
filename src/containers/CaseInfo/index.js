/*
 * Case Infor
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Container } from 'react-bootstrap';
import style from './styles/style.scss';

import messages from './messages';

export default function CaseInfo() {
  return (
    <article className={style.bankaccountbg}>
      <Helmet>
        <title>Bank Account</title>
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
