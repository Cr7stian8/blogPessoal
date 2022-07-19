import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';



function ListaPostagem() {
  /* Substituindo Token do useLocalStorage pelo Redux */
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  )

  const [posts, setPosts] = useState<Postagem[]>([])

  let navigate = useNavigate();

  useEffect(() => {
    if (token === "") {
      toast.error('Você não está logado', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined
      })
      navigate("/login")
    }
    // eslint-disable-next-line
  }, [token])

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {

    getPost()
    // eslint-disable-next-line
  }, [posts.length])

  return (
    <>
      <div className='cards'>
        {
          posts.map(post => (
            <div className='card'>
              {/* Tudo menos botões */}
              <section>
                <article>
                  {post.tema?.descricao}
                </article>
                <article>
                  {post.titulo}
                </article>
                <article>
                  {post.texto}
                </article>
              </section>

              {/* Botões */}
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" className="marginLeft" size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>

            </div>

          ))
        }
      </div>
    </>
  )
}

export default ListaPostagem;