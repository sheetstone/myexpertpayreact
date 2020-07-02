/*
 * Side Drop Down Menu
 */
import React, {useState, useContext} from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import classes from './sideDropDown.module.scss';

const BankPropToggle = React.forwardRef((props,ref) => {

  const getActive = () =>{
    return props.active ? classes.active : '';
  }

  const handleClick = (e)=> {
    e.preventDefault();
    props.onClick(e);
  }

  return (
    <button onClick={handleClick} className={classes.menuToggle + " " + getActive()}>
      {props.children}
    </button>
  )
})

 const SideDropDown = (props) => {
  const [isShow, setShow] = useState(false);

  const handleToggle = () => {
    setShow(prevShow => !prevShow);
  }

  return (
    <Dropdown onToggle={handleToggle} className={classes.sideMenu} id={`dropdown${Math.random()}`}>
      <Dropdown.Toggle as={BankPropToggle} active={isShow}>
        <FontAwesomeIcon icon={faEllipsisV} color="#666666" />
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1"><span className={classes.danger}>!&nbsp;</span>Verify</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
        <Dropdown.Item onClick={()=>{console.log('del clicked')}}>Delete</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Make a Payment</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  
}
export default SideDropDown;