export interface Account {
    _id: string,
    CustomerId: string,
    AccountNumber: number,
    AccountType: string, 
    InterestRate: number,
    Balance: number,
    Transactions: Transaction[],
    Created: Date,
    Modified: Date
}