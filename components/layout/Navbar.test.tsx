import React from 'react'
import {render, screen} from '@testing-library/react'
import Navbar from './Navbar'

describe('Navbar', () => {
	test('renders navbar logo', () => {
		render(<Navbar />)

		const logo = screen.getByAltText('YGK Boxing')
		expect(logo).toBeInTheDocument()
	})

	
})