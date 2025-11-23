import { IDay } from '../../../utils/types/ScheduleTypes'

export const events: Array<IDay> = [
	{
		dayOfWeek: 'Sunday',
		events: [
			{
				name: 'CLOSED - available for rental with additional times throughout the week - Contact HERE to find affordable rates and availability.',
				time: '',
			},
		],
	},
	{
		dayOfWeek: 'Monday',
		events: [
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING',
				time: '8:00am - 3:30pm',
			},
			{
				id: 'KIDS',
				name: 'KIDS CLASS (AGE: 7-12)',
				time: '4:30pm - 5:45pm',
			},
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM TRAINING',
				time: '5:45pm - 6:15pm',
			},
			{
				id: 'ADULT',
				name: 'ALL LEVELS ADULT BOXING CLASS (AGE: 13+)',
				time: '6:15pm - 7:15pm',
			},
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING AND SPARRING',
				time: '7:15pm - 8:00pm',
			},
		],
	},
	{
		dayOfWeek: 'Tuesday',
		events: [
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING',
				time: '8:00am - 3:30pm',
			},
			{
				id: 'BEGINNERS',
				name: 'BEGINNERS CLASS',
				time: '5:00pm - 5:30pm',
			},
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING',
				time: '5:45pm - 6:15pm',
			},
			{
				id: 'ADULT',
				name: 'ALL LEVELS ADULT BOXING CLASS (AGE: 13+)',
				time: '6:15pm - 7:15pm',
			},
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING AND SPARRING',
				time: '7:15pm - 8:00pm',
			},
		],
	},
	{
		dayOfWeek: 'Wednesday',
		events: [
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING',
				time: '8:00am - 4:00pm',
			},
			{
				id: 'SPARRING',
				name: 'SPARRING',
				time: '4:30pm - 6:30pm',
			},
			{
				id: 'COMPETITIVE',
				name: 'COMPETITIVE TEAM TRAINING, STUDYING RECORDED SPARRING/FIGHTS',
				time: '4:30pm - 6:30pm',
			},
		],
	},
	{
		dayOfWeek: 'Thursday',
		events: [
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING',
				time: '8:00am - 3:30pm',
			},
			{
				id: 'KIDS',
				name: 'KIDS CLASS (AGE: 7-12)',
				time: '4:30pm - 5:45pm',
			},
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM TRAINING',
				time: '5:45pm - 6:15pm',
			},
			{
				id: 'ADULT',
				name: 'ALL LEVELS ADULT BOXING CLASS (AGE: 13+)',
				time: '6:15pm - 7:15pm',
			},
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING AND SPARRING',
				time: '7:15pm - 8:00pm',
			},
		],
	},
	{
		dayOfWeek: 'Friday',
		events: [
			{
				id: 'OPENGYM',
				name: 'ALL LEVELS OPEN GYM BOXING TRAINING',
				time: '8:00am - 3:30pm',
			},

			{
				id: 'SPARRING',
				name: 'SPARRING',
				time: '4:30pm - 6:30pm',
			},
			{
				id: 'COMPETITIVE',
				name: 'COMPETITIVE TEAM TRAINING, STUDYING RECORDED SPARRING/FIGHTS',
				time: '4:30pm - 6:30pm',
			},
		],
	},
	{
		dayOfWeek: 'Saturday',
		events: [
			{
				id: 'OPENGYM',
				name: 'WARM UP ALL LEVELS',
				time: '9:00am - 9:30am',
			},
			{
				id: 'CIRCUIT',
				name: 'BOXING CIRCUIT (ALL AGES/SKILL LEVELS)',
				time: '9:30am - 10:30am',
			},
			{
				id: 'SPARRING',
				name: 'SPARRING',
				time: '9:30am - 10:30am',
			},
			{
				id: 'YGKKIDS',
				name: 'LITTLE CHAMPS PARENT CHILD BOXING (AGE: 4-7)',
				time: '10:30am - 11:00am',
			},
		],
	},
]

export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

export const classDescriptions = [
	{
		id: 'BEGINNERS',
		name: 'BEGINNERS CLASS',
		description:
			'Embark on a welcoming journey into the world of YGK boxing with our gentle and open beginners class. Tailored for novices, the session emphasizes fundamental elements such as basic footwork, balance, and punch techniques. Led by experienced trainers, this light-hearted introduction ensures a supportive atmosphere, making it the perfect starting point for those eager to grasp the basics of boxing while building confidence and coordination.',
	},
	{
		id: 'ADULT',
		name: 'ADULT WORKOUT',
		description:
			"Step into our inclusive and challenging YGK boxing fitness class, open to participants of all levels. Begin with a dynamic first segment featuring skipping for agility, shadow boxing for technique refinement, and a blend of pushups and calisthenics for overall strength. The second part focuses on honing your boxing skills with bag work, slipping drills, and a deep dive into technical aspects of the sport. This comprehensive workout promises an empowering experience for everyone, whether you're a beginner or an advanced boxer, providing an opportunity to enhance both your fitness and boxing proficiency.",
	},
	{
		id: 'OPENGYM',
		name: 'OPEN GYM MEMBER ACCESS',
		description:
			'Unlock the convenience and flexibility of our open-boxing gym exclusively for YGK Boxing members. With expanded access, members can tailor their training to their own schedule, enjoying a self-guided workout experience. Inquire today to become a member and embrace the freedom of honing your boxing skills at your preferred time, ensuring a seamless and personalized fitness journey with YGK Boxing.',
	},
	{
		id: 'SPARRING',
		name: 'SPARRING/COMPETITIVE TEAM',
		description:
			"YGK Boxing's competitive team is an elite training ground for those registered with Boxing Ontario, committed to honing their skills in sparring and competition. Our rigorous program focuses on refining techniques, film analysis, and fostering a culture of excellence and mutual accountability. Emphasizing safety and adherence to rules, we take boxing seriously – it's not a sport we play. Prospective members must prove themselves through dedicated workouts, demonstrating the commitment required to earn a coveted spot on our team. Join us and be prepared to elevate your boxing journey to new heights.",
	},
	{
		id: 'CIRCUIT',
		name: 'SATURDAY CIRCUIT',
		description:
			"Elevate your weekend with YGK Boxing's Saturday morning circuits, where every session is a thrilling surprise. With a random selection of 12-15 rounds from a repertoire of over 100 different exercises, each workout promises novelty and excitement. Some weeks, we add an extra layer of fun and challenge by drawing from our curated list of 50 specially designed routines. Join us for a dynamic and invigorating start to your weekend, ensuring each circuit is a fresh and energizing experience.",
	},
]

// {
//   id:'WOMEN',
//   name: "WOMENS ONLY CLASS",
//   description: "Join YGK Boxing's exclusive womens-only class every Friday from 4:30-6:00 pm, designed to empower and inspire. This session provides a supportive environment for women to explore the fundamentals of boxing, enhance their fitness, and build camaraderie with like-minded individuals. Led by experienced trainers, this class offers a unique opportunity for women to challenge themselves physically and mentally in a welcoming and encouraging setting."
// }
