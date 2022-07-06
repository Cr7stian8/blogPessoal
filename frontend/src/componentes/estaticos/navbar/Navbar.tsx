import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import useLocalStorage from 'react-use-localstorage';

function Navbar() {
    const [token, setToken] = useLocalStorage('token')
    let navigate = useNavigate()

    function sair() {
        alert('Usuario deslogado')
        navigate('/login')
        setToken('')
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='container'>
                    <Box className='cursor tdn'>
                        <Typography variant="h5" color="inherit">
                            Cr7's, O blog.
                        </Typography>
                    </Box>

                    <Box display="flex">
                        <Link to='/home' className='tdn'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/posts' className='tdn'>
                            <Box mx={1} className='cursor '>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/temas' className='tdn'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/formularioTema' className='tdn'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/login' className='text-decorator-none' >
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    sair
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;