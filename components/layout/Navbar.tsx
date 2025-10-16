import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { navigation } from '../../utils/Consts/Layout/navigation'
import { INavProps } from '../../utils/types/LayoutTypes'
import ShoppingCart from '../Store/ShoppingCart'
import { useAppSelector } from '../../redux/hooks'
import Image from 'next/image'

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
	const { cart } = useAppSelector((state) => state)
	return (
		<header className="bg-black text-white">
			<nav
				className="flex w-full items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex justify-self-start">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">YGK Boxing</span>
						<Image
							height={32}
							width={32}
							className="h-8 rounded-full"
							src="/pictures/ygklogo.webp"
							alt="YGK Boxing"
						/>
					</a>
				</div>

				{/* Mobile Navbar */}
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden flex-1 justify-center lg:flex">
					<div className="flex lg:gap-x-12">
						{navigation.map((item: INavProps) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm leading-6 font-semibold text-white"
							>
								{item.name}
							</a>
						))}
					</div>
				</div>
				{cart.items.length > 0 && (
					<div className="flex justify-self-end">
						<ShoppingCart />
					</div>
				)}
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#121212] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<Image
								height={32}
								width={32}
								className="h-8 w-auto rounded-full"
								src="/pictures/ygklogo.webp"
								alt=""
							/>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-400"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/25">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 font-semibold text-white hover:bg-gray-800"
									>
										{item.name}
									</a>
								))}
								{cart.items.length > 0 && <ShoppingCart />}
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}

export default Navbar
