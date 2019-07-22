import React, { PureComponent } from 'react';
import "react-tabs/style/react-tabs.css";
import WorldMap from './map';

import './App.css';

export default class App extends PureComponent{
  state = {
    countryToShow: []
  }

  render(){
    const { countryToShow } = this.state;
    return(
      <div className="App">
        <div className="tabs">
          <ul>
            <li onClick={() => this.setState({countryToShow: ['IN', 'PK', 'US']})}>
              First
            </li>
            <li onClick={() => this.setState({countryToShow: ['IN', 'RU', 'CA']})}>
              Second
            </li>
            <li onClick={() => this.setState({countryToShow: ['US', 'RU', 'CA']})}>
              Third
            </li>
            <li onClick={() => this.setState({countryToShow: ['AF', 'PK', 'US']})}>
              Fourth
            </li>
            <li onClick={() => this.setState({countryToShow: ['AF', 'IN', 'CA']})}>
              Fifth
            </li>
          </ul>
        </div>
        <WorldMap selectedCountries={countryToShow} />
      </div>
    )
  }
}
