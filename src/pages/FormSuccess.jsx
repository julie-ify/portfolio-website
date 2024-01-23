import React from 'react';
import '../styles/ContactMe.scss';
import { useNavigate } from 'react-router-dom';
import SuccessAnimation from '../components/SuccessAnimation';

function FormSuccess() {
	const navigate = useNavigate();
	return (
		<div className="Container">
			<div className="Wrapper">
				<div className="Contact-me-wrapper Success">
					<SuccessAnimation />
					<div className="Portfolio-main-text-wrap">
						<h1 className="Main-text">Thank You!</h1>
					</div>
					<p className="Portfolio-Paragraph-text">
						Rest assured, I received your message. I will get back to you as
						soon as possible.{' '}
					</p>
					<button className={`Color-button-wrap`} onClick={() => navigate('/')}>
						<span className="Color-button-text">Back Home</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default FormSuccess;
