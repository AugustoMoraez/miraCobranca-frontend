export interface UserState {
    id: string|null,
	email: string,
	password: string|null,
	name:string|null,
	cnpj: string|null,
	cpf:  string|null,
	contact_1: string|null,
	contact_2: string|null,
	subscription_Status: string | null,
	subscription_id: string|null,
	currentPeriodEnd: string|null,
	stripe_id: string|null,
	stripe_connect_id: string|null,
	token: string|null,
	AccountVerification:true|false
}