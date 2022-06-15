import ReactDOM from 'react-dom/client';

//Routes
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gamespage from './routes/Gamespage';
import Homepage from './routes/Homepage';
import Fastrithmetic from './routes/Fastrithmetic';
import PagenNotFound from './routes/PageNotFound';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Homepage />} />
				<Route path="home" element={<Homepage />} />
				<Route path="games">
					<Route index element={<Gamespage />} />
					<Route path="fastrithmetic" element={<Fastrithmetic />} />
				</Route>
				<Route path="*" element={<PagenNotFound />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
