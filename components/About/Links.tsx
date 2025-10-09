import { ILink } from '../../utils/types/AboutTypes'

const linkList: Array<ILink> = [
	{
		text: 'How to become an amateur boxer with Boxing Ontario',
		href: 'https://boxingontario.com/athletes/how-to-become-a-boxer/',
	},
	{
		text: "Boxing Ontario's Policy and Constitution",
		href: 'https://boxingontario.com/about-us/policy-constitution/',
	},
	{
		text: "Boxing Ontario's Club Safety and Security",
		href: 'https://boxingontario.com/clubs/safety-and-security/',
	},
	{
		text: 'Liability Waiver for YGK Boxing',
		href: '/liabilitywaiver.odt',
	},
]

const Links = () => {
	return (
		<div className="max-w-7xl">
			<h2 className="mb-4 text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">
				Links
			</h2>
			<ol className="flex flex-col items-center justify-center">
				{linkList.map((item: ILink, i: number) => {
					return (
						<li key={i} className="text-center">
							<a
								href={item.href}
								className="text-center underline hover:text-blue-200"
							>
								{item.text}
							</a>
						</li>
					)
				})}
			</ol>
			<p className="py-4 text-center font-bold">
				Please bring the Liability Waiver signed to your first Workout at YGK
				Boxing
			</p>
		</div>
	)
}

export default Links
