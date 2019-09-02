import React from 'react';
import classes from './BuildControl.css';

const BuildControl = props => {
    return (
        <div className={classes.BuildControl}>
            <button
                className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled}
            >
                کمتر
            </button>
            <button className={classes.More} onClick={props.added}>
                بیشتر
            </button>
            <div className={classes.Label}>{props.label}</div>
        </div>
    );
};

export default BuildControl;
