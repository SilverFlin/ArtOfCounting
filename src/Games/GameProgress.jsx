import ProgressBar from 'react-bootstrap/ProgressBar';

const GameProgress = (props) => {
	const now = 60;
	return <ProgressBar now={now} label={`${now}%`} />;
};

export default GameProgress;
