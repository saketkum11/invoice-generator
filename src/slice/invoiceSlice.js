import { createAction, createSlice } from "@reduxjs/toolkit";
const initialState = {
  invoiceList: [],
};
const invoice = createAction("");
const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    createInvoice: (state, action) => {
      console.log(action);
      state.invoiceList.push(action);
    },
  },
});
export const { createInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
