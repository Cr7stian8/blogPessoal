import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../models/Tema';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { Box } from '@mui/material';

function ListaTema() {
  // ----- HOOKS -------

  //Criando array que vai armazenar todos os temas
  const [temas, setTemas] = useState<Tema[]>([]);

    /* Substituindo Token do useLocalStorage pelo Redux */
    const token = useSelector<TokenState, TokenState["token"]>(
      (state) => state.token
    )

  // Criando variável que permite navegar entre as telas
  let Navigate = useNavigate();

  useEffect(() => {
    if (token === '') {
      toast.info('Você não está logado', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme:'colored',
        progress: undefined
    })
      Navigate('/login')
    }
    // eslint-disable-next-line
  }, [token])

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'authorization': token
      }
    })
  }

  useEffect(() => {
    getTema()
    // eslint-disable-next-line
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