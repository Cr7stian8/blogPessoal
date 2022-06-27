import { Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Home from './paginas/Home/Home';

let nome = "Cristiano"

function App() {
  return (
    <Grid container spacing={3}>
          <Grid item xs={12} sm={12}><Home/></Grid>
          <Grid item xs={12} sm={6}><Home/></Grid>
          <Grid item xs={12} sm={6}><Home/></Grid>
          <Grid item xs={12} sm={3}><Home/></Grid>
          <Grid item xs={12} sm={3}><Home/></Grid>
          <Grid item xs={12} sm={3}><Home/></Grid>
          <Grid item xs={12} sm={3}><Home/></Grid>
        </Grid>
  );
}

export default App;
