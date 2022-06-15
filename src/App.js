import React, { useState } from 'react';

import { Outlet, Link } from 'react-router-dom';

import NavBar from './UI/NavBar';
import Footer from './UI/Footer';

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Outlet />
			<Footer fixed="bottom" />
		</React.Fragment>
	);
}

export default App;
