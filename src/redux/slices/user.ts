import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./interfaces";



const initialState: UserState = {
    id: null,
	email: null,
	password: null,
	name: null,
	cnpj: null,
	cpf: null,
	contact_1: null,
	contact_2: null,
	subscription_Status: null,
	subscription_id: null,
	currentPeriodEnd: null,
	stripe_id:null,
	stripe_connect_id: null,
	token:null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
		Object.assign(state, action.payload);
    },
    clearUser: () => {},
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
