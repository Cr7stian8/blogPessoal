import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';

function ListaTema() {
  // ----- HOOKS -------

  //Criando array que vai armazenar todos os temas
  const [temas, setTemas] = useState<Tema[]>([]);

  //Pegando o token gerado na hora do login
  const [token, setToken] = useLocalStorage('token');

  // Criando variável que permite navegar entre as telas
  let Navigate = useNavigate();

  useEffect(() => {
    if (token === '') {
      alert('Você não realizou o login')
      Navigate('/login')
    }
  }, [token])

  async function getTema() {
    await busca("/tema", setTemas, {
      headers: {
        'authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
  }, [temas.length])
  return (
    <>
      {
        temas.map(tema => (
          <Box m={2} >
            <Card
              variant="outlined">
              <CardContent>
                <Typography
                  color="textSecondary"
                  gutterBottom>
                  Tema
                </Typography>
                <Typography
                  variant="h5"
                  component="h2">
                  {tema.descricao}
                </Typography>
              </CardContent>
              <CardActions>
                <Box
                  display="flex"
                  justifyContent="center"
                  mb={1.5} >
                  <Link
                    to={`/formularioTema/${tema.id}`}
                    className="text-decorator-none">
                    <Box
                      mx={1}>
                      <Button
                        variant="contained"
                        className="marginLeft"
                        size='small'
                        color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link
                    to={`/deletarTema/${tema.id}`}
                    className="text-decorator-none">
                    <Box
                      mx={1}>
                      <Button
                        variant="contained"
                        size='small'
                        color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            </Card>
          </Box>
        ))
      }
    </>
  );
}


export default ListaTema;