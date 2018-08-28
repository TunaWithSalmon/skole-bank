import * as React from 'react'
import '../css/Transaction.css'

interface Props {
    label: string,
    date: Date,
    ammount: number
}

const Transaction: React.SFC<Props> = ({ label, ammount, date }) => {
    const aRealDate = new Date(date)
    return (
        <li className={"Transaction"}>
            <p className={"label"}>{label}</p>
            <p className={"date"}>{`${aRealDate.getDate()}/${aRealDate.getMonth()}/${aRealDate.getFullYear()}`}</p>
            <p className={"amount"}>{ammount}</p>
        </li>
    );
}

export default Transaction