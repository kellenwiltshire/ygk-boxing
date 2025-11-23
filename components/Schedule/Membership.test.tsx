import { render, screen } from '@testing-library/react'
import Membership from './Membership'

describe('Membership component', () => {
	it('renders the membership section with correct title', () => {
		render(<Membership />)
		const titleElement = screen.getByText('Membership')
		expect(titleElement).toBeInTheDocument()
	})

	it('renders the membership section with tier details', () => {
		render(<Membership />)

		const tier1 = screen.getByText('First Class')
		expect(tier1).toBeInTheDocument()

		const tier2 = screen.getByText('3-Months')
		expect(tier2).toBeInTheDocument()

		const tier3 = screen.getByText('1-Month')
		expect(tier3).toBeInTheDocument()
	})
})
