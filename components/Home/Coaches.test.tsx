import React from 'react'
import { render, screen } from '@testing-library/react'
import Coaches from './Coaches'

describe('Coaches Component', () => {
	it('renders the coaches correctly', () => {
		render(<Coaches />)

		// Check if the title is rendered correctly
		const title = screen.getByText('About YGK Boxing')
		expect(title).toBeInTheDocument()

		// Check if each person's name, role, and bio are rendered correctly
		// const people = screen.getAllByRole("listitem");
		// expect(people.length).toBe(2);

		// Check the details for the first person
		// const person1 = people[0];
		// const name1 = screen.getByText("John Daniel (JD) Firth");
		// const role1 = screen.getByText("Owner / Coach");
		// const bio1 = screen.getByText(/Proud Owner and Head Coach John Daniel \(JD\) Firth/);
		// expect(person1).toContainElement(name1);
		// expect(person1).toContainElement(role1);
		// expect(person1).toContainElement(bio1);

		// Check the details for the second person
		// const person2 = people[1];
		// const name2 = screen.getByText("Finley");
		// const role2 = screen.getByText("JD's Diabetic Alert Dog");
		// const bio2 = screen.getByText(/Finley is Coach JD's Diabetic Alert Dog/);
		// expect(person2).toContainElement(name2);
		// expect(person2).toContainElement(role2);
		// expect(person2).toContainElement(bio2);
	})
})
