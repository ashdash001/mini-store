import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>(); 
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
