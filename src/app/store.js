import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import bestSellerReducer from '../features/bestSeller/bestSellerSlice';
import tableReducer from "../features/table/tableSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bestSeller: bestSellerReducer,
    table: tableReducer,
  },
});
