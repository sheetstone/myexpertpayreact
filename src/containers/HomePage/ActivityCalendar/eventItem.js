import React, { useContext } from "react";

import { SelectEventContext } from "./selectEvent-context";

import drawDot from "components/UI/drawDot/drawDot";

import classes from "./activityCalendar.module.scss";

const EventItem = (props) => {
  const selectEventCnt = useContext(SelectEventContext);
  const { event, index } = props;

  const isSelected =
    selectEventCnt.selectedEvent &&
    selectEventCnt.selectedEvent.id === event.id;

  const eventClasses = [
    classes.eventsli,
    isSelected ? classes.active : null,
  ].join(" ");

  const eventClickHandler = (e) => {
    selectEventCnt.selectEvent(e, event);
  };

  return (
    <li className={eventClasses} onClick={eventClickHandler}>
      {drawDot(index)}
      <span>{event.eventName}</span>
    </li>
  );
};

export default EventItem;
