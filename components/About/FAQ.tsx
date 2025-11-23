import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { faqItems } from './faqItems'

export default function FAQ() {
	return (
		<div>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-4xl">
					<div className="mx-auto max-w-4xl pt-4 text-center">
						<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
							Frequently Asked Questions
						</h2>
					</div>

					<dl className="mt-10 space-y-6">
						{faqItems.map((faq) => (
							<Disclosure as="div" key={faq.question} className="pt-6">
								{({ open }) => (
									<>
										<dt>
											<Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
												<span className="text-base leading-7 font-semibold">
													{faq.question}
												</span>
												<span className="ml-6 flex h-7 items-center">
													{open ? (
														<MinusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													) : (
														<PlusSmallIcon
															className="h-6 w-6"
															aria-hidden="true"
														/>
													)}
												</span>
											</Disclosure.Button>
										</dt>
										<Disclosure.Panel as="dd" className="mt-2 pr-12">
											<p className="text-base leading-7 text-gray-300">
												{faq.answer}
											</p>
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	)
}
