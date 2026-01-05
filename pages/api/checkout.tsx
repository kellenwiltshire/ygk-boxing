import { NextApiRequest, NextApiResponse } from 'next'
import client from '../../square.connect'
import { ICartItems } from '../../redux/cartSlice'
import { randomUUID } from 'crypto'
import { Currency, OrderLineItem, PaymentLink } from 'square/api'

export default async function Checkout(
	req: NextApiRequest,
	res: NextApiResponse<PaymentLink>,
) {
	console.log('HERE')
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const items: Array<ICartItems> = req.body
	const locationId = '3K1HJD5MWBAFJ'
	const taxId = 'AEOZ4I6FC4HZOLD4W4KOA6LL'

	const convertedItems: OrderLineItem[] = items.map((item) => {
		return {
			quantity: item.quantity.toString(),
			catalogObjectId: item.catalogObjectId,
			basePriceMoney: {
				amount: BigInt(item.basePriceMoney.priceMoney),
				currency: item.basePriceMoney.currency as Currency,
			},
		}
	})

	try {
		const response = await client.checkout.paymentLinks.create({
			idempotencyKey: randomUUID(),
			order: {
				locationId: locationId,
				lineItems: [...convertedItems],
				taxes: [
					{
						catalogObjectId: taxId,
					},
				],
			},
			checkoutOptions: {
				acceptedPaymentMethods: {
					applePay: true,
					googlePay: true,
					cashAppPay: true,
					afterpayClearpay: true,
				},
				redirectUrl: 'https://ygkboxing.com/store/order-completed',
			},
		})
		if (response?.paymentLink) {
			res.status(200).json(response.paymentLink)
		}
	} catch (error) {
		console.log(error)
	}
}
