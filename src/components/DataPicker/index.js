import React from 'react';

import Calendar from 'react-calendar';
import moment from 'moment';
import style from './styles/style.scss';

class DataPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.value,
      showStartCalendar: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onChange(date) {
    this.setState({ date:moment(date) });
    this.setState({ showStartCalendar: false });
    this.props.onValueChange(date, this.props.name);
  }

  onFocus(e) {
    this.setState({ showStartCalendar: true });
  }

  onBlur(e) {
    if (!e.currentTarget.parentElement.contains(e.relatedTarget)) {
      this.setState({ showStartCalendar: false });
    }
  }

  render() {
    let {date} = this.state;
    const { name,label,id } = this.props;
    return (
      <div className={`${style.calendarGroup} ${(this.state.showStartCalendar)?style.bringUp:""}`}>
        <label htmlFor={id} className={style.calendarlabel}>{label}</label>
        <input value={date.format('YYYY-MM-DD')} className={style.datapickerinput} id={id}
          name={name}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
        <Calendar
          onChange={this.onChange}
          value={new Date(date)}
          className={(this.state.showStartCalendar)?style.calendar:style.hide}
        />
      </div>
    );
  }
}

export default DataPicker;
