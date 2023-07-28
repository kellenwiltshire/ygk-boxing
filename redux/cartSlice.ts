import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICartItems {
  catalogObjectId: string;
  name: string;
  priceMoney: number;
}

interface ICart {
  items: Array<ICartItems>;
}

const initialState: ICart = {
  items: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<ICart>) => {
      console.log(action.payload);
      state.items = [...action.payload.items];
    }
  }
});

export const { updateCart } = cartSlice.actions;
export default cartSlice.reducer;