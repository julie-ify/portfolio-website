export const projectsArray = [
	{
		id: 1,
		title: 'Soundsavvyshop',
		description:
			'This project required me to build a fully responsive multi-page e-commerce application. Built with JavaScript, React, serverless Netlify function, Stripe, along SCSS',
		background:
			'This project was a challenge from Frontend Mentor. It\'s an application that enable users add/remove products from the cart, edit product quantities, receive form validations if fields are missed or incorrect during checkout, see correct checkout total, see order confirmation after after checking out with an order summary and make payment with stripe. The app keeps track of what\'s in the cart even after refreshing the browser.',
		previousProject: 'Flyo',
		nextProject: 'Bookmark',
		technologies: ['JavaScript', 'React', ' Strip', 'Serverless function'],
		skills: ['Interaction Design', 'Front End Development'],
	},
	{
		id: 2,
		title: 'Bookmark',
		description:
			'This project 2 required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
		background:
			'This project 2 was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
		previousProject: 'Manage',
		nextProject: 'Insure',
		technologies: ['HTML', 'CSS', ' JS'],
		skills: ['Interaction Design', 'Front End Development'],
	},
	{
		id: 3,
		title: 'Insure',
		description:
			'This project 3 required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
		background:
			'This project 3 was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
		previousProject: 'Bookmark',
		nextProject: 'Flyo',
		technologies: ['HTML', 'CSS', ' JS'],
		skills: ['Interaction Design', 'Front End Development'],
	},
	{
		id: 4,
		title: 'Flyo',
		description:
			'This project 4 required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.',
		background:
			'This project 4 was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.',
		previousProject: 'Insure',
		nextProject: 'Manage',
		technologies: ['HTML', 'CSS', ' JS'],
		skills: ['Interaction Design', 'Front End Development'],
	},
];

export const findProject = (projectName) => {
	const project = projectsArray.find((project) => {
		return project.title === projectName;
	});

	return project;
};
