import React, { use, useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries ,handleVisitedFlag}) => {

    const [visited, setVisited] = useState(false);

    const handleVisit = () => {

        setVisited(!visited);

        handleVisitedCountries(country);

    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Name: {country.name.common}</h4>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} - {country.area.area > 300000 ? 'Big Country' : 'Small Country'}</p>
            <button onClick={handleVisit}>
                {
                    visited ? 'Visited' : ' Not Visited'
                }
            </button> 
            <button onClick={() => handleVisitedFlag(country.flags.flags.png)}>Add Visited Flags</button>
        </div>
    );
};

export default Country;