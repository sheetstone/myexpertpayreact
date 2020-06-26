import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import NavList from './NavList';
import NavLogo from './NavLogo';

import style from './styles/style.scss';

function Header() {
  return (
    <header className={style.header}>
      <Container>
        <Navbar className={style.navbar}>
          <NavLogo />
          <NavList />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className={style.navtext}>
              WELCOME: <a href="#logout">John Joe</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;
