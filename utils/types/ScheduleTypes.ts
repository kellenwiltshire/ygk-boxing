export interface IDay {
	dayOfWeek:
		| 'Monday'
		| 'Tuesday'
		| 'Wednesday'
		| 'Thursday'
		| 'Friday'
		| 'Saturday'
		| 'Sunday'
	events: {
		id?: string
		name: string
		time: string
	}[]
}

export interface ITiers {
	name: string
	description: string
	id: string
	price: string
	mostPopular: boolean
}
