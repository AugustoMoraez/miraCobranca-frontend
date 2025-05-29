export interface UserState {
    id: string|null,
	email: string,
	name:string|null,
	cnpj: string|null,
	cpf:  string|null,
	contact_1: string|null,
	contact_2: string|null,
	subscription_Status: string | null,
	subscription_id: string|null,
	currentPeriodEnd: string|null,
	plan:"BASIC"|"PRO"|"PREMIUM"| "NULL",
	stripe_id: string|null,
	stripe_connect_id: string|null,
	AccountVerification:true|false
}