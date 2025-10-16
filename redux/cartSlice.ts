import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ICartItems {
	quantity: number
	catalogObjectId: string
	name: string
	basePriceMoney: {
		priceMoney: number
		currency: string
	}
}

export interface ICart {
	items: Array<ICartItems>
}

const initialState: ICart = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartItems>) => {
			const newItem = action.payload
			const existingItem = state.items.find(
				(item) => item.catalogObjectId === newItem.catalogObjectId,
			)
			if (existingItem) {
				existingItem.quantity++
			} else {
				state.items.push({ ...newItem })
			}
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			const itemIdToRemove = action.payload
			const existingItem = state.items.find(
				(item) => item.catalogObjectId === itemIdToRemove,
			)
			if (existingItem) {
				state.items = state.items.filter(
					(item) => item.catalogObjectId !== itemIdToRemove,
				)
			}
		},
	},
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
