import { Route, Routes } from 'react-router';
import './App.scss';
import Home from './pages/Home';
import PortfolioIndex from './pages/PortfolioIndex';
import PortfolioDetail from './pages/PortfolioDetail';
import PageNotFound from './pages/PageNotFound';
import ContactMe from './pages/ContactMe';
import FormSuccess from './pages/FormSuccess';
import { useState, useEffect } from 'react';
import Menu from './components/Menu';

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		if (isMenuOpen) {
			document.documentElement.classList.add('overflow-hidden');
		} else {
			document.documentElement.classList.remove('overflow-hidden');
		}
		// Cleanup by removing the class when the component unmounts
		return () => {
			document.documentElement.classList.remove('overflow-hidden');
		};
	}, [isMenuOpen]);

	return (
		<>
			<div className="App">
				<div className="App-container">
					{isMenuOpen && (
						<Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
					)}
					<Routes>
						<Route
							path="/"
							element={<Home toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
						/>
						<Route
							path="/portfolio"
							element={
								<PortfolioIndex
									toggleMenu={toggleMenu}
									isMenuOpen={isMenuOpen}
								/>
							}
						/>
						<Route
							path="/portfolio/:slug"
							element={
								<PortfolioDetail
									toggleMenu={toggleMenu}
									isMenuOpen={isMenuOpen}
								/>
							}
						/>
						<Route path="*" element={<PageNotFound />} />
						<Route
							path="/contact-me"
							element={
								<ContactMe toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
							}
						/>
						<Route path="success" element={<FormSuccess />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
