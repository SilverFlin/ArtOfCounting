import GameProgress from './GameProgress';

import Container from 'react-bootstrap/Container';

const GameContainer = (props) => {
	return (
		<Container className="border mx-auto" style={{ width: '800px', height: '300px' }}>
			<p className="fs-4">Score: {props.score}</p>
			{props.children}

			<GameProgress className="align-self-end" />
		</Container>
	);
};

export default GameContainer;
