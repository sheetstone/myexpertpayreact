import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import classes from './welcome.module.scss';

const user = {
  // TODO: Get from redux
  username: 'John Joe',
};

const bank = {
  // TODO: Get from Redux
  number: 2,
  status: true,
};

function iconCheck() {
  const successfulIcon = (<FontAwesomeIcon icon={faCheckCircle} color='#279C8B' />);
  const failedIcon = (<FontAwesomeIcon icon={faTimesCircle} color='#ffcc99' />);
  if (bank.status) {
    return successfulIcon;
  }
  return failedIcon;
}

function Welcome() {
  return (
    <section className={classes.Header}>
      <h2 className={classes.Title}>Welcome, {user.username}</h2>
      <div className={classes.Info}>
        <span>
          {iconCheck()} &nbsp; Status:{bank.status ? 'Verified' : 'Pending'}
        </span>
        <span>|</span>
        <span>
          Bank accounts number:&nbsp;<Link to="/bankaccount">{bank.number}</Link>
        </span>
      </div>
    </section>
  );
}

export default Welcome;


