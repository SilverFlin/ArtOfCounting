//React
import React, { useState } from 'react';

// React external libraries
import useSound from 'use-sound';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';

// Components
import GameContainer from '../Games/GameContainer';
import BackLink from '../UI/BackLink';

// Resources
import clickSfx from '../Sounds/clickSfx.mp3';

//Styles
import '../Styles/styles.css';

const Fastrithmetic = () => {
	//Effects
	const [ playSfx ] = useSound(clickSfx, { volume: 0.5 });

	//useState
	const [ responseValue, setResponseValue ] = useState('');
	const [ currentOperation, setCurrentOperation ] = useState(new Operation());

	//Operaiton Logic
	const operations = [ '+', '-', 'x', '/' ];
	class Operation {
		constructor(first, second, operation) {
			this.firstOperation = Math.floor(Math.random() * 100);
			this.secondOperation = Math.floor(Math.random() * 100);
			this.operationType = operations[Math.floor(Math.random() * 4)];
			this.result = this.calcResult();
		}
		calcResult() {
			if (this.operationType === '+') {
				return this.firstOperation + this.secondOperation;
			} else if (this.operationType === 'x') {
				this.secondOperation = Math.floor(Math.random() * 25) + 1;
				return this.firstOperation * this.secondOperation;
			} else if (this.operationType === '/') {
				while (this.firstOperation % this.secondOperation !== 0) {
					this.firstOperation = Math.floor(Math.random() * 100);
					this.secondOperation = Math.floor(Math.random() * 50);
				}
				return this.firstOperation / this.secondOperation;
			} else if (this.operationType === '-') {
				while (this.firstOperation - this.secondOperation < 0) {
					this.firstOperation = Math.floor(Math.random() * 100);
					this.secondOperation = Math.floor(Math.random() * 100);
				}
				return this.firstOperation - this.secondOperation;
			}
		}
	}

	// Check input each key press to validate answer
	const answerHandler = (evt) => {
		setResponseValue(evt.target.value);
		console.log(currentOperation.result);
		if (parseInt(evt.target.value) === currentOperation.result) {
			setCurrentOperation(new Operation());
			setResponseValue('');
			playSfx();
		}
	};

	// Result
	return (
		<main>
			<Container>
				<BackLink backTo="Games" />

				<h4>
					Fastrithmetic<Badge pill bg="primary">
						New
					</Badge>
				</h4>

				<GameContainer>
					<Container style={{ display: 'flex', marginBottom: '6m', flexDirection: 'column' }}>
						<Form.Label>
							{`${currentOperation.firstOperation} ${currentOperation.operationType} ${currentOperation.secondOperation}`}
						</Form.Label>
						<Form.Control onChange={answerHandler} type="text" value={responseValue} />
					</Container>
				</GameContainer>
			</Container>
		</main>
	);
};
export default Fastrithmetic;
