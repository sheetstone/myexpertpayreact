import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import style from './styles/style.scss';
import Logoimage from '../../resources/images/u4.png';

function NavLogo() {
  return (
    <Navbar.Brand className={style.navbrand}>
      <Link to="/">
        <img src={Logoimage} alt="My Expertpay logo" />
      </Link>
    </Navbar.Brand>
  );
}

export default NavLogo;
