import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../componentes/postagens/tabpostagem/TabPostagem';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';

function Home() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    
    useEffect(() => {
      if (token === "") {
          alert("Você precisa estar logado")
          navigate("/login")
      }
      // eslint-disable-next-line
  }, [token])

  return (
    <>
      {/* Display da página */}
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className='caixa'
        >

        {/* Primeiro Grid */}

        <Grid alignItems="center" item xs={6} >
          <Box paddingX={20} >

            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className='titulo'>
              bem vindo(a)
            </Typography>

            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className='titulo'
            >Vai lá e cadastre a sua postagem, é uma ordem !
            </Typography>

          </Box> 

          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem/>
            </Box>

            <Button
              variant="outlined"
              className='botao'
            >Ver Postagens
            </Button>

          </Box>
        </Grid>

        { /* Segundo Grid */}

        <Grid item xs={6}>
          <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
        </Grid>

        <Grid xs={12} className='postagens'>
            <TabPostagem/>
        </Grid>
      </Grid>

    </>
  );
}

export default Home;