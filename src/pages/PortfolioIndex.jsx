import React from 'react';
import PlainButton from '../components/PlainButton';
import '.././styles/PortfolioIndex.scss';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { projectsArray } from '../utils/projects';

function PortfolioIndex({ isMenuOpen, toggleMenu }) {
	const portfolio = projectsArray.slice(0, 2).map((project) => {
		return (
			<div className="Portfolio-outer-grid" key={project.id}>
				<div
					className={`image-cover ${project.id % 2 === 0 ? 'Grid-order' : ''}`}
				>
					<div className={`Project-${project.id} Project-image-cover`}></div>
				</div>

				<div className="Portfolio-inner-grid">
					<hr className="First" />
					<div className="Portfolio-main-text-wrap">
						<h1 className="Main-text">{project.title}</h1>
					</div>
					<p className="Portfolio-Paragraph-text">{project.description}</p>
					<PlainButton
						text={'View Project'}
						slug={project.slug.toLowerCase()}
					/>
					<hr className="Second" />
				</div>
			</div>
		);
	});
	return (
		<>
			<div className="Container">
				<div className="Wrapper">
					<Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
					<div className="Portfolio-container">{portfolio}</div>
					<Contact />
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PortfolioIndex;
