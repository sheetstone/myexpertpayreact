import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import classes from './Nav.module.scss';

function NavList() {
  return (
    <Nav
      activeKey="/home"
      className={classes.Navspace + ' justify-content-between'}
    >
      <Nav.Item>
        <Link to="/bankaccount" className={classes.Navlink + " nav-link"}>Bank Account</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/caseinfo" className={classes.Navlink + " nav-link"}>Case Info</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/recipients" className={classes.Navlink + " nav-link"}>Recipients</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/payment" className={classes.Navlink + " nav-link"}>Payment</Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;
