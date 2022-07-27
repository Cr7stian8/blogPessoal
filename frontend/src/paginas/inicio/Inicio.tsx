import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalPostagem from '../../componentes/postagens/modalPostagem/ModalPostagem';
import { addToken } from '../../store/tokens/action';
import { TokenState } from '../../store/tokens/tokenReducer';
import '../inicio/Inicio.css';

function Inicio() {
    let rota = useLocation();

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const dispatch = useDispatch()

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('FLWWW !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined
        })
        navigate('/login')
    }

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


    //Renderização condicional

    var inicioComponent
    if (token !== "" && rota.pathname === "/home") {
        inicioComponent =

            <AppBar position="static">
                <Toolbar
                    variant="dense"
                    className='nav'>
                    <Box
                        justifyContent="start"
                        className='wrap'>
                        <Link
                            to="/posts"
                            className="tdn">
                            <Box
                                mx={1}
                                className='cursor a1'>
                                <Typography
                                    className='texto-inicio'
                                    color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link
                            to="/temas"
                            className="tdn">
                            <Box
                                mx={1}
                                className='cursor a2'>
                                <Typography
                                    className='texto-inicio'
                                    color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link
                            to="/formularioTema"
                            className="tdn">
                            <Box
                                mx={1}
                                className='cursor a3'>
                                <Typography
                                    className='texto-inicio'>
                                    Novo tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box
                            mx={1}
                            className='cursor a4'>
                            <Box
                                display="flex"
                                justifyContent="center">
                                <Box
                                    marginRight={1}
                                    className='texto-inicio'>
                                    <ModalPostagem />
                                </Box>
                            </Box>
                        </Box>

                        <Box
                            className='cursor a5'
                            onClick={goLogout}>
                            <Typography
                                className='texto-inicio sair-inicio'>
                                sair
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {inicioComponent}
        </>
    )
}

export default Inicio