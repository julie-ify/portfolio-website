import { Route, Routes } from 'react-router';
import './App.scss';
import Home from './pages/Home';
import PortfolioIndex from './pages/PortfolioIndex';
import PortfolioDetail from './pages/PortfolioDetail';
import PageNotFound from './pages/PageNotFound';
import ContactMe from './pages/ContactMe';
import FormSuccess from './pages/FormSuccess';

function App() {
	return (
		<>
			<div className="App">
				<div className="App-container">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/portfolio" element={<PortfolioIndex />} />
						<Route path="/portfolio/:slug" element={<PortfolioDetail />} />
						<Route path="*" element={<PageNotFound />} />
						<Route path="/contact-me" element={<ContactMe />} />
						<Route path="success" element={<FormSuccess />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
