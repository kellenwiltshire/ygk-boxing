import React from 'react'
import {render, screen} from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
	it('renders social icons', () => {
		render(<Footer />)

		// Replace this with the actual test for your social icons
		const socialIcons = screen.queryAllByRole('link')
		expect(socialIcons.length).toBeGreaterThan(0)
	})
})