import React from 'react';

export default function TextField() {
	return (
		<React.Fragment>
			<form className="textfield-form">
				<input
					type="text"
					name="textfield"
					autoComplete="off"
					className="textfield__input"
					required
					autoFocus
				/>
				<label htmlFor="textfield" className="form__label">
					<span className="form__label__span">Corona?</span>
				</label>
			</form>
		</React.Fragment>
	);
}
