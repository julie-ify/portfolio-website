import React from 'react';
import '../styles/Skills.scss';

function Skills() {
	return (
		<section className="Skills-container">
			<h3 className="skills-heading">Technologies</h3>
			<ul className="tech-icons">
				<li className="tech-icon">
					<img className="tech-img" src="/tech/solidity.svg" alt="tech" />
					<small>SOLIDITY</small>
				</li>
				<li className="tech-icon">
					<img className="tech-img" src="/tech/ethersjs.png" alt="tech" />
					<small>ETHERSJS</small>
				</li>
				<li className="tech-icon">
					<i className="fa-brands fa-sass fa-4x"></i>
					<small>SCSS</small>
				</li>
				<li className="tech-icon">
					<img className="tech-img" src="/tech/tailwind.png" alt="tech" />
					<small>TAILWIND</small>
				</li>
				<li className="tech-icon">
					<i className="fa-brands fa-js fa-4x"></i>
					<small>JS</small>
				</li>
				<li className="tech-icon">
					<img className="tech-img" src="/tech/typescript.svg" alt="tech" />
					<small>TYPESCRIPT</small>
				</li>
				<li className="tech-icon">
					<i className="fa-brands fa-react fa-4x"></i>
					<small>REACT</small>
				</li>
				<li className="tech-icon">
					<img className="tech-img" src="/tech/rails.png" alt="tech" />
					<small>RAILS</small>
				</li>
				<li className="tech-icon">
					<img className="tech-img" src="/tech/ruby.jpg" alt="tech" />
					<small>RUBY</small>
				</li>
				<li className="tech-icon">
					<img className="tech-img" src="/tech/nodeimage.png" alt="tech" />
					<small>NODEJS</small>
				</li>
				<li className="tech-icon">
					<img
						className="tech-img"
						src="/tech/node-js-express.png"
						alt="tech"
					/>
					<small>EXPRESSJS</small>
				</li>
				<li className="tech-icon">
					<img className="tech-img" src="/tech/postgresimage.png" alt="tech" />
					<small>POSTGRESQL</small>
				</li>
				<li className="tech-icon">
					<img className="tech-img" src="/tech/nextjsimage.png" alt="tech" />
					<small>NEXTJS</small>
				</li>
			</ul>
		</section>
	);
}

export default Skills;
