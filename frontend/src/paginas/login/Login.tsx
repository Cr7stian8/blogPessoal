import React, { ChangeEvent, useState, useEffect } from 'react'
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core'
import useLocalStorage from 'react-use-localstorage'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/Service'
import './Login.css'
import UserLogin from '../../models/UserLogin'

function Login() {
    let navigate = useNavigate();
    const[token, setToken] = useLocalStorage('token');
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

        useEffect(()=>{
            if(token !== ''){
                navigate('/home')
            }
        }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            alert('Logado com sucesso, bem vindo')

        } catch (error) {
            alert('não deu pra fazer seu login, tenta denovo vai ...')
        }
    }

    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
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
                            label="usuário"
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
                    </form>
                    <Box
                        display='flex'
                        justifyContent='center'
                        marginTop={2}>
                        <Box marginRight={1}>
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
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>

            </Grid>
        </Grid>
    )
}

export default Login