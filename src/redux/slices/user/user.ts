import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./interfaces";


const savedUser = localStorage.getItem("user");

const initialState: UserState = savedUser
	? JSON.parse(savedUser)
	: {
		id: null,
		email: "",
		password: null,
		name: null,
		cnpj: null,
		cpf: null,
		contact_1: null,
		contact_2: null,
		subscription_Status: null,
		subscription_id: null,
		plan:"NULL",
		currentPeriodEnd: null,
		stripe_id: null,
		stripe_connect_id: null,
		token: null,
		AccountVerification: false,
	};


const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			Object.assign(state, action.payload);
			localStorage.setItem("user", JSON.stringify(action.payload));
			localStorage.setItem("token", action.payload.token ?? "");
		},
		clearUser: (state) => {
			Object.assign(state, initialState);
			localStorage.removeItem("user");
			localStorage.removeItem("token");
		}

	},
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
