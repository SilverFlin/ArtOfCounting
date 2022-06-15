import React, { useState } from 'react';

import Game from './Game/Game';
import Homepage from './About/Homepage';

import { Link } from 'react-router-dom';

import NavBar from './UI/NavBar';
import Footer from './UI/Footer';

function App() {
	return (
		<div>
			<div>
				<h1>Bookkeeper</h1>
				<nav
					style={{
						borderBottom: 'solid 1px',
						paddingBottom: '1rem'
					}}
				>
					<Link to="/invoices">Invoices</Link> | <Link to="/expenses">Expenses</Link>
				</nav>
			</div>
			<NavBar />
			<Game />
			<Homepage />
			<Footer fixed="bottom" />
		</div>
	);
}

export default App;
