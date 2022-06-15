import React, { useState } from 'react';

import Game from './Game/Game';
import Homepage from './About/Homepage';

import NavBar from './UI/NavBar';
import Footer from './UI/Footer';

function App() {
	return (
		<div>
			<NavBar />
			<Game />
			<Homepage />
			<Footer fixed="bottom" />
		</div>
	);
}

export default App;
