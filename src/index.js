import ReactDOM from 'react-dom/client';

//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gamespage from './routes/Gamespage';
import Homepage from './routes/Homepage';
import PagenNotFound from './routes/PageNotFound';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="Homepage" element={<Homepage />} />
				<Route path="Games" element={<Gamespage />} />
				<Route path="*" element={<PagenNotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
