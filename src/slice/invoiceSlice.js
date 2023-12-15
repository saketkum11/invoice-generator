import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  invoiceList: [],
  name: {
    id: "jksdhfsjd",
  },
};
const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {},
});
export default invoiceSlice.reducer;
