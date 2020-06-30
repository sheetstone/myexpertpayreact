import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import classes from './Nav.module.scss';

import Logoimage from '../../../assets/images/u4.png';

function NavLogo() {
  return (
    <Navbar.Brand className={classes.Navbrand}>
      <Link to="/">
        <img src={Logoimage} alt="My Expertpay logo" />
      </Link>
    </Navbar.Brand>
  );
}

export default NavLogo;
