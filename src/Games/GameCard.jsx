import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from '../Styles/Homegames.css';
import { Link, Outlet } from 'react-router-dom';
import logo from '../Images/Logo.png';

const GameCard = (props) => {
	return (
		<Col>
			<Card>
				<Card.Img className="imgGame" variant="top" src={props.src || logo} />
				<Card.Body>
					<Card.Title>{props.title}</Card.Title>
					<Card.Text>{props.description}</Card.Text>
				</Card.Body>
				<Button as={Link} to={props.url} variant="primary">
					Play
				</Button>
			</Card>
		</Col>
	);
};

export default GameCard;
