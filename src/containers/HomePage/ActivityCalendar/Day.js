import React, { useContext } from 'react';

import { SelectEventContext } from './selectEvent-context';

import drawDot from 'components/UI/drawDot/drawDot';

import classes from './activityCalendar.module.scss';

const Day = (props) => {
  const {
    day: { isCurrentMonth, isToday, number },
    events
  } = props;

  const selectEventCnt = useContext(SelectEventContext);

  const eventsList = events.map((item, i) => (
    <li className={classes.eventsli} key={item.id+Math.random()} onClick={(event) => selectEventCnt.selectEvent(event, item)}>
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
