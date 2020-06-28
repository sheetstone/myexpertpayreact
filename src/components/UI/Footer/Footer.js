import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Container, Row } from 'react-bootstrap';

import messages from './messages';
import style from './Footer.module.scss';


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
            <br />
            <span>
              <FormattedMessage {...messages.contactInfoTel} /> | <a href="mailto:'{contactInfo.email}'">  <FormattedMessage {...messages.contactInfoEmail} /> </a>
            </span>
          </section>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
