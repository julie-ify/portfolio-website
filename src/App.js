import { Route, Routes } from 'react-router';
import './App.scss';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import PortfolioIndex from './pages/PortfolioIndex';
import PortfolioDetail from './pages/PortfolioDetail';
// import { useParams } from 'react-router-dom';

function App() {
	// const paramSlug = useParams();
	// console.log(paramSlug)
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
