 export type customer ={
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string | null;
    subscription_Status: 
    "NULL"|
    "ACTIVE"|
    "PEDING"|
    "DISABLED";
    stripeCustomerId: string;
    userID: string;
    createdAt: Date;
    updatedAt: Date;
}