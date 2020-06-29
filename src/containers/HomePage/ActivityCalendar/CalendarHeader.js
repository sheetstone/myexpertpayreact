import React from 'react';
import style from './styles/style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function CalendarHeader(props) {
  const { month, previous, next } = props;

  return (
    <header className={style.header}>
      <span onClick={previous} className={style.arrowIconBtn}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      <span className={style.monthLabel}>{month.format("MMMM YYYY")}</span>
      <span onClick={next} className={style.arrowIconBtn}>
        <FontAwesomeIcon icon={faChevronRight} />
      </span>

    </header>
  );
}

export default CalendarHeader;
