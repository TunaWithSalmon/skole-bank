import * as React from 'react'
import '../css/Transaction.css'

interface Props {
    label: string,
    date: Date,
    ammount: number
}

const Transaction: React.SFC<Props> = ({ label, ammount, date }) => (
    <li className={"Transaction"}>
        <p className={"label"}>{label}</p>
        <p className={"date"}>{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</p>
        <p className={"amount"}>{ammount}</p>
    </li>
)

export default Transaction