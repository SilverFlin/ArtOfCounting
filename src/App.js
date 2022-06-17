import React, { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';

import NavBar from './UI/NavBar';
import Footer from './UI/Footer';

import './Styles/styles.css';

function App() {
	return (
		<React.Fragment>
			<NavBar />

			<Outlet className="outlet" />
			<Footer fixed="bottom" />
		</React.Fragment>
	);
}

export default App;
