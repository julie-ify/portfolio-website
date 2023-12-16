export const projectsArray = [
	{
		id: 1,
		title: 'SoundSavvyShop',
		slug: 'soundsavvyshop',
		description:
			'This is a dynamic and responsive e-commerce platform that revolutionizes the online shopping experience. Seamlessly crafted to empower users, it offers an intuitive interface enabling hassle-free product selection and cart management.',
		background:
			"SoundSavvyShop redefines e-commerce, offering a user-centric platform that simplifies the shopping experience. With an intuitive interface, users effortlessly add, remove, and adjust product quantities in their cart while receiving essential form validations during checkout. Real-time updates ensure accurate checkout totals, followed by a streamlined order confirmation and a comprehensive summary. Integrated with Stripe for secure payments, this innovative application's standout feature is its ability to retain cart items even after browser refresh, ensuring a seamless shopping journey and reflecting a modern, efficient, and enjoyable online shopping experience.",
		previousProject: 'Flyo',
		nextProject: 'JXpense',
		technologies: ['JavaScript', 'React', ' Stripe', 'Serverless function'],
		skills: ['Interaction Design', 'Front End Development'],
	},
	{
		id: 2,
		title: 'JXpense',
		slug: 'jxpense',
		description:
			'JXpense is a dynamic Ruby on Rails mobile web-based application designed to effortlessly manage your expenses and income. With its intuitive interface and no-install-required convenience, JXpense allows users to effortlessly track their financial activities in an efficient and user-friendly manner.',
		background:
			'JXpense Empowers users with control over their financial records, JXpense offers the flexibility to create custom categories and itemize products within these categories, providing a structured and organized approach to expense management. Users can establish an initial budget and have the flexibility to adjust and increase their budget allocation as needed, ensuring a personalized and adaptable financial tracking experience.',
		previousProject: 'Soundsavvy',
		nextProject: 'Insure',
		technologies: [
			'Ruby on Rails',
			'PostgreSQL',
			'Device',
			'Capybara',
			'Rspec',
		],
		skills: ['Full-stack', 'UI design', 'Project management'],
	},
	
];

export const findProject = (projectName) => {
	const project = projectsArray.find((project) => {
		return project.slug === projectName;
	});

	return project;
};