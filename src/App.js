import { Route, Routes } from 'react-router';
import './App.scss';
import Home from './pages/Home';
import PortfolioIndex from './pages/PortfolioIndex';
import PortfolioDetail from './pages/PortfolioDetail';

function App() {
	return (
		<>
			<div className="App">
				<div className="App-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/portfolio" element={<PortfolioIndex />} />
						<Route path="/portfolio/:slug" element={<PortfolioDetail />} />
						<Route path="*" element={<h1>No page here</h1>} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
