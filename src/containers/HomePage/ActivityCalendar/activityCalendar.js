import React, { useState, useEffect } from "react";

import moment from "moment";

import { getEvents } from "api/eventsApi";
import SelectEventContextProvider from "../ActivityCalendar/selectEvent-context";
import LoadingIndicator from "components/UI/LoadingIndicator/LoadingIndicator";
import ErrorMessage from "components/UI/errorMessage/ErrorMessage";

import CalendarContainer from "./calendarContainer";
import Weeks from "./weeks";
import WeekHeaderRow from "./weekHeaderRow";
import CalendarHeader from "./calendarHeader";
import EventDetail from "./eventDetail";

const ActivityCalender = () => {
  console.log("activity Calender rerender");

  const [eventsData, setEventsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [month, setMonth] = useState(moment()); // Calendar currently display month
  const [error, setError] = useState(null);

  useEffect(() => {
    getEvents()
      .then((data) => {
        setEventsData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  // Click function for show previous month
  const previous = (event) => {
    console.log("clicked");
    event.stopPropagation();
    setMonth((prevMonth) => {
      return prevMonth.clone().subtract(1, "month");
    });
  };

  // Click function for show next month
  const next = (event) => {
    console.log("clicked");
    event.stopPropagation();
    setMonth((prevMonth) => {
      return prevMonth.clone().add(1, "month");
    });
  };

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <SelectEventContextProvider>
      <CalendarContainer>
        <CalendarHeader month={month} previous={previous} next={next} />
        <WeekHeaderRow />
        <Weeks month={month} eventsData={eventsData} />
        <EventDetail />
      </CalendarContainer>
    </SelectEventContextProvider>
  );
};

export default ActivityCalender;
