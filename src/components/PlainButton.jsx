import React from 'react';
import '../styles/Button.scss';

function PlainButton({ text, slug }) {
	return (
		<a href={`/portfolio/${slug ? slug : ``}`} className={`Plain-button-wrap`}>
			<span className="Plain-button-text">{text}</span>
		</a>
	);
}

export default PlainButton;
