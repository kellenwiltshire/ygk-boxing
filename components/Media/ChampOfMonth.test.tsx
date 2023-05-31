import {render, screen} from '@testing-library/react'
import ChampOfMonth from './ChampOfMonth'

describe('ChampOfMonth component', () => {
	it('renders the champion of the month section with correct title', () => {
		render(<ChampOfMonth />)
		const titleElement = screen.getByText('Champion of the Month')
		expect(titleElement).toBeInTheDocument()
	})
})