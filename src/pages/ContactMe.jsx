import React, { useState } from 'react';
import '../styles/ContactMe.scss';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GithubLogo from '../images/icons/github-black.svg';
import TwitterLogo from '../images/icons/twitter-black.svg';
import LinkedInLogo from '../images/icons/linkedin-black.svg';
import { useNavigate } from 'react-router-dom';

function ContactMe({ isMenuOpen, toggleMenu }) {
	const [formdata, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [error, setError] = useState({
		nameError: '',
		emailError: '',
		messageError: '',
	});
	const navigate = useNavigate();

	// Email validation format
	function validateEmail(email) {
		const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(email);
	}

	const onChangeHandler = (e) => {
		setFormData({
			...formdata,
			[e.target.name]: e.target.value,
		});
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const { name, email, message } = formdata;

		if (!name.trim()) {
			return setError({
				...error,
				nameError: 'This field is required',
				emailError: '',
				messageError: '',
			});
		} else if (!email.trim()) {
			return setError({
				...error,
				nameError: '',
				emailError: 'This field is required',
				messageError: '',
			});
		} else if (!message.trim()) {
			return setError({
				...error,
				nameError: '',
				emailError: '',
				messageError: 'This field is required',
			});
		} else if (!validateEmail(email)) {
			return setError({
				...error,
				nameError: '',
				emailError: 'Please use a valid email address',
				messageError: '',
			});
		}

		setError({
			nameError: '',
			emailError: '',
			messageError: '',
		});
		navigate('/success');
	};

	return (
		<>
			<div className="Container">
				<div className="Wrapper">
					<Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

					<div className="Contact-me-wrapper">
						<hr className="First" />
						<div className="Get-in-touch-grid">
							<div className="Form-main-text-wrap">
								<h1 className="Main-text">Get in Touch</h1>
							</div>
							<div className="Small-inner-grid">
								<p className="Contact-Paragraph-text">
									I would love to hear about what you’re working on and how I
									could help. I’m currently looking for a new role and am open
									to a wide range of opportunities. I’m a hard-working and
									positive person who will always approach each task with a
									sense of purpose and attention to detail. Please do feel free
									to check out my online profiles below and get in touch using
									the form.
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
						<hr className="Second" />
					</div>

					<div className="Form-wrapper">
						<form className="Form" onSubmit={submitHandler} netlify>
							<div>
								<div className="Form-main-text-wrap">
									<h1 className="Main-text">Contact Me</h1>
								</div>
							</div>
							<div className="Form-control">
								<div className="Form-field">
									<label htmlFor="name">Name</label>
									<input
										id="name"
										type="text"
										name="name"
										placeholder="Jane Doe"
										onChange={onChangeHandler}
										value={formdata.name}
									/>
									<span className="errorMsg">{error.nameError}</span>
								</div>
								<div className="Form-field">
									<label htmlFor="email">Email Address</label>
									<input
										id="email"
										name="email"
										type="text"
										placeholder="abc@example.com"
										onChange={onChangeHandler}
										value={formdata.email}
									/>
									<span className="errorMsg">{error.emailError}</span>
								</div>
								<div className="Form-field">
									<label htmlFor="message">Message</label>
									<input
										id="message"
										name="message"
										type="text"
										placeholder="How can I help?"
										onChange={onChangeHandler}
										value={formdata.message}
									/>
									<span className="errorMsg">{error.messageError}</span>
								</div>
								<button className={`Color-button-wrap`}>
									<span className="Color-button-text">Send Message</span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default ContactMe;
