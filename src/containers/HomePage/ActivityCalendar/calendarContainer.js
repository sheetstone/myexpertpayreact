import React, { useContext } from "react";
import { Container } from "react-bootstrap";

import { SelectEventContext } from "./selectEvent-context";
import classes from "./activityCalendar.module.scss";

const CalendarContainer = (props) => {
  const selectEventCnt = useContext(SelectEventContext);

  return (
    <Container>
      <section
        className={classes.calendar}
        onClick={selectEventCnt.disSelectEvent}
      >
        {props.children}
      </section>
    </Container>
  );
};

export default CalendarContainer;
