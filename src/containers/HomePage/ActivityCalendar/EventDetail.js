import React, { useContext } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUser,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

import { SelectEventContext } from "./selectEvent-context";
import drawDot from "../../../components/UI/drawDot/drawDot";

import classes from "./activityCalendar.module.scss";

const EventDetail = () => {
  const { selectedEvent, selectedPos } = useContext(SelectEventContext);

  if (selectedEvent === null) {
    return <></>;
  }

  const { eventName, startTime, endTime, inviter, location } = selectedEvent;

  let posLeft = "";
  if (selectedPos.left > window.innerWidth / 2) {
    posLeft = selectedPos.left - 5 - 390 + "px";
  } else {
    posLeft = selectedPos.left + selectedPos.width + 5 + "px";
  }

  const posStyle = {
    top: selectedPos.y - 130 + window.pageYOffset + "px",
    left: posLeft,
  };

  const Header = (headerProps) => (
    <div className={classes.eventHeader}>{headerProps.children}</div>
  );

  const Row = (rowProps) => (
    <div className={classes.eventRow}>{rowProps.children}</div>
  );

  const Left = (leftProps) => (
    <div className={classes.leftcol}>{leftProps.children}</div>
  );

  const Right = (rightProps) => (
    <div className={classes.rightcol}>{rightProps.children}</div>
  );

  const eventTimeMSG = () => {
    const mStart = moment(startTime);
    const mEnd = moment(endTime);
    let msg;

    if (mStart.isSame(mEnd, "day")) {
      let lastingMsg;
      if (mEnd.diff(mStart, "minutes") >= 60) {
        lastingMsg = "(" + mEnd.diff(mStart, "hours") + " Hours)";
      } else {
        lastingMsg = "(" + mEnd.diff(mStart, "minutes") + " Minutes)";
      }

      msg = (
        <>
          <div className={classes.eventDate}>
            {mStart.format("dddd, MMMM DD, YYYY")}
          </div>
          <div className={classes.eventTime}>
            {mStart.format("hh:mm a")} to {mEnd.format("hh:mm a")}{" "}
            <span className={classes.eventlasting}>{lastingMsg}</span>
          </div>
        </>
      );
    } else {
      const diff = mEnd.diff(mStart, "days");
      msg = (
        <>
          <div className={classes.eventDate}>
            {mStart.format("dddd, MMMM DD, YYYY")}
          </div>
          <div className={classes.eventDate}>
            {mEnd.format("dddd, MMMM DD, YYYY")}
          </div>
          <div className={classes.eventlasting}>
            ({diff === 0 ? 1 : diff} Days)
          </div>
        </>
      );
    }
    return msg;
  };

  return (
    <div className={classes.eventDetail} style={posStyle}>
      <Header>
        <Left>{drawDot(0)}</Left>
        <Right>{eventName}</Right>
      </Header>
      <Row>
        <Left>
          <FontAwesomeIcon icon={faClock} color="#b2a0bb" />
        </Left>
        <Right>{eventTimeMSG()}</Right>
      </Row>
      <Row>
        <Left>
          <FontAwesomeIcon icon={faUser} color="#b2a0bb" />
        </Left>
        <Right>
          <span className={classes.eventsInviter}>{inviter}</span>
          <span className={classes.invitmeg}>&nbsp; has invited you.</span>
        </Right>
      </Row>
      <Row>
        <Left>
          <FontAwesomeIcon icon={faLocationArrow} color="#b2a0bb" />
        </Left>
        <Right>{location}</Right>
      </Row>
      <span className={classes.trangle /*TODO: make trangle work*/}></span>
    </div>
  );
};

export default EventDetail;
