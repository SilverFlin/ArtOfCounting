import Container from 'react-bootstrap/Container';

import Row from 'react-bootstrap/Row';

import GameCard from '../Games/GameCard';
import { Outlet } from 'react-router-dom';
import gif from '../Images/Testcard.gif';

const Gamespage = (props) => {
	return (
		<main>
			<Container>
				<Container>
					<h1>Games</h1>
					<Row sm={3} xs={1} md={4} className="g-4">
						<GameCard title="Fastrithmetic" description="Description" url="fastrithmetic" src={gif} />
						<GameCard title="Another Game" description="AAAA" url="aaa" src="" />
					</Row>

					<Outlet />
				</Container>
			</Container>
		</main>
	);
};

export default Gamespage;
