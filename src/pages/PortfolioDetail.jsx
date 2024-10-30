import React from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { findProject } from '../utils/projects';
import '../styles/PortfolioDetail.scss';
import Contact from '../components/Contact';

function PortfolioDetail({ isMenuOpen, toggleMenu }) {
	const { slug } = useParams();
	const slugs = ['soundsavvyshop', 'crowdfunding'];
	const portfolio = slugs.includes(slug);
	const titleNameFormat = slug;
	const project = findProject(titleNameFormat);

	return (
		<>
			{!portfolio && <PageNotFound />}
			{portfolio && (
				<>
					<div className="Container">
						<div className="Wrapper">
							<Nav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
							<div className="Project-outer-grid">
								<div className="Project-img-cover">
									<div
										className={`Project-id-${project.id} Project-img-width`}
									></div>
								</div>
								<div className="Project-outer-wrap">
									<div className="Project-inner-grid">
										<hr className="Hr-first" />
										<div className="Project-wrapper-grid">
											<div className="text-visibility-1">
												<p className="Project-Paragraph-text">
													{project.description}
												</p>
											</div>
											<div className="Project-wrap-grid">
												<div className="Project-main-text-wrap">
													<h1 className="Main-text">{project.title}</h1>
												</div>
												<div className="text-visibility-2">
													<p className="Project-Paragraph-text">
														{project.description}
													</p>
												</div>
												<div className="Project-card-grid">
													<div>
														<div className="Project-skills">
															{project.skills.join(' / ')}
														</div>
														<div className="Project-tech">
															{project.technologies.join(' / ')}
														</div>
													</div>
													<a
														href={project.link}
														target="_blank"
														rel="noreferrer"
														className={`Plain-button-wrap`}
													>
														<span className="Project-button-text">
															Visit Website
														</span>
													</a>
												</div>
											</div>
										</div>
										<hr className="Hr-second" />
									</div>
									<div className="Project-middle-grid">
										<div className="Project-middle1-grid">
											<div className="Project-sub-text-wrap">
												<h1 className="Sub-text">Project Background</h1>
											</div>
											<p className="Project-Paragraph-text">
												{project.background}
											</p>
										</div>
										<div className="Project-sub-text-wrap">
											<h1 className="Sub-text">Static Previews</h1>
										</div>
										<div
											className={`Project-prev-${project.id} Project-prev-width`}
										></div>
										<div
											className={`Project-prev-${project.id}-second Project-prev-width`}
										></div>
									</div>
								</div>
							</div>
							<Contact />
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
}

export default PortfolioDetail;
