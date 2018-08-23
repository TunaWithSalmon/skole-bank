import * as React from 'react';
import List from '../components/List'
import ListItem from '../components/ListItem'
import AccountOverview from '../components/AccountOverview'

import {Customer} from "../models/Customer";

import '../css/App.css';

interface State {
   customers?: Customer 
}


class App extends React.Component<null, State> {
  public render() {
    return (
      <div className="App">
        <div className={"list"}>
            
        </div>
        <div className={"list"}>
            <List />
        </div>
        <div className={"account-list"}>
           <AccountOverview/> 
        </div> 
      </div>
    );
  }
}

export default App;
