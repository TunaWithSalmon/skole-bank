import * as React from 'react'
import SearchBar from '../components/SearchBar'
import ListItem from "../components/ListItem";

import '../css/List.css'


interface State {
    searchWord: string
}

interface Props {
    title: string,
    addItem: () => void,
    listItems: { label: string,  onDelete: () => void, id: string }[]
}

class List extends React.Component<Props, State> {
    constructor(props: Props) {
       super(props) 
    }
    
    changeSearch = (word: string) => this.setState({ searchWord: word }) 
    
    render() {
        const { listItems, title, addItem } = this.props
        return (
            <div className={"List"}>
                <SearchBar label={title} onSearchChange={this.changeSearch} onAddClick={addItem} />
                <ul className={"list-wrapper"}>
                    {listItems.filter(item => item.label.includes(this.state.searchWord))
                        .map(item => <ListItem label={item.label} onDelete={item.onDelete} key={item.id} />)}
                </ul>
            </div>
        )
        
    }
}

export default List;