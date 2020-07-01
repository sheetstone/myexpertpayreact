import React from 'react';

import drawDot from './drawDot';

import classes from './activityCalendar.module.scss';

function Day(props) {
  const {
    day: { date, isCurrentMonth, isToday, number },
    events,
    selectEvent,
  } = props;

  const eventsList = events.map((item, i) => (
    <li className={classes.eventsli} key={item.id} onClick={(event) => selectEvent(event, item)}>
      {drawDot(i)}
      <span>{item.eventName}</span>
    </li>
  ));

  return (
    <div
      className={`${classes.day} ${isToday ? classes.today : ''}
                  ${isCurrentMonth ? '' : classes.differentMonth}`}>
      <span className={classes.dayNum}>{number}</span>
      <ul className={classes.eventslist}>{eventsList}</ul>
    </div>
  );
}

export default Day;
