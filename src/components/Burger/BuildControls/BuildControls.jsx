import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'سالاد', type: 'salad' },
    { label: 'بیکن', type: 'bacon' },
    { label: 'پنیر', type: 'cheese' },
    { label: 'گوشت', type: 'meat' }
];

const BuildControls = props => {
    return (
        <div className={classes.BuildControls}>
            <p>
                مبلغ فعلی : <strong>{props.price.toFixed(3)} تومان</strong>{' '}
            </p>
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}
            >
                {props.isAuth ? 'سفارش' : 'برای ادامه ثبت نام کنید'}
            </button>
        </div>
    );
};

export default BuildControls;
