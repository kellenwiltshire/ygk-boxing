import { ITiers } from '../../../utils/types/ScheduleTypes'

export const tiers: Array<ITiers> = [
	{
		name: 'First Class',
		description: 'Come try out Boxing!',
		id: 'first',
		price: 'Free',
		mostPopular: false,
	},
	{
		name: 'Drop-In',
		description:
			'Not ready for a bigger commitment? Drop-In when it is convenient for you!',
		id: 'drop-in',
		price: '$15.99',
		mostPopular: false,
	},
	{
		name: '1-Month',
		id: '1-month',
		price: '$119.99',
		description:
		'Only around for a short while? 1 Month memberships are perfect for keeping up your skills!',
		mostPopular: false,
	},
	{
		name: '3-Months',
		id: '3-month',
		price: '$299.99',
		description: 'Commit to the best value and prepare to see results',
		mostPopular: false,
	},
	{
		name: '1-Year',
		id: '1-year',
		price: '$999.99',
		description:
			'Ready for the ultimate commitment? Save money and sign up for 1 year.',
		mostPopular: true,
	},
]
