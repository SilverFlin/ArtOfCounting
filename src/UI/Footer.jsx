import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Images from '../Images/GitHubLogo.png';

function Footer() {
	return (
		<div>
			<br />
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="https://github.com/SilverFlin">
						<img alt="" src={Images} width="30" height="30" className="d-inline-block align-top" /> ~
						SilverFlin
					</Navbar.Brand>
				</Container>
			</Navbar>
		</div>
	);
}

export default Footer;
