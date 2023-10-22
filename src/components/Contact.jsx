import React from 'react';

function Contact() {
	return (
		<div className="Contact-grid">
			<div className="Text-center">
				<h1 className="Main-text">Interested in doing a project together?</h1>
			</div>
			<hr className="Contact-hr" />
			<button className="Contact-btn">
				<span className="Contact-btn-text">
					<a href={`/contact-me`}>Contact me</a>
				</span>
			</button>
		</div>
	);
}

export default Contact;
