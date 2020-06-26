import React from 'react';

import style from './styles/style.scss';
import drawDot from './drawDot';

function Day(props) {
  const {
    day: { date, isCurrentMonth, isToday, number },
    events,
    selectEvent,
  } = props;

  const eventsList = events.map((item, i) => (
    <li className={style.eventsli} key={item.id} onClick={(event) => selectEvent(event, item)}>
      {drawDot(i)}
      <span>{item.eventName}</span>
    </li>
  ));

  return (
    <div
      className={`${style.day} ${isToday ? style.today : ''}
                  ${isCurrentMonth ? '' : style.differentMonth}`}>
      <span className={style.dayNum}>{number}</span>
      <ul className={style.eventslist}>{eventsList}</ul>
    </div>
  );
}

export default Day;
