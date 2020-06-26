import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import style from './styles/style.scss';

function NavList() {
  return (
    <Nav
      activeKey="/home"
      className={style.navspace + ' justify-content-between'}
    >
      <Nav.Item>
        <Link to="/bankaccount" className={style.navlink+" nav-link"}>Bank Account</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/caseinfo" className={style.navlink+" nav-link"}>Case Info</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/recipients" className={style.navlink+" nav-link"}>Recipients</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/payment" className={style.navlink+" nav-link"}>Payment</Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;
