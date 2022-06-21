import GameContainer from '../Games/GameContainer';
import BackLink from '../UI/BackLink';

import useSound from 'use-sound';
import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import clickSfx from '../Sounds/clickSfx.mp3';
import '../Styles/styles.css';

const Fastrithmetic = () => {
	const [ playSfx ] = useSound(clickSfx, { volume: 0.5 });
	const operations = [ '+', '-', 'x', '/' ];
	// const audioPlayer = useRef(null);
	// const pointsSound = new Audio('../Sounds/notif.mp3');
	class Operation {
		constructor(first, second, operation) {
			// need to be randomized
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

	// const resultCalc = (firstOp, operation, secondOp) => {
	// 	//random
	// 	console.log(firstOp, operation, secondOp);
	// 	return 123;
	// };
	const [ responseValue, setResponseValue ] = useState('');
	const [ currentOperation, setCurrentOperation ] = useState(new Operation());
	const [ currentInput, setCurrentInput ] = useState('');

	// const [ notifSound, setNotifSound ] = useEffect('');
	//resultCalc(this.firstOp, this.operation, this.secondOp)

	// const submitHandler = (e) => {
	// 	e.preventDefault();
	// 	console.log(responseValue, currentOperation);
	// };

	const answerHandler = (evt) => {
		setResponseValue(evt.target.value);
		console.log(currentOperation.result);

		if (parseInt(evt.target.value) === currentOperation.result) {
			setCurrentOperation(new Operation());
			setResponseValue('');
			playSfx();
			// audioPlayer.current.play();
		}
	};

	// const playAudio = () => {
	// 	audioPlayer.current.play();
	// };

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
						{/* <button onClick={playAudio} /> */}
						{/* <audio controls ref={audioPlayer} src={notif} /> */}
					</Container>
				</GameContainer>
			</Container>
		</main>
	);
};
export default Fastrithmetic;
