import { classNames } from '../../utils/helpers/classNames'
import { tiers } from './Vars/Tiers'

export const Membership = () => {
	return (
		<div className="pt-4 pb-24 sm:pb-16">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
						Membership
					</h2>
				</div>

				<div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-5">
					{tiers.map((tier) => (
						<div
							key={tier.id}
							className={classNames(
								'ring-2 ring-white',
								'flex h-full flex-col justify-between rounded-3xl p-8 xl:p-10',
							)}
						>
							<div className="flex items-center justify-between gap-x-4">
								<h3
									id={tier.id}
									className="text-lg leading-8 font-semibold text-white"
								>
									{tier.name}
								</h3>
							</div>
							<p className="mt-4 text-sm leading-6 text-gray-300">
								{tier.description}
							</p>
							<p className="mt-6 flex items-baseline gap-x-1">
								<span className="text-4xl font-bold tracking-tight text-white">
									{tier.price}
								</span>
							</p>
						</div>
					))}
				</div>
				<div className="flex w-full justify-center">
					<a
						href="https://boxingcanada.org/registration/"
						className="mt-4 text-center text-2xl leading-7 font-semibold underline"
					>
						Register with Boxing Ontario HERE
					</a>
				</div>
			</div>
		</div>
	)
}

export default Membership
