import { render, screen } from '@testing-library/react'
import Calendar from './Calendar'
import dayjs from 'dayjs'
import { months } from './Vars/Events'

jest.mock('next/router', () => ({
	useRouter() {
		return {
			prefetch: () => null,
		}
	},
}))

describe('Calendar component', () => {
	it('renders the calendar with correct month', () => {
		render(<Calendar />)
		const currMonth = dayjs().month()
		const currYear = dayjs().year()
		const monthElement = screen.getByText(`${months[currMonth]} ${currYear}`)
		expect(monthElement).toBeInTheDocument()
	})

	it('renders the calendar with correct number of days', () => {
		render(<Calendar />)
		const dayElements = screen.getAllByTestId('calendar-day')
		expect(dayElements.length).toBe(7)
	})
})
