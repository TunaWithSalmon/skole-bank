import * as React from 'react'
import '../css/ListItem.css'

interface Props {
    label: string, 
    onDelete: () => void,
}


const ListItem: React.SFC<Props> = ({ label, onDelete }) => (
    <li className={"ListItem"}>
        <p className={"label"}>{label}</p>
        <i className="material-icons delete-button" onClick={onDelete}>delete</i>
    </li>
)

export default ListItem