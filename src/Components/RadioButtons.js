import React from 'react';

export default function RadioButtons() {
	return (
		<React.Fragment>
			<div className="radioWrapper">
				<div className="radio">
					<label htmlFor="bira1" />
					<input
						type="radio"
						name="bira"
						id="bira1"
						className="radio__input"
					/>
					<div className="radio__fake" />
				</div>
				<div className="radio">
					<label htmlFor="bira2" />
					<input
						type="radio"
						name="bira"
						id="bira2"
						className="radio__input"
					/>
					<div className="radio__fake" />
				</div>
			</div>
		</React.Fragment>
	);
}
