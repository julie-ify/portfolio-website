import React from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function PortfolioDetail() {
	const { slug } = useParams();
	const slugs = ['manage', 'bookmark', 'flyo', 'insure'];
	const portfolio = slugs.includes(slug);
	console.log(portfolio);
	console.log(slug);

	return (
		<>
			{!portfolio && <PageNotFound />}
			{portfolio && (
				<>
					<div className="Container">
						<div className="Wrapper">
							<Nav />
							<h1>hELLO</h1>
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
}

export default PortfolioDetail;
