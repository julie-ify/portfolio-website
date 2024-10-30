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
		link: 'https://soundsavvyshop.netlify.app',
	},
	{
		id: 2,
		title: 'CrowdFunding',
		slug: 'crowdfunding',
		description:
			'A web3.0 crowdfunding app that enable users to create and manage fundraising campaigns, where others can contribute funds to support projects, causes, or businesses.',
		background:
			'Users can set campaign goals, track funding progress, and share updates with supporters, creating a community-driven platform for financing innovative ideas or helping individuals in need.',
		previousProject: 'Soundsavvy',
		nextProject: 'Insure',
		technologies: [
			'Solidity',
			'Hardhat',
			'Tailwind',
			'React/Vite',
			'TypeScript',
			'Thirdweb',
		],
		skills: ['Full-stack', 'Smart contract', 'Decentralized app'],
		link: 'https://crowdfunding-neon.vercel.app/',
	},
];

export const findProject = (projectName) => {
	const project = projectsArray.find((project) => {
		return project.slug === projectName;
	});

	return project;
};
