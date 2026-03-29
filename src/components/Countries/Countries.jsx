import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('handle visited country clickrd ', country);
        const newVisitedCountres = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountres);
    }
    const handleVisitedFlag = (flag) => {

       const newVisitedFlags = [...visitedFlags, flag];
       setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div >
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Countries Visited: {visitedCountries.length}</h3>
             <h3>Total Visited Flags: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div>
                {visitedFlags.map((flag, index) => (
                    <img key={index} src={flag} alt="Visited Flag" style={{ width: '50px', height: '30px', margin: '5px' }} />
                ))}
            </div>
            <div className='countries'>
                {
                    countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;