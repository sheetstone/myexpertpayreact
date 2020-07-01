import React, { useState, useEffect, useContext } from 'react';
import { Container } from 'react-bootstrap';
import moment from 'moment';

import { getEvents } from 'api/eventsApi';
import LoadingIndicator from 'components/UI/LoadingIndicator/LoadingIndicator';
import ErrorMessage from 'components/UI/errorMessage/ErrorMessage';
import Week from './Week';
import WeekHeaderRow from './WeekHeaderRow';
import CalendarHeader from './CalendarHeader';
import EventDetail from './EventDetail';

import classes from './activityCalendar.module.scss';

const ActivityCalender = () => {
  console.log('activity Calender rerender');

  const [eventsData, setEventsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [month, setMonth] = useState(moment()); // Calendar currently display month
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedPos, setSelectedPos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(()=> {
    getEvents().then(data => {
      setEventsData(data);
      setIsLoading(false);
    }).catch(err => {
      setError(err);
      setIsLoading(false);
    })
  }, [])

  const previous = (event) => {
    event.stopPropagation();
    setMonth(prevMonth => {
      return prevMonth.subtract(1, 'month');
    })
  }

  const next = (event) => {
    event.stopPropagation();
    setMonth(prevMonth => {
      return prevMonth.add(1, 'month');
    })
  }

  const renderWeeks = () => {
    const weeks = [];
    let events = [];

    let done = false;
    const date = month
      .clone()
      .startOf('month')
      .add('w' - 1)
      .day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const currentMonthEvents = getMonthEvent();

    while (!done) {
      if (!!currentMonthEvents) {
        currentMonthEvents.forEach(item => {
          if (date.isSame(item.startTime, 'week')||
              date.isBetween(item.startTime,item.endTime)||
              date.isSame(item.endTime, 'week')
          )
            events.push(Object.assign({}, item));
        });
      }

      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          events={events}
          className={classes.week}
          selectEvent={(event, item) => selectEvent(event, item)}
        />,
      );

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  const getMonthEvent = () => {
    const events = [];

    if (!!eventsData) {
      eventsData.forEach(item => {
        if (
          month.isSame(item.startTime, 'month') ||
          month.clone().endOf("month").isSame(item.startTime, 'week') ||
          month.clone().startOf('month').isSame(item.startTime, 'week') ||
          month.isSame(item.endTime, 'month') ||
          month.clone().endOf("month").isSame(item.endTime, 'week') ||
          month.clone().startOf('month').isSame(item.endTime, 'week')){
            events.push(Object.assign({}, item));
        }})
    }
    return events;
  }

  const selectEvent = (event, item) => {
    event.stopPropagation();
    const rectObj = event.currentTarget.getBoundingClientRect();

    const pos = {
      bottom: rectObj.bottom,
      left: rectObj.left,
      top: rectObj.top,
      right: rectObj.right,
      x: rectObj.x,
      y: rectObj.y,
      height: rectObj.height,
      width: rectObj.width,
    };
  
    setSelectedEvent( Object.assign({}, item));
    setSelectedPos(pos);
  }

  const disMissSelection = (e) => {
    setSelectedEvent(null);
  }


  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error){
    return <ErrorMessage message={error.message}/>
  }

  return (
    <Container>
      <section className={classes.calendar} onClick={disMissSelection}>
        <CalendarHeader month={month} previous={previous} next={next} />
        <WeekHeaderRow />
        {renderWeeks()}
        <EventDetail selectedEvent={selectedEvent} pos={selectedPos} />
      </section>
    </Container>
  );
}

export default ActivityCalender;
