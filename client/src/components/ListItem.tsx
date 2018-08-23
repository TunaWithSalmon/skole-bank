import * as React from 'react'
import '../css/ListItem.css'

interface Props {
    label: string, 
    onDelete: () => void,
}


const ListItem: React.SFC<Props> = ({ label, onDelete }) => (
    <li className={"ListItem"}>
        <p className={"label"}>{label}</p>
        <button onClick={onDelete} className={"delete-button"}>
            <i className="material-icons">delete</i>
        </button>
    </li>
)

export default ListItem