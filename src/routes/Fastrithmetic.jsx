import GameContainer from '../Games/GameContainer';
import BackLink from '../UI/BackLink';

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import '../Styles/styles.css';

const Fastrithmetic = () => {
	class Operation {
		constructor(first, second, operation) {
			// need to be randomized
			this.firstOperation = first || 5;
			this.secondOperation = second || 3;
			this.operationType = operation || '-';
			this.result = this.calcResult();
		}
		calcResult() {
			return this.firstOperation - this.secondOperation;
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
	//resultCalc(this.firstOp, this.operation, this.secondOp)

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(responseValue, currentOperation);
	};

	const answerHandler = (evt) => {
		setResponseValue(evt.target.value);
		console.log(evt.target.value);
		console.log(responseValue);
		if (parseInt(evt.target.value) === currentOperation.result) {
			setCurrentOperation(new Operation(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), '-'));
		}
		setResponseValue(evt.target.value);
	};

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
					<Container style={{ display: 'flex', marginBottom: '6m' }}>
						<Form onSubmit={submitHandler}>
							<Form.Label>
								{`${currentOperation.firstOperation} ${currentOperation.operationType} ${currentOperation.secondOperation}`}
							</Form.Label>

							<Form.Control onChange={answerHandler} type="text" value={responseValue} />
						</Form>
					</Container>
				</GameContainer>
			</Container>
		</main>
	);
};
export default Fastrithmetic;
