import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import classes from './Nav.module.scss';

function NavList() {
  return (
    <Nav
      activeKey="/home"
      className={classes.Navspace + ' justify-content-between'}
    >
      <Nav.Item>
        <Link to="/bankaccount" className={classes.Navlink + " nav-link"}>
          <FormattedMessage {...messages.bankAccount} />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/caseinfo" className={classes.Navlink + " nav-link"}>
          <FormattedMessage {...messages.caseInfo} />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/recipients" className={classes.Navlink + " nav-link"}>
          <FormattedMessage {...messages.recipients} />
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/payment" className={classes.Navlink + " nav-link"}>
          <FormattedMessage {...messages.payment} />   
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;
