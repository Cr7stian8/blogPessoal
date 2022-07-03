import React, { ChangeEvent, useState, useEffect } from 'react'
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core'
import useLocalStorage from 'react-use-localstorage'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/Service'
import './Login.css'
import UserLogin from '../../models/UserLogin'

function Login() {
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            // dado que quer pegar do usuário : dado digitado pelo usuario
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token !== '') {
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Logado com sucesso, bem vindo')

        } catch (error) {
            alert('Tem certeza que já realizou o cadastro?')
        }
    }

    return (
        <Grid className='container2'>
            <Grid
                xs={6}
                alignItems='center'>
                <Box
                    paddingX='1vw'>
                    <form
                        onSubmit={onSubmit}
                        className='entrar'>
                        <Typography
                            variant='h3'
                            gutterBottom
                            color='textPrimary'
                            align='center'
                            component='h3'
                            className='textos1'>
                            Entrar
                        </Typography>
                        <TextField
                            value={userLogin.usuario}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="usuario"
                            label="e-mail"
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            value={userLogin.senha}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="senha"
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Button
                                type='submit'
                                variant='contained'
                                color='primary'>
                                Logar
                            </Button>
                        </Box>
                        <Box
                        display='flex'
                        justifyContent='center'
                        marginTop={2}
                        className='cadastro'>
                        <Box >
                            <Typography
                                variant="subtitle1"
                                color="initial"
                                gutterBottom
                                align='center'>
                                Não tem uma conta?
                            </Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography
                                variant="subtitle1"
                                color="initial"
                                gutterBottom
                                align='center'
                                className='textos1'>
                                Cadastre-se
                            </Typography>
                        </Link>
                    </Box>
                    </form>
                    
                </Box>
            </Grid>
            <Grid
                xs={6}
                container
                className='imagem'>
            </Grid>
        </Grid>
    )
}

export default Login