import React from 'react';
import style from './styles/style.scss';

function WeekHeaderRow(props) {
    return (
      <div className={style.headerweek}>
        <div className={style.headerday}>Sun</div>
        <div className={style.headerday}>Mon</div>
        <div className={style.headerday}>Tue</div>
        <div className={style.headerday}>Wed</div>
        <div className={style.headerday}>Thu</div>
        <div className={style.headerday}>Fri</div>
        <div className={style.headerday}>Sat</div>
      </div>
    );
}


export default WeekHeaderRow;
