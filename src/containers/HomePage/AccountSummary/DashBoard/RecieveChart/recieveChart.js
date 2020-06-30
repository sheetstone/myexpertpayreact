import React from 'react';
import Chart from 'react-google-charts';
import PropTypes from 'prop-types';

import classes from './recieveChart.module.scss';

// with google-charts;
const options = {
  title: ' ',
  colors: ['#b2a0bb', '#ddc2ba', '#72bfb3', '#759992', '#D9B797', '#D7C4C9',
          '#BFAAC9','#82ABDB'],
  pieHole: 0.4,
  is3D: false,
};

const RecieveChart = (props) =>{
  const {dashboardType, chartType, paymentData} = props;


  const getChartData = () => {
    let status;
    switch (dashboardType) {
      case 'recieved':
        status = 0;
        break;
      case 'sent':
        status = 1;
        break;
      default:
        status = 0;
    }
    switch (chartType) {
      case 1: // Recipent selected
        return getChartDataByKey('name', status);
      case 2: // Bank selected
        return getChartDataByKey('bank', status);
      case 3: // Case selected
        return getChartDataByKey('casenumber', status);
      case 4: // Categoray selected
        return getChartDataByKey('catgory', status);
      default:
        break;
    }
  }

  const getChartDataByKey = (key, sta) => {
    const keylist = [];
    const fineddata = [[key, 'Amount']];

    if (!!paymentData === false) return 0;
    //console.log(paymentData);
    paymentData.forEach(item => {
      if (!keylist.includes(item[key])) {
        keylist.push(item[key]);
      }
    });
    const group = keylist.map(item => {
      let sum = 0;
      paymentData.forEach(piece => {
        if (piece[key] === item && piece.status === sta) {
          sum += parseFloat(piece.amount);
        }
      });
      return [item, sum];
    });
    return fineddata.concat(group);
  }

  return (
    <div>
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={getChartData()}
        options={options}
        className={classes.Piechart}
      />
    </div>
  );
}

RecieveChart.propTypes = {
  dashboardType: PropTypes.oneOf(['recieved','sent']).isRequired,
  chartType: PropTypes.number.isRequired,
  paymentData: PropTypes.array.isRequired,
}

export default RecieveChart;
