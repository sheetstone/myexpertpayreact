import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

import messages from "./messages";
import classes from "./Nav.module.scss";

function NavList() {
  return (
    <Nav
      activeKey="/home"
      className={classes.Navspace + " justify-content-between"}
    >
      <Nav.Item>
        <NavLink
          to="/bankaccount"
          className={classes.Navlink + " nav-link"}
          activeClassName={classes.active}
        >
          <FormattedMessage {...messages.bankAccount} />
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/caseinfo"
          className={classes.Navlink + " nav-link"}
          activeClassName={classes.active}
        >
          <FormattedMessage {...messages.caseInfo} />
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/recipients"
          className={classes.Navlink + " nav-link"}
          activeClassName={classes.active}
        >
          <FormattedMessage {...messages.recipients} />
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="/payment"
          className={classes.Navlink + " nav-link"}
          activeClassName={classes.active}
        >
          <FormattedMessage {...messages.payment} />
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default NavList;
