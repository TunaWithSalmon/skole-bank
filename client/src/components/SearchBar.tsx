import * as React from 'react'
import '../css/SearchBar.css'

interface Props {
    label: string, 
    onAddClick: () => void,
    onSearchChange: (searchWord: string) => void,
}

const SearchBar: React.SFC<Props> = ({ onAddClick, onSearchChange, label }) => (
    <div className={"SearchBar"}>
        <div className={"searchbar-wrapper"}>
           <input onChange={(s) => onSearchChange(s.target.value)}/> 
        </div>
        <div className={"add-wrapper"}>
            <div>
                <p className={"label"}>{label}</p>
            </div>
            <div>
                <button onClick={onAddClick} className={"add-button"}>
                    <i className="material-icons">add</i>
                </button>       
            </div>
        </div>
    </div>
)

export default SearchBar