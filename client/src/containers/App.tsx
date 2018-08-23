import * as React from 'react';
import List from './List'
import AccountOverview from '../components/AccountOverview'

import {Customer} from "../models/Customer";
import {Account} from "../models/Account";
import {Transaction} from "../models/Transaction";

import '../css/App.css';

interface Props {
   jfhkdshjd: string 
}

interface State {
    customer?: Customer,
    account?: Account,
    customers?: Customer[],
    accounts?: Account[],
    transactions?: Transaction[]
}


class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        
        this.state = {
            account: {
                AccountNumber: 2222321,
                _id: "jfkdajf",
                AccountType: "jkfda",
                Created: new Date(),
                Modified: new Date(),
                CustomerId: "faklj",
                InterestRate: 0.12
            },
            accounts: [{
                AccountNumber: 2222321,
                _id: "jfkdajf",
                AccountType: "jkfda",
                Created: new Date(),
                Modified: new Date(),
                CustomerId: "faklj",
                InterestRate: 0.12
            }],
            customer: {
                _id: "das",
                Cpr: "fjs",
                Created: new Date(),
                Modified: new Date(),
                FirstName: "Rasmus",
                LastName: "Davidsen"
            },
            customers: [{
                _id: "das",
                Cpr: "fjs",
                Created: new Date(),
                Modified: new Date(),
                FirstName: "Rasmus",
                LastName: "Davidsen"
            }],
            transactions: [
                { Amount: 32, TransactionName: "fsd", _id: "23", AccountId: "43", Created: new Date(), Modified: new Date()}
            ]
            
        }
    }
    
    addCustomer() {

    }
    
    removeCustomer(customerId: string) {
        
    }
    
    addAccount(customerId: string) {
        
    }
    
    removeAccount(accountId: string) {
        
    }
    
    getTransactions(accountId: string) {
        
    }
    
    public render() {
        const { customers, customer, accounts, account, transactions } = this.state;
        
        return (
            <div className="App">
                <div className={"list"}>
                    <List 
                        title={"Customers"} 
                        addItem={() => this.addCustomer()} 
                        listItems={customers && customers.map((cust): { label: string,  onDelete: () => void, id: string } => 
                            ({ onDelete: () => this.removeCustomer(cust._id), label: cust.FirstName, id: cust._id })) || []}
                    />
                </div>
                <div className={"list"}>
                    <List
                        title={"Accounts"}
                        addItem={() => this.addAccount(customer && customer._id || "")}
                        listItems={accounts && accounts.map((acc): { label: string,  onDelete: () => void, id: string } =>
                            ({ onDelete: () => this.removeAccount(acc._id), label: acc.AccountNumber.toString(), id: acc._id })) || []}
                    />
                </div>
                <div className={"account-list"}>
                    {account && <AccountOverview accountNumber={account.AccountNumber.toString()} transactions={transactions || []} />}
                </div>
            </div>
        );
    }
}

export default App;
