import * as React from 'react'
import '../css/SearchBar.css'

interface Props {
    label: string,
    onAddClick: () => void,
    onSearchChange: (searchWord: string) => void,
}

const SearchBar: React.SFC<Props> = ({onAddClick, onSearchChange, label}) => {
    const search = (s: any) => onSearchChange(s.target.value)
    return (
        <div className={"SearchBar"}>
            <div className={"searchbar-wrapper"}>
                <input placeholder={"Search"} onChange={search}/>
            </div>
            <div className={"add-wrapper"}>
                <p className={"label"}>{label}</p>
                <i onClick={onAddClick} className="material-icons add-button">add</i>
            </div>
        </div>
    )
}

export default SearchBar