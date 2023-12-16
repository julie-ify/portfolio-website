import React from 'react';
import GithubLogo from '../images/icons/github.svg';
import TwitterLogo from '../images/icons/twitter.svg';
import LinkedInLogo from '../images/icons/linkedin.svg';
import '../styles/Footer.scss';

function Footer() {
	return (
		<section className="Footer-container">
			<div className='Footer-wrap'>
				<div className="Footer-outer-grid">
					<div className="Footer-inner-grid">
						<span className="Nav-logo">
							<a href="/">JULIANA</a>
						</span>
						<ul className="Footer-lists">
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
					</div>
					<ul className="Footer-icons">
						<li>
							<a
								href="https://github.com/julie-ify"
								target="_blank"
								rel="noreferrer"
							>
								<img src={GithubLogo} alt="Github logo" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/julianaifionu/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={LinkedInLogo} alt="LinkedIn logo" />
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/juliana_ifionu"
								target="_blank"
								rel="noreferrer"
							>
								<img src={TwitterLogo} alt="Twitter logo" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default Footer;
