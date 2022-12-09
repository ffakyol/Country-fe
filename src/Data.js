import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import CardData from './Data.json';
import { Container } from '@mui/system';

const card = (
  <Container>
    <Box p={5}>
  <Grid container spacing={5}>
    <Card sx={{ minWidth: 275 }}>
    { CardData.map (CardData=> (
      
      <Grid item key={CardData.id} xs={3} md={6} lg={80}>
        <Card>
        <Typography gutterBottom variant='h5' component="h2">
        {CardData.name}<br></br>
        </Typography>
       <br></br>
       <Typography b>
       Native:{CardData.native}<br></br>
       Phone: {CardData.phone}<br></br>
       Capital:{CardData.capital}<br></br>
       Continent:{CardData.continent}<br></br>
       Currency:{CardData.currency}<br></br>
       Languages:{CardData.languages}<br></br>
       <br></br>
       </Typography>
       </Card>
       <Button size="small" color='primary'>Daha Fazla</Button>
      </Grid>
  ))}
    </Card>
  </Grid>
  </Box>
  </Container>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

