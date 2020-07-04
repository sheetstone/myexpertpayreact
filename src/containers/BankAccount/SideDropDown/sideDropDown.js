/*
 * Side Drop Down Menu
 */
import React, {useState, useContext} from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { BankAccountContext } from '../bankAccount-context';
import classes from './sideDropDown.module.scss';

const BankPropToggle = React.forwardRef(({onClick, children, active},ref) => {

  const getActive = () =>{
    return active ? classes.active : '';
  }

  const handleClick = (e) => {
    e.preventDefault();
    onClick(e);
  }

  return (
    <button ref={ref} onClick={handleClick} className={classes.menuToggle + " " + getActive()}>
      {children}
    </button>
  )
})

 const SideDropDown = (props) => {
  const [isShow, setShow] = useState(false);
  const {keyItem} = props;

  const { delBank } = useContext(BankAccountContext);

  const handleToggle = (isOpen) => {
    setShow(isOpen);
  }

  return (
    <Dropdown onToggle={handleToggle} className={classes.sideMenu} id={`dropdown${Math.random()}`}>
      <Dropdown.Toggle as={BankPropToggle} active={isShow}>
        <FontAwesomeIcon icon={faEllipsisV} color="#666666" />
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="#/action-1"><span className={classes.danger}>!&nbsp;</span>Verify</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Edit</Dropdown.Item>
        <Dropdown.Item onClick={()=>{delBank(keyItem)}}>Delete</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Make a Payment</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
  
}
export default SideDropDown;