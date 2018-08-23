import * as React from 'react'
import Transaction from './Transaction'

import '../css/AccountOverview.css'
import {Transaction as TransactionModel} from "../models/Transaction";

interface Props {
    accountNumber: string,
    balance: number
    transactions: TransactionModel[]
}

const AccountOverview: React.SFC<Props> = ({ accountNumber, balance, transactions }) => (
    <div className={"AccountOverview"}>
        <div className={"accountnr-wrapper"}>
            <p className={"account-label"}>Account num:</p>
            <p className={"account-input"}>{accountNumber}</p>
        </div> 
        <div className={"balance-wrapper"}>
            <p className={"balance-label"}>Balance:</p>
            <p className={"balance-value"}>{balance}</p>
        </div>
        <ul className={"transactions-wrapper"}>
            {transactions.map(trans => <Transaction
                key={trans._id} 
                ammount={trans.Amount}
                label={trans.TransactionName}
            />)} 
        </ul>
    </div>
)

export default AccountOverview