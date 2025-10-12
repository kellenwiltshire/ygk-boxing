import { BuildingOffice2Icon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { useForm } from '@formspree/react'

const ContactUs = () => {
	const [state, handleSubmit] = useForm('mknlddev')

	return (
		<div className="relative isolate">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pt-4 pb-4 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<h2 className="text-3xl font-bold tracking-tight text-white">
							Get in touch
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							Have questions before you get started? Send us a message and
							we&apos;ll be happy to answer any questions you have!
						</p>
						<dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Address</span>
									<BuildingOffice2Icon
										className="h-7 w-6 text-gray-400"
										aria-hidden="true"
									/>
								</dt>
								<dd>
									1121 Middle Road
									<br />
									Kingston, On, K7L 4V3
								</dd>
							</div>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Email</span>
									<EnvelopeIcon
										className="h-7 w-6 text-gray-400"
										aria-hidden="true"
									/>
								</dt>
								<dd>
									<a
										className="hover:text-white"
										href="mailto:contact@ygkboxing.com"
									>
										contact@ygkboxing.com
									</a>
								</dd>
							</div>
						</dl>
					</div>
				</div>
				{state.succeeded ? (
					<div className="flex h-full w-full items-center justify-center px-6 pb-24 sm:pb-32 lg:px-8 lg:py-48">
						<p className="mt-6 text-lg leading-8 text-gray-300">
							Thank you for the message! We will contact you shortly!
						</p>
					</div>
				) : (
					// eslint-disable-next-line @typescript-eslint/no-misused-promises
					<form
						onSubmit={handleSubmit}
						className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-48"
					>
						<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
							<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
								<div>
									<label
										htmlFor="first-name"
										className="block text-sm leading-6 font-semibold text-white"
									>
										First name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-indigo-500 focus:ring-inset sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div>
									<label
										htmlFor="last-name"
										className="block text-sm leading-6 font-semibold text-white"
									>
										Last name
									</label>
									<div className="mt-2.5">
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-indigo-500 focus:ring-inset sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="email"
										className="block text-sm leading-6 font-semibold text-white"
									>
										Email
									</label>
									<div className="mt-2.5">
										<input
											type="email"
											name="email"
											id="email"
											autoComplete="email"
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-indigo-500 focus:ring-inset sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="phone-number"
										className="block text-sm leading-6 font-semibold text-white"
									>
										Phone number
									</label>
									<div className="mt-2.5">
										<input
											type="tel"
											name="phone-number"
											id="phone-number"
											autoComplete="tel"
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-indigo-500 focus:ring-inset sm:text-sm sm:leading-6"
										/>
									</div>
								</div>
								<div className="sm:col-span-2">
									<label
										htmlFor="message"
										className="block text-sm leading-6 font-semibold text-white"
									>
										Message
									</label>
									<div className="mt-2.5">
										<textarea
											name="message"
											id="message"
											rows={4}
											className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-indigo-500 focus:ring-inset sm:text-sm sm:leading-6"
											defaultValue={''}
										/>
									</div>
								</div>
							</div>
							<div className="mt-8 flex justify-end">
								<button
									type="submit"
									disabled={state.submitting}
									className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
								>
									Send message
								</button>
							</div>
						</div>
					</form>
				)}
			</div>
		</div>
	)
}

export default ContactUs
