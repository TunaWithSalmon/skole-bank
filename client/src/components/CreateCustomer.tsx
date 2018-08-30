import * as React from 'react'
import Popup from './Popup'
import {Customer} from "../models/Customer";

interface State {
    customer: Customer
}

interface Props {
    createCustomer: (cust: Customer) => void
    close: () => void
}

export default class CreateCustomer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        
        this.state = {
           customer: {
               Cpr: "",
               LastName: "",
               FirstName: "",
               _id: "",
               Modified: new Date(),
               Created: new Date
           } 
        }
    }
    create = () => {
        this.props.createCustomer(this.state.customer);
        this.close()
    };
    
    close = () => this.props.close()
    changeFirstName = (event: any) => this.setState({ customer: { ...this.state.customer, FirstName: event.target.value } })
    changeLastName = (event: any) => this.setState({ customer: { ...this.state.customer, LastName: event.target.value } })
    changeCpr = (event: any) => this.setState({ customer: { ...this.state.customer, Cpr: event.target.value } })
    
    render() {
        return (
            <Popup>
                <div className={"wrapper"}>
                    <p>Create Customer</p>
                    <input onChange={this.changeFirstName} placeholder={"First name"}/>
                    <input onChange={this.changeLastName} placeholder={"Last name"}/>
                    <input onChange={this.changeCpr} placeholder={"Cpr"}/>
                    <div className={"button-wrapper"}>
                        <button onClick={this.close}>Cancel</button>
                        <button onClick={this.create}>Create</button>
                    </div>
                </div>
            </Popup>
        )
    }
}

