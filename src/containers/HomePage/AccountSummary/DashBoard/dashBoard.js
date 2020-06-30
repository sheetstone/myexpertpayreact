import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import formatMoney from 'utils/formatMoney';
import RecieveChart from './RecieveChart/recieveChart';
import ChartTypeDropDown from './ChartTypeDropDown/chartTypeDropDown';

import classes from './dashBoard.module.scss';

// TODO: move context to locale file.
const context = [[
  'Money Recieved',
  'Pending Receivable',
  'Recieved chart by:',
], [
  'Money Sent',
  'Pending Payment',
  'Sent Chart by:',
]];


const DashBoard = (props) => {
  const [chartType, setChartType] = useState(1);

  const {type, paymentData } = props;

  const handleDropdown = (ctype) => {
    setChartType(parseInt(ctype));
  }

  const getContext = (num) => {
    if (type === 'recieved') {
      return context[0][num];
    }
    if (type === 'sent') {
      return context[1][num];
    }
  }

  const getDoneMoney = () => {
    let sumRecieved = 0;
    let sumSent = 0;

    if (!!paymentData === false) return 0;
    paymentData.forEach(item => {
      if (item.status === 0) {
        sumRecieved += parseFloat(item.amount);
      } else if (item.status === 1) {
        sumSent += parseFloat(item.amount);
      }
    });
    if (type === 'recieved') {
      return formatMoney(sumRecieved);
    }
    if (type === 'sent') {
      return formatMoney(sumSent);
    }
  }

  const getPendingMoney = () => {
    let sumRecieved = 0;
    let sumSent = 0;

    if (!!paymentData === false) return 0;
    paymentData.forEach(item => {
      if (item.status === 2) {
        sumRecieved += parseFloat(item.amount);
      } else if (item.status === 3) {
        sumSent += parseFloat(item.amount);
      }
    });
    if (type === 'recieved') {
      return formatMoney(sumRecieved);
    }
    if (type === 'sent') {
      return formatMoney(sumSent);
    }
  }

  return (
    <div>
      <div className={classes.Header}>
        <h2>{ getContext(0) }</h2>
        <span className={classes.Month}> {moment(new Date()).format('MMM-YYYY')}</span>
      </div>
      <div className={classes.Money}>
        <span className={classes.Dollar}>$</span>
        <span className={classes.BigMoney}>{getDoneMoney()}</span>
      </div>
      <div className={classes.Pending}>
        <span className={classes.PendingHeader}>$&nbsp;{getContext(1)}</span>
        <span className={classes.PendingMoney}>$&nbsp;{getPendingMoney()}</span>
      </div>
      <div className={classes.Chart}>
        <span className={classes.Chartheader}>{getContext(2)}</span>
        <ChartTypeDropDown dropDownChanged={handleDropdown}/>
        <RecieveChart chartType={chartType} dashboardType={type} paymentData={paymentData}/>
      </div>
    </div>
  );
}

DashBoard.propTypes = {
  type: PropTypes.oneOf(['recieved','sent']).isRequired,
  paymentData: PropTypes.array.isRequired,
}

export default DashBoard;
