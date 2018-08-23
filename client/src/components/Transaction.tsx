import * as React from 'react'
import '../css/Transaction.css'

interface Props {
    label: string, 
    ammount: number
}

const Transaction: React.SFC<Props> = ({ label, ammount }) => (
    <li className={"Transaction"}>
        <p className={"label"}>{label}</p>
        <p className={"amount"}>{ammount}</p>
    </li>
)

export default Transaction