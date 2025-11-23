import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactUs from './ContactUs'

describe('ContactUs component', () => {
	test('renders contact information and form correctly', () => {
		render(<ContactUs />)

		const emailElement = screen.getByText('contact@ygkboxing.com')
		expect(emailElement).toBeInTheDocument()
		expect(emailElement).toHaveAttribute('href', 'mailto:contact@ygkboxing.com')

		// Check if form inputs are rendered correctly
		const firstNameInput = screen.getByLabelText('First name')
		expect(firstNameInput).toBeInTheDocument()

		const lastNameInput = screen.getByLabelText('Last name')
		expect(lastNameInput).toBeInTheDocument()

		const emailInput = screen.getByLabelText('Email')
		expect(emailInput).toBeInTheDocument()

		const phoneNumberInput = screen.getByLabelText('Phone number')
		expect(phoneNumberInput).toBeInTheDocument()

		const messageInput = screen.getByLabelText('Message')
		expect(messageInput).toBeInTheDocument()

		// Check if submit button is rendered correctly
		const submitButton = screen.getByRole('button', { name: 'Send message' })
		expect(submitButton).toBeInTheDocument()
	})
})
