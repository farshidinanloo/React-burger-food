import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            {!props.isAuthenticated ? (
                <NavigationItem link='/auth'>ورود</NavigationItem>
            ) : (
                <NavigationItem link='/logout'>خروج</NavigationItem>
            )}
            {props.isAuthenticated ? (
                <NavigationItem link='/orders'>سفارشات</NavigationItem>
            ) : null}
            <NavigationItem link='/' exact>
                ساخت برگر
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;
