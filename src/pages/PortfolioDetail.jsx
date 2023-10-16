import React from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { findProject } from '../utils/projects';
import '../styles/PortfolioDetail.scss';
import ArrowLeft from '../images/icons/arrow-left.svg';
import ArrowRight from '../images/icons/arrow-right.svg';
import Contact from '../components/Contact';

function PortfolioDetail({ isMenuOpen, toggleMenu }) {
	const { slug } = useParams();
	const slugs = ['manage', 'bookmark', 'flyo', 'insure'];
	const portfolio = slugs.includes(slug);
	const titleNameFormat = slug.charAt(0).toUpperCase() + slug.slice(1);
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
													<button className={`Project-button-wrap btn-order`}>
														<span className="Project-button-text">
															<a href={`/portfolio`}>Visit Website</a>
														</span>
													</button>
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
							<div className="Select-project">
								<div className="Previous-project">
									<div>
										<img src={ArrowLeft} alt="" />
									</div>
									<div className="Project-sub-text-wrap">
										<h1 className="Sub-text">{project.previousProject}</h1>
									</div>
									<p className="Select-project-text">Previous Project</p>
								</div>

								<div className="Next-project">
									<div>
										<img src={ArrowRight} alt="" />
									</div>
									<div className="Project-sub-text-wrap">
										<h1 className="Sub-text">{project.nextProject}</h1>
									</div>
									<p className="Select-project-text">Previous Project</p>
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
