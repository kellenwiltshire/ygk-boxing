export interface IDay {
	dayOfWeek: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
	events: {
		name: string
		time: string
	}[]
}