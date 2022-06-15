import Container from 'react-bootstrap/Container';
import { Link, Outlet } from 'react-router-dom';

const Gamespage = (props) => {
	return (
		<main>
			<Container>
				<Container>
					<h1>Games</h1>
					<Link to="fastrithmetic">Fastrithmetic</Link>
					<Outlet />
				</Container>
			</Container>
		</main>
	);
};

export default Gamespage;
