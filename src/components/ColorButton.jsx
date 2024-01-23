import React from 'react';
import '../styles/Button.scss';
import { useNavigate } from 'react-router-dom';

function ColorButton({ text }) {
	const navigate = useNavigate()
	return (
		<button className={`Color-button-wrap`} onClick={() => {navigate('/contact-me')}}>
			<svg
				className="Button-arrow-down"
				xmlns="http://www.w3.org/2000/svg"
				width="48"
				height="48"
				viewBox="0 0 48 48"
				fill="none"
			>
				<rect opacity="0.1" width="48" height="48" fill="black" />
				<path d="M16 26L24 30L32 26" stroke="#5FB4A2" className="icon" />
				<path
					opacity="0.5"
					d="M16 22L24 26L32 22"
					stroke="#5FB4A2"
					className="icon"
				/>
				<path
					opacity="0.25"
					d="M16 18L24 22L32 18"
					stroke="#5FB4A2"
					className="icon"
				/>
			</svg>

			<span className="Color-button-text">{text}</span>
		</button>
	);
}

export default ColorButton;
