import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Row } from 'react-bootstrap';
import messages from './messages';

import style from './styles/style.scss';

const contactInfo = {
  tel: '512-775-2142',
  email: 'sheetstone@gmail.com',
};

function Footer() {
  return (
    <footer className={style.footer}>
    <Container>
      <Row className="justify-content-between">
        <section>
          <FormattedMessage {...messages.licenseMessage} />
        </section>
        <section>
         {/*<LocaleToggle />*/}
        </section>
        <section>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <a href="https://www.google.com/search?q=sheetstone">Hong Zhang</a>
            }}
          />
          <br/>
          <span>{contactInfo.tel} | <a href="mailto:'{contactInfo.email}'">{contactInfo.email}</a></span>
        </section>
      </Row>
    </Container>
    </footer>
  );
}

export default Footer;
