import * as React from 'react'
import Popup from './Popup'
import {Account} from "../models/Account";
import {Customer} from "../models/Customer";

interface State {
    account: Account
}

interface Props {
    customer: Customer
    createAccount: (acc: Account, id: string) => void
    close: () => void
}

export default class CreateAccount extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            account: {
                _id: "",
                InterestRate: 0,
                CustomerId: props.customer._id,
                Modified: new Date(),
                Created: new Date(),
                AccountType: "",
                AccountNumber: 2
            }
        }
    }
    
    changeType = (event: any) => this.setState({ account: { ...this.state.account, AccountType: event.target.value } })
    close = () => this.props.close()
    create = () => {
        this.props.createAccount(this.state.account, this.props.customer._id);
        this.close()
    }
    
    render() {
        return (
            <Popup>
                <div className={"wrapper"}>
                    <p>Create account</p>
                    <input onChange={this.changeType} placeholder={"Type"}/>
                    <div className={"button-wrapper"}>
                        <button onClick={this.close}>Cancel</button>
                        <button onClick={this.create}>Create</button>
                    </div>
                </div>
            </Popup>
        )
    }
}