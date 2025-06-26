import {
	react,
	fullstack,
	web,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	mongodb,
	skillcraft,
	iitpatna,
	ecommexpress,
	zoomora,
	todoapp,
	threejs,
	sih,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'projects',
		title: 'Projects',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'React Developer',
		icon: react,
	},
	{
		title: 'Full Stack Developer',
		icon: fullstack,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
];

const experiences = [
	{
		title: 'Web Developer Intern',
		company_name: 'SkillCraft Technology',
		icon: skillcraft,
		iconBg: '#E6DEDD',
		date: 'December 2024',
		points: [
			'Developing and maintaining web applications using HTML, CSS, JavaScript, React.js, and other related technologies.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Deep Graph Learning Research Intern',
		company_name: 'IIT PATNA',
		icon: iitpatna,
		iconBg: '#E6DEDD',
		date: 'June 2025 - Present',
		points: [
			'Analyze and implement the SIEGE model for detecting phishing scams in Ethereum transaction networks.',
			'Develop and train advanced self-supervised graph neural network pipelines combining spatial and temporal pretext tasks.',
		],
	},
];

const achievements = [
	{
		achievement:
			'Finalists in the Smart India Hackathon 2023 for developing a mobile app that crowdsources and categorizes water-related issues using AI and social media data, aiding disaster management and urban planning.',
		name: 'Code-Crafters',
		title: 'Finalist',
		event: 'Smart India Hackathon 2023',
		image: sih,
	},
];

const projects = [
	{
		name: 'Ecommerce',
		description:
			'A modern eCommerce platform offering a seamless shopping experience, with features like product browsing, latest arrivals, secure payments, and an intuitive user interface powered by React, MongoDB, Tailwind CSS, and Stripe.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
			{
				name: 'stripe',
				color: 'yellow-text-gradient',
			},
		],
		image: ecommexpress,
		source_code_link: 'https://github.com/Swarnab-Code/EcommExpress',
	},
	{
		name: 'Social Media App',
		description:
			'A full-stack social media platform enabling user registration, login, profile creation, and functionalities such as posting, liking, commenting, sharing, making friends, and messaging. Includes an admin panel for managing users and content.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
			{
				name: 'jwt-auth',
				color: 'yellow-text-gradient',
			},
		],
		image: zoomora,
		source_code_link: 'https://github.com/Soumi-Code/ZOOMORA',
	},
	{
		name: 'To-Do Web Application',
		description:
			'A To-Do Web Application designed to manage daily tasks efficiently. It includes features like login and registration, adding tasks with descriptions, filtering tasks based on their status, and editing or deleting tasks.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwind',
				color: 'pink-text-gradient',
			},
			{
				name: 'jwt-auth',
				color: 'yellow-text-gradient',
			},
		],
		image: todoapp,
		source_code_link: 'https://github.com/Swarnab-Code/TODO_MERN',
	},
];

export { services, technologies, experiences, achievements, projects };
