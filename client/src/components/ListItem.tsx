import * as React from 'react'
import '../css/ListItem.css'

interface Props {
    label: string, 
    onDelete: () => void,
    onSelect: () => void
}


const ListItem: React.SFC<Props> = ({ label, onDelete, onSelect }) => (
    <li className={"ListItem"}
        onClick={onSelect}
    >
        <p className={"label"}>{label}</p>
        <i className="material-icons delete-button" onClick={onDelete}>delete</i>
    </li>
)

export default ListItem