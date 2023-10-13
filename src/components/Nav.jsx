import React from 'react';
import HamburgerMenu from '../images/icons/hamburger.svg';
import '../styles/Nav.scss';

function Nav() {
	return (
		<div className="Nav-container">
			<span className="Nav-logo">
				<a href="/">JULIANA</a>
			</span>
			<div>
				<ul className="Nav-lists">
					<li>
						<a href="/">HOME</a>
					</li>
					<li>
						<a href="/portfolio">PORTFOLIO</a>
					</li>
					<li>
						<a href="/contact-me">CONTACT ME</a>
					</li>
				</ul>
				<img src={HamburgerMenu} className="Nav-hamburger" alt="Hamburger" />
			</div>
		</div>
	);
}

export default Nav;
