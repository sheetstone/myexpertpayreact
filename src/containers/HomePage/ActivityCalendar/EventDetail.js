import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

import drawDot from './drawDot';
import classes from './activityCalendar.module.scss';

const EventDetail = (props) => {
  const { selectedEvent, pos } = props;

  if (selectedEvent == null) {
    return <div />;
  }

  const { eventName, startTime, endTime, inviter, location } = selectedEvent;

  const eventTimeMSG = () => {
    const mStart = moment(startTime);
    const mEnd = moment(endTime);
    let msg;

    if (mStart.isSame(mEnd, 'day')) {
      // console.log('sameday');
      let lastingMsg;
      if (mEnd.diff(mStart, 'minutes') >= 60){
        lastingMsg = "("+ mEnd.diff(mStart, 'hours') + " Hours)";
      } else {
        lastingMsg = "("+ mEnd.diff(mStart, 'minutes') + " Minutes)";
      }

      msg = (
        <div className={classes.rightcol}>
          <div className={classes.eventDate}>{mStart.format("dddd, MMMM DD, YYYY")}</div>
          <div className={classes.eventTime}>{mStart.format("hh:mm a")} to {mEnd.format("hh:mm a")} <span className={classes.eventlasting}>{lastingMsg}</span></div>
        </div>
      );
    } else {
      const diff = mEnd.diff(mStart, 'days');
      msg = (
        <div className={classes.rightcol}>
          <div className={classes.eventDate}>{mStart.format("dddd, MMMM DD, YYYY")}</div>
          <div className={classes.eventDate}>{mEnd.format("dddd, MMMM DD, YYYY")}</div>
          <div className={classes.eventlasting}>({ (diff === 0)?1:diff } Days)</div>
        </div>
      );
    }
    return msg;
  }

  // console.log(pos);
  let posLeft = "";
  if (pos.left > window.innerWidth / 2) {
    posLeft = pos.left - 5 - 390 +  "px";
  } else {
    posLeft = pos.left + pos.width + 5 +  "px";
  }

  const posclasses = {
    top: pos.y - 130 + window.pageYOffset + "px",
    left: posLeft,
  };

  return (
    <div className={classes.eventDetail} classes={posclasses}>
      <div className={classes.eventHeader}>
        <div className={classes.leftcol}>{drawDot(0)}</div>
        <div className={classes.rightcol}>{eventName}</div>
      </div>
      <div className={classes.eventRow}>
        <div className={classes.leftcol}>
          <FontAwesomeIcon icon={faClock} color="#b2a0bb" />
        </div>
        {eventTimeMSG()}
      </div>
      <div className={classes.eventRow}>
        <div className={classes.leftcol}>
          <FontAwesomeIcon icon={faUser} color="#b2a0bb" />
        </div>
        <div className={classes.rightcol}>
          <span className={classes.eventsInviter}>{inviter}</span>
          <span className={classes.invitmeg}>&nbsp; has invited you.</span>
        </div>
      </div>
      <div className={classes.eventRow}>
        <div className={classes.leftcol}>
          <FontAwesomeIcon icon={faLocationArrow} color="#b2a0bb" />
        </div>
        <div className={classes.rightcol}>
          {location}
        </div>
      </div>
      <span className={classes.trangle}></span>
    </div>
  );
}

export default EventDetail;
