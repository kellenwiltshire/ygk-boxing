import {ITiers} from '../../../utils/types/ScheduleTypes'

export const tiers: Array<ITiers> = [
	{
		name: 'First Class',
		description: 'Come try out Boxing!',
		id: 'tier-freelancer',
		price: 'Free',
		mostPopular: false,
	},
	{
		name: '3-Months',
		id: 'tier-startup',
		price: '$300',
		description: 'Commit to the best value and prepare to see results',
		mostPopular: true,
	},
	{
		name: '1-Month',
		id: 'tier-enterprise',
		price: '$105',
		description: 'Only around for a short while? 1 Month memberships are perfect for keeping up your skills!',

		mostPopular: false,
	},
]