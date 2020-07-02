import React from 'react';

import EventItem from './eventItem';

import classes from './activityCalendar.module.scss';

const Day = (props) => {
  const {
    day: { isCurrentMonth, isToday, number },
    events
  } = props;

  const eventsList = events.map((item, i) => <EventItem event={item} index={i} key={item.id}/>);

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
