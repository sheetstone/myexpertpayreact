import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classes from './activityCalendar.module.scss';

function CalendarHeader(props) {
  const { month, previous, next } = props;

  return (
    <header className={classes.header}>
      <span onClick={previous} className={classes.arrowIconBtn}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <span className={classes.monthLabel}>{month.format("MMMM YYYY")}</span>
      <span onClick={next} className={classes.arrowIconBtn}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </header>
  );
}

export default CalendarHeader;
