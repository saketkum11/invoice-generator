import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../slice/invoiceSlice";
const appStore = configureStore({
  reducer: {
    Invoice: invoiceReducer,
  },
});
export { appStore };
