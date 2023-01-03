import React from "react";
import './App.css';
import Link from '@mui/material/Link';
import {useEffect, useState} from "react";
import {Country} from './model/Country.js';

let countries = [];

function toCountryList(data){
  for (const d in data) {
    const countryJson = data[d];
    const country = new Country(
        countryJson.id,
        countryJson.name,
        countryJson.nativeName,
        countryJson.phoneCode,
        countryJson.continent,
        countryJson.capital,
        countryJson.currency,
        countryJson.languages,
        countryJson.flag,
    );
    countries.push(country);
  }
}



export default function GridView() {
  const [restData, setRestData] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8080/countries')
          .then((response) => response.json())
          .then((data) => {
              setRestData(data);
          })
          .catch((err) => {
              console.log(err.message);
          });
  }, []);

  toCountryList(restData);
  return (  
     <div className='dataContainer'>
      
      { countries.map((item) => {
            return (
              
              <div className="data" key={item.id} alt="/GridView">
            <Link  underline="none" color="inherit"to={`${item.name}`}>
            
                <h3> Country Code:{item.id}</h3><br></br>
                <h3>Country Name:{item.name}</h3><br></br>
                <h3>Phone Code:{item.phoneCode}</h3><br></br>
            </Link>
          </div>
        )})}
      
      </div>
      
  );
};

