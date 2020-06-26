import React from 'react';
import { Container } from 'react-bootstrap';

import style from './styles/style.scss';

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.clickhandler = this.clickhandler.bind(this);
  }

  clickhandler(e) {
    this.props.onStatusChange(this.props.row, this.props.col);
  }

  setonoff() {
    return (this.props.onoff) ? style.yellow : '';
  }
  render() {
    return <div className={style.block + " " + this.setonoff()} onClick={this.clickhandler} />;
  }
}

class Lightout extends React.Component {
  constructor(props) {
    super(props);
    this.statusChange = this.statusChange.bind(this);
    this.state = {
      matrix: [[true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true],
      [true, true, true, true, true]],
    };
  }

  statusChange(row, col) {
    console.log(row, col);

    let tmp = [...this.state.matrix];
    tmp[row][col] = !tmp[row][col];
    if (row > 0) {
      tmp[row - 1][col] = !tmp[row - 1][col];
    }
    if (row < this.state.matrix.length - 1) {
      tmp[row + 1][col] = !tmp[row + 1][col];
    }
    if (col > 0) {
      tmp[row][col - 1] = !tmp[row][col - 1];
    }
    if (col < this.state.matrix[row].length - 1) {
      tmp[row][col + 1] = !tmp[row][col + 1];
    }

    this.setState({ matrix: tmp });
  }

  getStatus(row, col) {
    return this.state.matrix[row][col]
  }

  drawCol(rowItem, i) {
    const colItems = rowItem.map((item, j) => <Block onStatusChange={this.statusChange} onoff={this.getStatus(i, j)} row={i} col={j} key={i + ":" + j} />)
    return (
      <div key={i.toString()}>
        {colItems}
      </div>
    )
  }

  render() {
    return (
      <Container>
        {this.state.matrix.map((rowitem, i) => this.drawCol(rowitem, i))}
      </Container>
    );
  }
}

export default Lightout;
