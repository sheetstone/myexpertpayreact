import React from 'react';
import moment from 'moment';

import drawDot from './drawDot';
import style from './styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUser, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

function EventDetail(props) {
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
        <div className={style.rightcol}>
          <div className={style.eventDate}>{mStart.format("dddd, MMMM DD, YYYY")}</div>
          <div className={style.eventTime}>{mStart.format("hh:mm a")} to {mEnd.format("hh:mm a")} <span className={style.eventlasting}>{lastingMsg}</span></div>
        </div>
      );
    } else {
      const diff = mEnd.diff(mStart, 'days');
      msg = (
        <div className={style.rightcol}>
          <div className={style.eventDate}>{mStart.format("dddd, MMMM DD, YYYY")}</div>
          <div className={style.eventDate}>{mEnd.format("dddd, MMMM DD, YYYY")}</div>
          <div className={style.eventlasting}>({ (diff == 0)?1:diff } Days)</div>
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

  const posStyle = {
    top: pos.y - 130 + window.pageYOffset + "px",
    left: posLeft,
  };

  return (
    <div className={style.eventDetail} style={posStyle}>
      <div className={style.eventHeader}>
        <div className={style.leftcol}>{drawDot(0)}</div>
        <div className={style.rightcol}>{eventName}</div>
      </div>
      <div className={style.eventRow}>
        <div className={style.leftcol}>
          <FontAwesomeIcon icon={faClock} color="#b2a0bb" />
        </div>
        {eventTimeMSG()}
      </div>
      <div className={style.eventRow}>
        <div className={style.leftcol}>
          <FontAwesomeIcon icon={faUser} color="#b2a0bb" />
        </div>
        <div className={style.rightcol}>
          <span className={style.eventsInviter}>{inviter}</span>
          <span className={style.invitmeg}>&nbsp; has invited you.</span>
        </div>
      </div>
      <div className={style.eventRow}>
        <div className={style.leftcol}>
          <FontAwesomeIcon icon={faLocationArrow} color="#b2a0bb" />
        </div>
        <div className={style.rightcol}>
          {location}
        </div>
      </div>
      <span className={style.trangle}></span>
    </div>
  );
}

export default EventDetail;
