import React, { Fragment, useMemo, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { ICartItems, removeFromCart } from '../../redux/cartSlice'
import { calculatePrice } from '../../utils/helpers/calcPrice'
import { PaymentLink } from 'square/api'

const ShoppingCart = () => {
	const { cart } = useAppSelector((state) => state)
	const dispatch = useAppDispatch()

	const [error, setError] = useState(false)
	const [loading, setLoading] = useState(false)

	const totalCost = useMemo(() => {
		return cart.items.reduce((acc, curr) => {
			return acc + curr.basePriceMoney.priceMoney
		}, 0)
	}, [cart])

	const removeItem = (id: string) => {
		dispatch(removeFromCart(id))
	}

	const submitCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
		setLoading(true)
		e.preventDefault()
		fetch('/api/checkout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cart.items),
		})
			.then((result) => {
				if (!result.ok) {
					throw new Error()
				} else {
					return result.json()
				}
			})
			.then((data: PaymentLink) => {
				if (data.url) {
					window.location.href = data.url
				} else {
					throw new Error('No Payment Link')
				}
			})
			.catch((error) => {
				setError(true)
				console.log(error)
			})
			.finally(() => setLoading(false))
	}

	return (
		<Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8">
			<Popover.Button className="group -m-2 flex items-center p-2">
				<ShoppingBagIcon
					className="h-6 w-6 flex-shrink-0 group-hover:text-gray-500"
					aria-hidden="true"
				/>
				<span className="ml-2 text-sm font-medium group-hover:text-gray-500">
					{cart.items.length}
				</span>
				<span className="sr-only">items in cart, view bag</span>
			</Popover.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0"
				enterTo="opacity-100"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100"
				leaveTo="opacity-0"
			>
				<Popover.Panel className="lg:ring-opacity-5 absolute inset-x-0 top-16 z-50 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:top-full lg:right-0 lg:left-auto lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black">
					<h2 className="sr-only">Shopping Cart</h2>

					<form className="mx-auto max-w-2xl px-4">
						<ul role="list" className="divide-y divide-gray-200">
							{cart.items.map((product: ICartItems, i) => (
								<li
									key={`${product.catalogObjectId}_${i}`}
									className="flex items-center py-6"
								>
									<div className="flex-auto">
										<h3 className="font-medium text-gray-900">
											<a href={product.catalogObjectId}>{product.name}</a>
										</h3>
										<p className="text-gray-500">
											{calculatePrice(product.basePriceMoney.priceMoney)}
										</p>
										<p className="text-gray-500">Qty: {product.quantity}</p>
										<button
											onClick={() => removeItem(product.catalogObjectId)}
											className="cursor-pointer text-black"
										>
											Remove
										</button>
									</div>
								</li>
							))}
							<div className="flex justify-between py-4 text-black">
								<dt>Subtotal</dt>
								<dd>{calculatePrice(totalCost)}</dd>
							</div>
						</ul>

						<button
							onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
								submitCheckout(e)
							}
							disabled={loading || error}
							className="w-full cursor-pointer rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 focus:outline-none disabled:cursor-none disabled:bg-gray-500"
						>
							{loading
								? 'Please Wait...'
								: error
									? 'Error, try again later'
									: 'Checkout'}
						</button>
					</form>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}

export default ShoppingCart
