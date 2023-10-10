import React from 'react';
import '../styles/Button.scss';

function PlainButton({ text, slug }) {

	return (
		<button className={`Plain-button-wrap`}>
			<span className="Plain-button-text">
				<a href={`/portfolio/${slug ? slug : ``}`}>{text}</a>
			</span>
		</button>
	);
}

export default PlainButton;
