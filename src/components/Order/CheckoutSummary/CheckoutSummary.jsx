import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = props => {
    return (
        <div className={classes.CheckoutSummary}>
            <h2>
                {' '}
                <span role='img' aria-label='smiling face'>
                    😊
                </span>{' '}
                امیدواریم از این برگر لذت ببرید{' '}
            </h2>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType='Danger' clicked={props.checkoutCancelled}>
                لغو
            </Button>
            <Button btnType='Success' clicked={props.checkoutContinued}>
                ادامه
            </Button>
        </div>
    );
};

export default checkoutSummary;
