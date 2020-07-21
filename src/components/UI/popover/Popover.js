import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

import classes from './Popover.module.scss'

const Popoverbox = (props) => {
    const {tooltip, isValid=true} = props;
    const tooltipClass = [classes.infoBtn, isValid?null:classes.isValid].join(' ');


    return (    
        <>
            <OverlayTrigger
                trigger="click"
                placement='right'
                overlay={
                    <Popover id={'tooltip-' + tooltip.title}>
                        <Popover.Title as="h3">{tooltip.title}</Popover.Title>
                        <Popover.Content>
                            {tooltip.content}
                        </Popover.Content>
                    </Popover>
                }>
                <button className={tooltipClass}></button>
            </OverlayTrigger>
        </>)
}

export default Popoverbox