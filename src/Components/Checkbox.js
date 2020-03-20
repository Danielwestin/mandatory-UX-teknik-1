import React from 'react';
import CheckIcon from '@material-ui/icons/Check';

export default function Checkbox() {
	return (
		<React.Fragment>
			<div className="fakebox__wrapper">
				<input
					id="checkbox"
					className="fakebox__checkbox"
					type="checkbox"
				/>
				<CheckIcon />
				<div className="fakebox" />
			</div>
		</React.Fragment>
	);
}
