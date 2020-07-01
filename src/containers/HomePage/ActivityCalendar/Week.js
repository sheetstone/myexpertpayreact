import React from 'react';
import Day from './Day';

import classes from './activityCalendar.module.scss';

const Week = (props) => {
  const days = [];
  let dayEvents = [];

  const { date, month, events, selectEvent } = props;

  for (let i = 0; i < 7; i++) {
    if (!!events) {
      events.forEach(item => {
        if(date.isSame(item.startTime, 'day')||
            date.isBetween(item.startTime, item.endTime)||
            date.isSame(item.endTime, 'day')){
          dayEvents.push(Object.assign({}, item));
        }
      });
    }

    const day = {
      name: date.format('dd').substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), 'day'),
      date,
    };
    days.push(<Day key={date.toString()} day={day} events={dayEvents} selectEvent={selectEvent}/>);

    date.add(1, 'day');
  }

  return (
    <div className={classes.week} key={days[0]}>
      {days}
    </div>
  );
}

export default Week;
