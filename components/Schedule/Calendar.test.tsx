import {render, screen} from '@testing-library/react'
import Calendar from './Calendar'

describe('Calendar component', () => {
	it('renders the calendar with correct month', () => {
		render(<Calendar />)
		const monthElement = screen.getByText('June 2023')
		expect(monthElement).toBeInTheDocument()
	})

	it('renders the calendar with correct number of days', () => {
		render(<Calendar />)
		const dayElements = screen.getAllByTestId('calendar-day')
		expect(dayElements.length).toBe(7)
	})
})