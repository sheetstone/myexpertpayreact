import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import style from './styles/style.scss';

// TODO: Move to date
const user = {
  username: 'John Joe',
};

const bank = {
  number: 2,
  status: true,
};

function Welcome() {
  return (
    <section className={style.dashboardheader}>
      <h2 className={style.dashboardtitle}>Welcome, {user.username}</h2>
      <div className={style.dashboardinfo}>
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

function iconCheck() {
  const successfulIcon = (<FontAwesomeIcon icon={faCheckCircle} color='#279C8B' />);
  const failedIcon = (<FontAwesomeIcon icon={faTimesCircle} color='#ffcc99' />);
  if (bank.status) {
    return successfulIcon;
  }
  return failedIcon;
}
