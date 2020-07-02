import React from 'react';

import Week from './week';

import classes from './activityCalendar.module.scss';

const Weeks = (props) => {
    const { month, eventsData } = props;
    const weeks = [];

    const date = month
      .clone()
      .startOf('month')
      .add('w')
      .day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const getMonthEvent = () => {
        const eventsList = [];
    
        if (!!eventsData) {
          eventsData.forEach(item => {
            if (
              month.isSame(item.startTime, 'month') ||
              month.clone().endOf("month").isSame(item.startTime, 'week') ||
              month.clone().startOf('month').isSame(item.startTime, 'week') ||
              month.isSame(item.endTime, 'month') ||
              month.clone().endOf("month").isSame(item.endTime, 'week') ||
              month.clone().startOf('month').isSame(item.endTime, 'week')){
                eventsList.push(Object.assign({}, item));
            }})
        }
        return eventsList;
      }

    const currentMonthEvents = getMonthEvent();

    let done = false;
    while (!done) {
      let eventsSplitByWeek = [];
      if (!!currentMonthEvents) {
        currentMonthEvents.forEach(item => {
          if (date.isSame(item.startTime, 'week')||
              date.isBetween(item.startTime,item.endTime)||
              date.isSame(item.endTime, 'week')
          ){
            eventsSplitByWeek.push(Object.assign({}, item));
          }
        });
      }

      weeks.push(
        <Week
          key={date.format("YYYY-WW")}
          date={date.clone()}
          month={month}
          events={eventsSplitByWeek}
          className={classes.week}
        />,
      );

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  export default Weeks;