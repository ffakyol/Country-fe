import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
//import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import CardData from './Data.json';
import { Container } from '@mui/system';
import { useState } from 'react';



export default function OutlinedCard() {
  const [query, setQuery] = useState("");
    return (
      <Container>
        <Box p={5}>
        <Grid container spacing={5}>
      <div className="app">
       <input
          className="search"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        <Card>
       <ul className="list">
          {CardData.filter((asd) =>
           asd.name.toLowerCase().includes(query)
         ).map((country) => (
          
      
          <Typography className="listItem" key={country.id}> 
        Name:  {country.name}<br></br>
        Phone: {country.phone}<br></br>
       
        </Typography> 
         
      ))}
         
       </ul>
       </Card>
     </div>
     </Grid>
     </Box>
     </Container>
   );
 }
 

  