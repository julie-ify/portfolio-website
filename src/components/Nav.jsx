import React from 'react';
import HamburgerMenu from '../images/icons/hamburger.svg';
import closeBtnSvg from '../images/icons/close.svg';
import '../styles/Nav.scss';

function Nav({ toggleMenu, isMenuOpen }) {
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
					<li>
						<a href="https://medium.com/@julieifionu" target='_blank' rel="noreferrer">MY BLOG</a>
					</li>
				</ul>
				<div onClick={toggleMenu}>
					{!isMenuOpen && (
						<img
							src={HamburgerMenu}
							className="Nav-hamburger"
							alt="Hamburger"
						/>
					)}
					{isMenuOpen && (
						<img src={closeBtnSvg} className="Nav-hamburger" alt="Hamburger" />
					)}
				</div>
			</div>
		</div>
	);
}

export default Nav;
