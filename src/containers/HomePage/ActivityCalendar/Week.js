import React from "react";

import Day from "./day";

import classes from "./activityCalendar.module.scss";

const Week = (props) => {
  const days = [];
  const { date, month, events } = props;

  for (let i = 0; i < 7; i++) {
    let dayEvents = [];
    if (!!events) {
      events.forEach((item) => {
        if (
          date.isSame(item.startTime, "day") ||
          date.isBetween(item.startTime, item.endTime) ||
          date.isSame(item.endTime, "day")
        ) {
          dayEvents.push(Object.assign({}, item));
        }
      });
    }

    const day = {
      name: date.format("dd").substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), "day"),
      date,
    };
    days.push(
      <Day key={date.format("YYYY-MM-DD")} day={day} events={dayEvents} />
    );
    date.add(1, "day");
  }

  return <div className={classes.week}>{days}</div>;
};

export default Week;
