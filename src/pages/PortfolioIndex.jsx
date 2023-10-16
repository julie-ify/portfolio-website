import React from 'react';
import PlainButton from '../components/PlainButton';
import '.././styles/PortfolioIndex.scss';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function PortfolioIndex({ isMenuOpen, toggleMenu }) {
	return (
		<>
			<div className="Container">
				<div className="Wrapper">
					<Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
					<div className="Portfolio-container">
						<div className="Portfolio-outer-grid">
							<div className="Project-1"></div>
							<div className="Portfolio-inner-grid">
								<hr className="First" />
								<div className="Portfolio-main-text-wrap">
									<h1 className="Main-text">Manage</h1>
								</div>
								<p className="Portfolio-Paragraph-text">
									This project required me to build a fully responsive landing
									page to the designs provided. I used HTML5, along with CSS
									Grid and JavaScript for the areas that required interactivity,
									such as the testimonial slider.
								</p>
								<PlainButton text={'View Project'} slug={'manage'} />
								<hr className="Second" />
							</div>
						</div>

						<div className="Portfolio-outer-grid">
							<div className="Project-2"></div>
							<div className="Portfolio-inner-grid">
								<hr className="First" />
								<div className="Portfolio-main-text-wrap">
									<h1 className="Main-text">Bookmark</h1>
								</div>
								<p className="Portfolio-Paragraph-text">
									This project required me to build a fully responsive landing
									page to the designs provided. I used HTML5, along with CSS
									Grid and JavaScript for the areas that required interactivity,
									such as the testimonial slider.
								</p>
								<PlainButton text={'View Project'} slug={'bookmark'} />
								<hr className="Second" />
							</div>
						</div>

						<div className="Portfolio-outer-grid">
							<div className="Project-3"></div>
							<div className="Portfolio-inner-grid">
								<hr className="First" />
								<div className="Portfolio-main-text-wrap">
									<h1 className="Main-text">Insure</h1>
								</div>
								<p className="Portfolio-Paragraph-text">
									This project required me to build a fully responsive landing
									page to the designs provided. I used HTML5, along with CSS
									Grid and JavaScript for the areas that required interactivity,
									such as the testimonial slider.
								</p>
								<PlainButton text={'View Project'} slug={'insure'} />
								<hr className="Second" />
							</div>
						</div>

						<div className="Portfolio-outer-grid">
							<div className="Project-4"></div>
							<div className="Portfolio-inner-grid">
								<hr className="First" />
								<div className="Portfolio-main-text-wrap">
									<h1 className="Main-text">Flyo</h1>
								</div>
								<p className="Portfolio-Paragraph-text">
									This project required me to build a fully responsive landing
									page to the designs provided. I used HTML5, along with CSS
									Grid and JavaScript for the areas that required interactivity,
									such as the testimonial slider.
								</p>
								<PlainButton text={'View Project'} slug={'flyo'} />
								<hr className="Second" />
							</div>
						</div>
						<Contact />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default PortfolioIndex;
