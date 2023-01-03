import React from "react";
import './App.css';
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

export default function SearchAppBar() {
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

     <div className="incomeListContainer">
        { countries.map((item) => {
              return(
                  <div className="incomeList" key={item.id} >

                  <div>Country Code:{item.id}</div>
                  <div>Country Name:{item.name}</div><br></br>
                  <div>Phone Code:{item.phoneCode}</div>
                   
                </div>
            )
            })
            }
        </div>
          
       
  );
};

