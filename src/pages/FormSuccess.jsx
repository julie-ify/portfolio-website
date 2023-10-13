import React from 'react';
import '../styles/ContactMe.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GithubLogo from '../images/icons/github-black.svg';
import TwitterLogo from '../images/icons/twitter-black.svg';
import LinkedInLogo from '../images/icons/linkedin-black.svg';
import ColorButton from '../components/ColorButton';

function FormSuccess() {
	return (
		<>
			<div className="Container">
				<div className="Wrapper">
					<Nav />

					<div className="Contact-me-wrapper">
						<hr className="First" />
						<div className="Portfolio-main-text-wrap">
							<h1 className="Main-text">Get in Touch</h1>
						</div>
						<p className="Portfolio-Paragraph-text">
							I’d love to hear about what you’re working on and how I could
							help. I’m currently looking for a new role and am open to a wide
							range of opportunities. My preference would be to find a position
							in a company in London. But I’m also happy to hear about
							opportunites that don’t fit that description. I’m a hard-working
							and positive person who will always approach each task with a
							sense of purpose and attention to detail. Please do feel free to
							check out my online profiles below and get in touch using the
							form.
						</p>
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
									href="https://www.linkedin.com/in/julianaifionu/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={TwitterLogo} alt="Twitter logo" />
								</a>
							</li>
						</ul>
						<hr className="Second" />
					</div>

					<div className="Form-wrapper">
						<form className="Form">
							<div>
								<h1 className="Main-text">Contact Me</h1>
							</div>
							<div className="Form-field">
								<label htmlFor="name">Name</label>
								<input id="name" type="text" placeholder="Jane Appleseed" />
							</div>
							<div className="Form-field">
								<label htmlFor="email">Email Address</label>
								<input id="email" type="text" placeholder="email@example.com" />
							</div>
							<div className="Form-field">
								<label htmlFor="message">Message</label>
								<input id="message" type="text" placeholder="How can I help?" />
							</div>
							<ColorButton text={'Send message'} icon={false}/>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default FormSuccess;