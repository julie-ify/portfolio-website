import React from 'react';
import ColorButton from '../components/ColorButton';
import '../styles/Home.scss';
import PlainButton from '../components/PlainButton';
import Contact from '../components/Contact';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

function Home({ toggleMenu, isMenuOpen }) {
	return (
		<>
			<div className="Container">
				<div className="Wrapper">
					<Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
					<div className="Home-container">
						<div className="Home-grid">
							<div className="Home-image"></div>
							<div className="Home-hero-grid">
								<h1 className="Main-text">
									Hey, I’m Juliana Ifionu and I'm a full-stack developer
								</h1>
								<ColorButton text={'Contact me'} icon={true} />
							</div>
						</div>
						<hr className="First skill-hr" />
						<Skills />

						<div className="About-outer-grid">
							<div className="profile-image"></div>
							<div className="About-inner-grid">
								<hr className="First" />
								<div className="Main-text-wrap">
									<h1 className="Main-text">About Me</h1>
								</div>
								<p className="Paragraph-text">
									I'm a full-stack developer with a strong focus on building
									applications using a diverse tech stack, including Node.js,
									Express, Ruby on Rails, React, Next.js, PostgreSQL, and
									MongoDB. My expertise lies in architecting APIs that power
									seamless communication between different components of
									applications. With a deep understanding of both frontend and
									backend technologies, I specialize in delivering robust,
									user-centric solutions that leverage the full potential of
									these tools.
								</p>
								<PlainButton text={'Go to portfolio'} />
								<hr className="Second" />
							</div>
						</div>
						<Contact />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default Home;
