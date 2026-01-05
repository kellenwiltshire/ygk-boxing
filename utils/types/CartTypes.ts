import { PaymentLink } from 'square/api'

interface LineItem {
	uid: string
	name: string
	quantity: string
	item_type: string
	base_price_money: Money
	variation_total_price_money: Money
	gross_sales_money: Money
	total_tax_money: Money
	total_discount_money: Money
	total_money: Money
}

interface Money {
	amount: number
	currency: string
}

interface Fulfillment {
	uid: string
	type: string
	state: string
}

interface NetAmounts {
	total_money: Money
	tax_money: Money
	discount_money: Money
	tip_money: Money
	service_charge_money: Money
}

interface Order {
	id: string
	location_id: string
	source: {
		name: string
	}
	line_items: LineItem[]
	fulfillments: Fulfillment[]
	net_amounts: NetAmounts
	created_at: string
	updated_at: string
	state: string
	version: number
	total_money: Money
	total_tax_money: Money
	total_discount_money: Money
	total_tip_money: Money
	total_service_charge_money: Money
}

export interface ICartApiResponse {
	paymentLink: PaymentLink
	related_resources: {
		orders: Order[]
	}
}
