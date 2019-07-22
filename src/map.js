import React, { PureComponent } from 'react';
import { countries } from "./constant";


export default class WorldMap extends PureComponent{
  render(){
    const { selectedCountries } = this.props;
    return (
      <div className="word-map">
        {Object.keys(countries).map(country => {
          const isSelected = selectedCountries.includes(countries[country].code);
          return (
            <div className={`dot ${country}`} style={{'--left': `${countries[country].left}px`, '--top': `${countries[country].top}px`, transform: isSelected ? 'scale(1)': 'scale(0)' }}></div>
          )
        })}
      </div>
    )
  }
}
