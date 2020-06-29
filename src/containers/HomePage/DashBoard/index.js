import React from 'react';
import formatMoney from 'utils/formatMoney';

import RecieveChart from './RecieveChart';
import ChartTypeDropDown from './ChartTypeDropDown';

import style from './styles/style.scss';

// Todo: move context to local file.
const context = [[
  'Money Recieved',
  'Pending Receivable',
  'Recieved chart by:',
], [
  'Money Sent',
  'Pending Payment',
  'Sent Chart by:',
]];


class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.handleChartDropdown = this.handleChartDropdown.bind(this);
    this.state = {
      chartType: 1,
    };
  }

  handleChartDropdown(ctype) {
    this.setState({ chartType: parseInt(ctype) });
  }

  updateDashboardType() {
    const { type } = this.props;
    
    if (type === 'recieved') {
      this.setState({ dashboardtype: 0 });
    }
    if (type === 'sent') {
      this.setState({ dashboardtype: 1 });
    }
  }

  getContext(num) {
    const { type } = this.props;

    if (type === 'recieved') {
      return context[0][num];
    }
    if (type === 'sent') {
      return context[1][num];
    }
  }

  getDoneMoney() {
    let sumRecieved = 0;
    let sumSent = 0;
    const { paymentData, type } = this.props;

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

  getPendingMoney() {
    let sumRecieved = 0;
    let sumSent = 0;
    const { paymentData, type } = this.props;

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

  render() {
    return (
      <div>
        <div className={style.dashboardheading}>
          <h2>{this.getContext(0)}</h2>
          <span className={style.currentmonth}>Oct-2019</span>
        </div>
        <div className={style.dashboardMoney}>
          <span className={style.dollarsign}>$</span>
          <span className={style.generalMoney}>{this.getDoneMoney()}</span>
        </div>
        <div className={style.pending}>
          <span className={style.pendingheader}>$&nbsp;{this.getContext(1)}</span>
          <span className={style.pendingMoney}>$&nbsp;{this.getPendingMoney()}</span>
        </div>
        <div className={style.chart}>
          <span className={style.chartheader}>{this.getContext(2)}</span>
          <ChartTypeDropDown onTypeDropDownChange={this.handleChartDropdown} />
          <RecieveChart charttype={this.state.chartType} dashboardtype={this.props.type} paymentData={this.props.paymentData} />
        </div>
      </div>
    );
  }
}

export default DashBoard;
