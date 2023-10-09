import { Route, Routes } from 'react-router';
import './App.scss';
import Home from './components/Home';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
