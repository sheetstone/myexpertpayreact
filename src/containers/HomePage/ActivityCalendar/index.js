import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingIndicator from 'components/LoadingIndicator';

import { getEvents } from 'api/eventsApi';
import moment from 'moment';

import Week from './Week';
import WeekHeaderRow from './WeekHeaderRow';
import CalendarHeader from './CalendarHeader';
import EventDetail from './EventDetail';

import style from './styles/style.scss';

class ActivityCalender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: null,
      isLoading: true,
      month: moment(),
      selectedEvent: null,
      selectedPos: null,
    };

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.disMissSelection = this.disMissSelection.bind(this);
  }

  componentDidMount() {
    getEvents().then(data =>
      this.setState({
        eventsData: data,
        isLoading: false,
      }),
    );
  }

  previous(e) {
    e.stopPropagation();
    const { month } = this.state;

    this.setState({
      month: month.subtract(1, 'month'),
    });
  }

  next(e) {
    e.stopPropagation();
    const { month } = this.state;

    this.setState({
      month: month.add(1, 'month'),
    });
  }

  renderWeeks() {
    const weeks = [];
    let events = [];
    const { month } = this.state;

    let done = false;
    const date = month
      .clone()
      .startOf('month')
      .add('w' - 1)
      .day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const currentMonthEvents = this.getMonthEvent();

    while (!done) {
      events = new Array();
      if (!!currentMonthEvents) {
        currentMonthEvents.forEach(item => {
          if (date.isSame(item.startTime, 'week')||
              date.isBetween(item.startTime,item.endTime)||
              date.isSame(item.endTime, 'week')
          )
            events.push(Object.assign({}, item));
        });
      }

      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          events={events}
          className={style.week}
          selectEvent={(event, item) => this.selectEvent(event, item)}
        />,
      );

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  getMonthEvent() {
    const events = [];
    const { month, eventsData } = this.state;

    if (!!eventsData) {
      eventsData.forEach(item => {
        if (
          month.isSame(item.startTime, 'month') ||
          month.clone().endOf("month").isSame(item.startTime, 'week') ||
          month.clone().startOf('month').isSame(item.startTime, 'week') ||
          month.isSame(item.endTime, 'month') ||
          month.clone().endOf("month").isSame(item.endTime, 'week') ||
          month.clone().startOf('month').isSame(item.endTime, 'week')){
            events.push(Object.assign({}, item));
        }})
    }
    return events;
  }

  selectEvent(event, item) {
    // console.log("clicked");
    // console.log(item.toString());
    // console.log(event.target.getBoundingClientRect());

    event.stopPropagation();
    const rectObj = event.currentTarget.getBoundingClientRect();

    const pos = {
      bottom: rectObj.bottom,
      left: rectObj.left,
      top: rectObj.top,
      right: rectObj.right,
      x: rectObj.x,
      y: rectObj.y,
      height: rectObj.height,
      width: rectObj.width,
    };
    this.setState({
      selectedEvent: Object.assign({}, item),
      selectedPos: pos,
    });
  }
  disMissSelection(e) {
    this.setState({
      selectedEvent: null,
    })
  }

  render() {
    const { isLoading, selectedEvent, selectedPos } = this.state;

    if (isLoading) {
      return <LoadingIndicator />;
    }
    return (
      <Container>
        <section className={style.calendar} onClick={this.disMissSelection}>
          <CalendarHeader month={this.state.month} previous={this.previous} next={this.next} />
          <WeekHeaderRow />
          {this.renderWeeks()}
          <EventDetail selectedEvent={selectedEvent} pos={selectedPos} />
        </section>
      </Container>
    );
  }
}

export default ActivityCalender;
