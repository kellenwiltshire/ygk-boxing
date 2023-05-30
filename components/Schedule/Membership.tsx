import {useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/20/solid'
import {classNames} from '../../utils/helpers/classNames'

const tiers = [
	{
		name: 'First Class',
		description: 'A plan that scales with your rapidly growing business.',
		id: 'tier-freelancer',
		price: 'Free',
		mostPopular: false,
	},
	{
		name: '3-Months',
		id: 'tier-startup',
		href: '#',
		price: '$300',
		description: 'A plan that scales with your rapidly growing business.',
		features: [
			'25 products',
			'Up to 10,000 subscribers',
			'Advanced analytics',
			'24-hour support response time',
			'Marketing automations',
		],
		mostPopular: true,
	},
	{
		name: '1-Month',
		id: 'tier-enterprise',
		href: '#',
		price: '$105',
		description: 'Dedicated support and infrastructure for your company.',
		features: [
			'Unlimited products',
			'Unlimited subscribers',
			'Advanced analytics',
			'1-hour, dedicated support response time',
			'Marketing automations',
			'Custom reporting tools',
		],
		mostPopular: false,
	},
]

export const Membership = () => {

	return (
		<div className='bg-gray-900 py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-4xl text-center'>
					<h2 className='text-base font-semibold leading-7 text-indigo-400'>Pricing</h2>
					<p className='mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl'>
						Pricing plans for teams of&nbsp;all&nbsp;sizes
					</p>
				</div>
				<p className='mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300'>
					Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer
					loyalty, and driving sales.
				</p>

				<div className='isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{tiers.map((tier) => (
						<div
							key={tier.id}
							className={classNames(
								tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
								'rounded-3xl p-8 xl:p-10',
							)}
						>
							<div className='flex items-center justify-between gap-x-4'>
								<h3 id={tier.id} className='text-lg font-semibold leading-8 text-white'>
									{tier.name}
								</h3>
								{tier.mostPopular ? (
									<p className='rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white'>
										Best Deal
									</p>
								) : null}
							</div>
							<p className='mt-4 text-sm leading-6 text-gray-300'>{tier.description}</p>
							<p className='mt-6 flex items-baseline gap-x-1'>
								<span className='text-4xl font-bold tracking-tight text-white'>{tier.price}</span>
							</p>


						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Membership