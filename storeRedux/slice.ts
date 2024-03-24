import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISliceState {
	name: string | null;
	password: string | null;
}

const initialState: ISliceState = {
	name: null,
	password: null,
};

export const sliceFirst = createSlice({
	name: "slice",
	initialState,
	reducers: {
		show: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
			console.log(state.name);
		},
		getler: (state, action: PayloadAction<string>) => {
			state.password = action.payload;
		},
	},
});

export const sliceActions = sliceFirst.actions;
export default sliceFirst.reducer;
