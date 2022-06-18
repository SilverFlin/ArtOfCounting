import GameContainer from '../Games/GameContainer';
import BackLink from '../UI/BackLink';

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';

import '../Styles/styles.css';

const Fastrithmetic = () => {
	const resultCalc = (firstOp, operation, secondOp) => {
		//random
		console.log(firstOp, operation, secondOp);
		return 123;
	};
	const [ responseValue, setResponseValue ] = useState('');
	const [ currentOperation, setCurrentOperation ] = useState({
		firstOp: 1,
		operation: 'Addition',
		secondOp: 1,
		result: 123
	});
	//resultCalc(this.firstOp, this.operation, this.secondOp)

	const answerHandler = (evt) => {
		setResponseValue(evt.target.value);
		if (parseInt(responseValue) === currentOperation.result) {
			//repsonseValue only numb
			console.log(currentOperation);
			setCurrentOperation({
				firstOp: 2, // random floor
				operation: 'Substraction', // random array 1-3
				secondOp: 1, // random floor
				result: 321
			});
		}
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
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Answer</Form.Label>
							<Form.Control
								// onKeyUp={(this.value = this.value.replace(/[^\d]/, ''))}
								onKeyDownCapture={answerHandler}
								type="text"
								placeholder="Answer"
								defaultValue={''}
							/>
						</Form.Group>
					</Container>
				</GameContainer>
			</Container>
		</main>
	);
};
export default Fastrithmetic;
