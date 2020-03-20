import React from 'react';
import './styles/App.scss';
import TextField from './Components/TextField';
import Switch from './Components/Switch';
import Checkbox from './Components/Checkbox';
import RadioButtons from './Components/RadioButtons';

function App() {
	function disable() {
		document.querySelector('.textfield__input').disabled = true;
		document.querySelector('.switch').disabled = true;
		document.querySelector('.fakebox__checkbox').disabled = true;

		let radioButtons = document.querySelectorAll('.radio__input');
		for (let buttons of radioButtons) {
			buttons.setAttribute('disabled', true);
		}
	}

	function enable() {
		document.querySelector('.textfield__input').disabled = false;
		document.querySelector('.switch').disabled = false;
		document.querySelector('.fakebox__checkbox').disabled = false;

		let radioButtons = document.querySelectorAll('.radio__input');
		for (let buttons of radioButtons) {
			buttons.removeAttribute('disabled');
		}
	}

	return (
		<React.Fragment>
			<div className="container">
				<div className="container__content">
					<h1>CORONITA</h1>
					<TextField />
					<Switch />
					<Checkbox />
					<RadioButtons />
					<div className="buttons">
						<button
							className="disable__button"
							onClick={() => {
								disable();
							}}
						>
							Disable
						</button>
						<button
							className="enable__button"
							onClick={() => {
								enable();
							}}
						>
							Enable
						</button>
					</div>
				</div>

				<div className="container__corona" />
			</div>
		</React.Fragment>
	);
}

export default App;
