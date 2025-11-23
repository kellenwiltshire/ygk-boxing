import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import { Provider } from 'react-redux'
import { store } from '../../redux/store'

describe('Navbar', () => {
	test('renders navbar logo', () => {
		render(
			<Provider store={store}>
				<Navbar />
			</Provider>,
		)

		const logo = screen.getByAltText('YGK Boxing')
		expect(logo).toBeInTheDocument()
	})
})
