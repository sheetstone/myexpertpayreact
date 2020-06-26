import React from 'react';

import style from './styles/style.scss';

// traditional HTML 5 solution backup
const recievedmoney = [
  {
    name: 'David Doe',
    amount: 134.22,
  },
  {
    name: 'Steve Sailor',
    amount: 400.33,
  },
  {
    name: 'John Joe',
    amount: 300.22,
  },
];

const colorScheme = [
  '#000000',
  '#b2a0bb',
  '#ddc2ba',
  '#72bfb3',
  '#3C8F80',
  '#E6B68A',
  '#E68AA0',
];

class RecieveChart extends React.Component {
  constructor(props) {
    super(props);
    this.dashBoardChart = React.createRef();
  }

  componentDidMount() {
    this.drawPieChart();
  }

  drawPieChart() {
    const canvas = this.dashBoardChart.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = 200;
    const radius1 = 70;
    const radius2 = 150;

    const stoppoint = this.getPercentage();

    for (let i = 1; i < stoppoint.length; i++) {
      this.drawPieSlice(
        ctx,
        centerX,
        centerY,
        radius2,
        stoppoint[i - 1] * 2 * Math.PI - (1 / 2) * Math.PI,
        stoppoint[i] * 2 * Math.PI - (1 / 2) * Math.PI,
        colorScheme[i],
      );
    }

    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius1, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  getPercentage() {
    const percent = [0];
    let sum = 0;
    recievedmoney.forEach(item => {
      sum += item.amount;
    });

    let sumper = 0;
    recievedmoney.forEach(item => {
      sumper += item.amount / sum;
      percent.push(sumper);
    });

    return percent;
  }

  drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }

  render() {
    return (
      <div>
        <span>Recieved chart by:</span>
        <span>Recipients</span>
        <div className="chart">
          <canvas ref={this.dashBoardChart} width="480" height="480" />
        </div>
      </div>
    );
  }
}

export default RecieveChart;
