import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Homepage = (props) => {
	return (
		<main>
			<Container>
				<Link to="../">Back Home</Link>

				<h1>Page not found</h1>
			</Container>
		</main>
	);
};

export default Homepage;
