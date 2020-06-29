import React from 'react';

import { COLOR } from '../../globalStyle/_styleConstant';
import classes from './LoadingIndicator.module.scss';

const Brick = (props) => {
  const brickClass=[classes.Brick, classes['brick'+props.bricknum]].join(' ');
  return (
    <div className={brickClass}
        style={{background: `${props.color}`}}>    
    </div>
  )
}

const LoadingIndicator = () => (
  <div className={classes.Wrapper}>
    <Brick color={COLOR.PRIMARY} bricknum="1"/>
    <Brick color={COLOR.SECONDARY} bricknum="2"/>
    <Brick color={COLOR.WARNING} bricknum="3"/>
  </div>
);

export default LoadingIndicator;
