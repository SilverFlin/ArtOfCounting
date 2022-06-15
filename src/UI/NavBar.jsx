import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
	const linkClass = 'text-decoration-none text-reset';

	return (
		<div>
			<Navbar bg="light" expand="lg" sticky="top">
				<Container>
					<Navbar.Brand>Art of Counting</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav variant="tabs" defaultActiveKey="link-1">
							<Nav.Item>
								<Nav.Link eventKey="link-1" as={'div'}>
									<Link className={linkClass} to="/home">
										Home
									</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-2" as={'div'}>
									<Link className={linkClass} to="/games">
										Games
									</Link>
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="link-3" disabled as={'div'}>
									<Link className={linkClass} to="/Interactive">
										Interactive
									</Link>
								</Nav.Link>
							</Nav.Item>

							{/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown> */}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<br />
		</div>
	);
}

export default NavBar;
