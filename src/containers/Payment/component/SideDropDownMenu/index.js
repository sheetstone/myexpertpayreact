/*
 * Side Drop Down Menu
 */
import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import style from "./styles/style.scss";

class BankPropToggle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  getActive() {
    return this.props.active ? style.active : "";
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={style.menuToggle + " " + this.getActive()}
      >
        {this.props.children}
      </button>
    );
  }
}

export default class SideDropDownMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleToggle = this.handleToggle.bind(this);
    this.state = { show: false };
  }

  handleToggle(isOpen, e) {
    this.setState({ show: isOpen });
  }

  render() {
    return (
      <Dropdown
        onToggle={this.handleToggle}
        className={style.sideMenu}
        id={`dropdown${Math.random()}`}
      >
        <Dropdown.Toggle as={BankPropToggle} active={this.state.show}>
          <FontAwesomeIcon icon={faEllipsisV} color="#666666" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">
            <span className={style.danger}>!&nbsp;</span>Verify
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
          <Dropdown.Item onClick={this.props.delBank}>Delete</Dropdown.Item>
          <Dropdown.Item href="#/action-4">Make a Payment</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
