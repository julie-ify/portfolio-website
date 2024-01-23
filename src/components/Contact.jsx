import React from 'react';

function Contact() {
	return (
		<div className="Contact-grid">
			<div className="Text-center">
				<h1 className="Main-text">Interested in doing a project together?</h1>
			</div>
			<hr className="Contact-hr" />
			<a href={`/contact-me`} className="Contact-btn">
				<span className="Contact-btn-text">Contact me</span>
			</a>
		</div>
	);
}

export default Contact;
