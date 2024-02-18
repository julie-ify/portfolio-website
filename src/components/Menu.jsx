import React from 'react';

function Menu({ isMenuOpen }) {
	return (
		<div className={`Menu-container ${isMenuOpen ? '' : 'Menu-toggle'} `}>
			<ul className="Menu-lists">
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
					<a
						href="https://medium.com/@julieifionu"
						target="_blank"
						rel="noreferrer"
					>
						MY BLOG
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Menu;
