import React from 'react';

export default function Switch() {
	return (
		<React.Fragment>
			<form className="checkbox-form">
				<input
					type="checkbox"
					className="switch"
					name="checkbox"
					required
				/>
			</form>
		</React.Fragment>
	);
}
