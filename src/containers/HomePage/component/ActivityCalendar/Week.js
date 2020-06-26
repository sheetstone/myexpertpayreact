import React from 'react';
import Day from './Day';

import style from './styles/style.scss';

function Week(props) {
  const days = [];
  let { date } = props;
  let dayEvents = [];

  const { month, events, selectEvent } = props;

  for (let i = 0; i < 7; i++) {
    dayEvents = new Array();
    if (!!events) {
      events.forEach(item => {
        if (date.isSame(item.startTime, 'day')||
            date.isBetween(item.startTime, item.endTime)||
            date.isSame(item.endTime, 'day'))
        dayEvents.push(Object.assign({}, item));
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

    date = date.clone();
    date.add(1, 'day');
  }

  return (
    <div className={style.week} key={days[0]}>
      {days}
    </div>
  );
}

export default Week;
