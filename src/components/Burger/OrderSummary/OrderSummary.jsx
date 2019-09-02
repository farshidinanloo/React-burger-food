import React, { Fragment } from 'react';
import Button from './../../UI/Button/Button';

const OrderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
		let newIgKey;
		switch (igKey) {
			case 'salad':
				newIgKey = 'سالاد';
				break;
			case 'bacon':
				newIgKey = 'بیکن';
				break;
			case 'cheese':
				newIgKey = 'پنیر';
				break;
			case 'meat':
				newIgKey = 'گوشت';
				break;
			default:
				return (newIgKey = igKey);
		}

		return (
			<li
				key={igKey}
				style={{
					lineHeight: '1.8rem',
					fontWeight: 'bold'
				}}
			>
				<span>{newIgKey}</span> : {props.ingredients[igKey]}
			</li>
		);
	});
	return (
		<Fragment>
			<h3>سفارش شما</h3>
			<p>مشخصات برگر انتخاب شده شما</p>

			<ul>{ingredientSummary}</ul>

			<p style={{ backgroundColor: '#eee' }}>
				<strong
					style={{
						fontWeight: 'bold'
					}}
				>
					مبلغ کل: {props.price.toFixed(3)} تومان
				</strong>
			</p>

			<p>ادامه خرید؟</p>
			<Button btnType='Success' clicked={props.purchaseContinued}>
				ادامه
			</Button>
			<Button btnType='Danger' clicked={props.purchaseCancelled}>
				لغو
			</Button>
		</Fragment>
	);
};

export default OrderSummary;
