import React, { useState } from "react";
import PropTypes from "prop-types";

import Calendar from "react-calendar";
import moment from "moment";
import classes from "./datePicker.module.scss";

const DatePicker = (props) => {
  const [date, setDate] = useState(new Date(props.value));
  const [showCalendar, setShowCalendar] = useState(false);
  const { name, label, id, value, onValueChange } = props;
  console.log(name, value)

  const onChange = (newDate) => {
    setDate(newDate);
    setShowCalendar(false);
    onValueChange(date, this.props.name);
  };

  const onFocus = (e) => {
    setShowCalendar(true);
  };

  const onBlur = (e) => {
    if (!e.currentTarget.parentElement.contains(e.relatedTarget)) {
      setShowCalendar(false);
    }
  };

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
        value={moment(date).format("MM-DD-YYYY")}
        className={classes.datepickerinput}
        id={id}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      <Calendar
        onChange={onChange}
        value={date}
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
