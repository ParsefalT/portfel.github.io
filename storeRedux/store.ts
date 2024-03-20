import { configureStore } from "@reduxjs/toolkit";
import sliceFirst from "./slice";

export const store = configureStore({
	reducer: {
		slice: sliceFirst,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type typeAppDispath = typeof store.dispatch;
