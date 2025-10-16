import React from 'react'
// import { socialIcons } from '../../utils/Consts/Layout/SocialIcons'
// import { ISocialIconProps } from '../../utils/types/LayoutTypes'

const Footer = () => {
	const date: Date = new Date()
	const year: number = date.getFullYear()
	return (
		<footer className="bg-black">
			<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-center lg:px-8">
				{/* <div className="flex justify-center space-x-6 md:order-2">
					{socialIcons.map((item: ISocialIconProps) => (
						<a
							key={item.name}
							href={item.href}
							className="text-gray-400 hover:text-gray-500"
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div> */}
				<p className="text-center text-xs leading-5 text-gray-500">
					&copy; {year} YGK Boxing. All rights reserved.
				</p>
			</div>
		</footer>
	)
}

export default Footer
