import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { addToken } from '../../../store/tokens/action';
import { toast } from 'react-toastify';
import { Box, Button } from '@mui/material';
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';

function Navbar() {

    let rota = useLocation();

    const token = useSelector<TokenState, TokenState['token']>(
        (state) => state.token
    )

    const dispatch = useDispatch()

    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''))
        toast.info('usuario deslogado', {
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

    //Renderização condicional

    var navbarComponent
    if (token !== "" && rota.pathname == "/home") {
        navbarComponent =

            <AppBar position="static">
                <Toolbar variant="dense" className='nav'>
                    <Box justifyContent="start" className='wrap'>
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography className='texto-navbar' color="inherit">
                                    inicio
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography className='texto-navbar' color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography className='texto-navbar' color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography className='texto-navbar' color="inherit">
                                    Novo tema
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor'>
                            <Box display="flex" justifyContent="center">
                                <Box marginRight={1}>
                                    <ModalPostagem/>
                                </Box>
                            </Box>
                        </Box>

                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography className='texto-navbar' color="inherit">
                                sair
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;