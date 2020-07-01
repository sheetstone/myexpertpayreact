import React from 'react';
import classes from './activityCalendar.module.scss';

function WeekHeaderRow(props) {
    return (
      <div className={classes.headerweek}>
        <div className={classes.headerday}>Sun</div>
        <div className={classes.headerday}>Mon</div>
        <div className={classes.headerday}>Tue</div>
        <div className={classes.headerday}>Wed</div>
        <div className={classes.headerday}>Thu</div>
        <div className={classes.headerday}>Fri</div>
        <div className={classes.headerday}>Sat</div>
      </div>
    );
}


export default WeekHeaderRow;
