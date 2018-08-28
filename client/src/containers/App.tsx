import * as React from 'react';
import List from './List'
import CreateCustomer from '../components/CreateCustomer'
import CreateAccount from '../components/CreateAccount'
import AccountOverview from '../components/AccountOverview'

import {Customer} from "../models/Customer";
import {Account} from "../models/Account";
import {Transaction} from "../models/Transaction";

import '../css/App.css';

interface Props {
   jfhkdshjd: string 
}

interface State {
    createOpen: boolean,
    createAccOpen: boolean,
    customer?: Customer,
    account?: Account,
    customers?: Customer[],
    accounts?: Account[],
    transactions?: Transaction[]
}

const url = "http://localhost:50322/api";

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        
        this.state = {
            createOpen: false,
            createAccOpen: false
        }
    }
    
    componentWillMount() {
        this.getCustomers()
    }
    
    getCustomers() {
        const fetchData = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }

        fetch(`${url}/customer/GetCustomers`, fetchData)
            .then((resp) => resp.json())
            .then((custJson) => {
                this.setState({customers: custJson})
            })
    }
    
    addCustomer(customer: Customer) {
        const fetchData = {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }
        
        fetch(`${url}/customer/PostCustomer`, fetchData)
            .then(() => {
                this.getCustomers()
            });
    }
    
    removeCustomer(customerId: string) {
        const fetchData = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }

        fetch(`${url}/customer/DeleteCustomer/${customerId}`, fetchData)
            .then(() => {
                this.getCustomers()
            });
    }
    
    selectCustomer(customer: Customer) {
        this.setState({ customer, account: undefined })
        this.getAccounts(customer._id)
    }
    
    getAccounts(customerId: string) {
        const fetchData = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }

        fetch(`${url}/account/GetAccounts/${customerId}`, fetchData)
            .then((resp) => resp.json())
            .then((accJson) => {
                this.setState({accounts: accJson})
            })
    }
    
    addAccount(account: Account, customerId: string) {
        const fetchData = {
            method: 'POST',
            body: JSON.stringify(account),
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }

        fetch(`${url}/account/PostAccount/${customerId}`, fetchData)
            .then(() => {
                this.getAccounts(customerId)
            });
    }
    
    removeAccount(accountId: string, custId: string) {
        const fetchData = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }

        fetch(`${url}/account/DeleteAccount/${accountId}`, fetchData)
            .then(() => {
                this.getAccounts(custId)
                this.setState({ account: undefined })
            });
    }
    
    selectAccount(account: Account) {
        this.setState({ account }) 
        this.getTransactions(account._id)
    }
    
    getTransactions(accountId: string) {
        const fetchData = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            }
        }

        fetch(`${url}/transaction/GetTransactions/${accountId}`, fetchData)
            .then((resp) => resp.json())
            .then((transJson) => {
                this.setState({transactions: transJson})
            })
    }
    
    openCreateCustomer = () => this.setState({ createOpen: true })
    closeCreateCustomer = () => this.setState({ createOpen: false })
    onCreateCustomer = (cust: Customer) => this.addCustomer(cust)
    
    openCreateAccount = () => this.setState({ createAccOpen: true })
    closeCreateAccount = () => this.setState({ createAccOpen: false })
    onCreateAccount = (acc: Account, id: string) => this.addAccount(acc, id)
    
    public render() {
        const { customers, customer, accounts, account, transactions } = this.state;
        
        return (
            <div className="App">
                <div className={"list"}>
                    <List 
                        title={"Customers"} 
                        addItem={this.openCreateCustomer} 
                        listItems={customers && customers.map((cust): { label: string, onSelect: () => void, onDelete: () => void, id: string } => 
                            ({ onSelect: () => this.selectCustomer(cust), onDelete: () => this.removeCustomer(cust._id), label: cust.FirstName, id: cust._id })) || []}
                    />
                </div>
                <div className={"list"}>
                    {customer && <List
                        title={"Accounts"}
                        addItem={this.openCreateAccount}
                        listItems={accounts && accounts.map((acc): { label: string,  onSelect: () => void, onDelete: () => void, id: string } =>
                            ({ onSelect: () => this.selectAccount(acc), onDelete: () => this.removeAccount(acc._id, acc.CustomerId), label: acc.AccountNumber.toString(), id: acc._id })) || []}
                    />}
                </div>
                <div className={"account-list"}>
                    {account && <AccountOverview accountNumber={account.AccountNumber.toString()} transactions={transactions || []} />}
                </div>
                {this.state.createOpen && <CreateCustomer createCustomer={this.onCreateCustomer} close={this.closeCreateCustomer}/>}
                {this.state.createAccOpen && this.state.customer && <CreateAccount customer={this.state.customer} createAccount={this.onCreateAccount} close={this.closeCreateAccount}/>}
            </div>
        );
    }
}

export default App;
