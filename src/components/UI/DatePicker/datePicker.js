import React, { useState } from "react";
import PropTypes from "prop-types";

import Calendar from "react-calendar";
import moment from "moment";
import classes from "./datePicker.module.scss";

const DatePicker = (props) => {
  const [date, setDate] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);

  const onChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
    // this.props.onValueChange(date, this.props.name);
  };

  const onFocus = (e) => {
    setShowCalendar(true);
  };

  const onBlur = (e) => {
    if (!e.currentTarget.parentElement.contains(e.relatedTarget)) {
      setShowCalendar(false);
    }
  };
  const { name, label, id, value } = props;

  const newdate = moment(value);

  return (
    <div
      className={`${classes.calendarGroup} ${
        showCalendar ? classes.bringUp : ""
      }`}
    >
      <label htmlFor={id} className={classes.calendarlabel}>
        {label}
      </label>
      <input
        value={newdate.format("YYYY-MM-DD")}
        className={classes.datepickerinput}
        id={id}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Calendar
        onChange={onChange}
        value={new Date(value)}
        className={showCalendar ? classes.calendar : classes.hide}
      />
    </div>
  );
};

DatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  valueChanged: PropTypes.func,
};

export default DatePicker;
