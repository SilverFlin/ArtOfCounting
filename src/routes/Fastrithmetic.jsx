import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

const Fastrithmetic = () => {
	return (
		<Container>
			<Link to="../">Back to Games</Link>
			<hr />
			<h4>
				Fastrithmetic{' '}
				<Badge pill bg="primary">
					New
				</Badge>
			</h4>
		</Container>
	);
};
export default Fastrithmetic;
