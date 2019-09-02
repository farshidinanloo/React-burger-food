import React from 'react';
import classes from './Order.css';

const Order = props => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map(ig => {
        let newIg;
        switch (ig.name) {
            case 'salad':
                newIg = 'سالاد';
                break;
            case 'bacon':
                newIg = 'بیکن';
                break;
            case 'cheese':
                newIg = 'پنیر';
                break;
            case 'meat':
                newIg = 'گوشت';
                break;
            default:
                return (newIg = ig);
        }
        return (
            <span
                style={{
                    display: 'inline-block',
                    margin: '0 8px',
                    padding: '5px'
                }}
                key={ig.name}
            >
                {newIg} : {ig.amount}
            </span>
        );
    });
    return (
        <div className={classes.Order}>
            <p>
                <strong>مشخصات برگر</strong> : {ingredientOutput}
            </p>
            <p>
                <strong> مبلغ پرداختی:</strong>{' '}
                {Number.parseFloat(props.price).toFixed(3)} تومان
            </p>
        </div>
    );
};

export default Order;
