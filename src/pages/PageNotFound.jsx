import React from 'react';
import '.././styles/PageNotFound.scss';

function PageNotFound() {
	return (
		<div className="Container">
			<div className="Wrapper">
				<div className="PageNotFound">
					<div className="PageNotFound-grid">
						<h1 className="PageNotFound-Main-text">!</h1>
						<div className="PageNotFound-message-container">
							<h1>404</h1>
							<p>Page Not Found</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PageNotFound;
