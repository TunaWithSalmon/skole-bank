import * as React from 'react'
import Transaction from './Transaction'

import '../css/AccountOverview.css'
import {Transaction as TransactionModel} from "../models/Transaction";

interface Props {
    accountNumber: string,
    transactions: TransactionModel[]
}

const AccountOverview: React.SFC<Props> = ({ accountNumber, transactions }) => (
    <div className={"AccountOverview"}>
        <div className={"accountnr-wrapper"}>
            <p className={"account-label"}>Account num:</p>
            <p className={"account-input"}>{accountNumber}</p>
        </div> 
        <div className={"balance-wrapper"}>
            <p className={"balance-label"}>Balance:</p>
            <p className={"balance-value"}>{transactions.map(x => x.Amount).reduce((acc, val): number => acc + val,  0)}</p>
        </div>
        <div className={"transactions-wrapper"}>
        <ul>
            {transactions.map(trans => <Transaction
                key={trans._id} 
                ammount={trans.Amount}
                date={trans.Created}
                label={trans.TransactionName}
            />)} 
        </ul>
        </div>
    </div>
)

export default AccountOverview