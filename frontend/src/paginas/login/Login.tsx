import React, { ChangeEvent, useState, useEffect } from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../services/Service'
import './Login.css'
import UserLogin from '../../models/UserLogin'
import { useDispatch } from 'react-redux'
import { addToken } from '../../store/tokens/action'
import { toast } from 'react-toastify'
import { Box } from '@mui/material'

function Login() {
    let navigate = useNavigate();
    
    /* Criando hook use Dispatch */
    const dispatch = useDispatch()

    const [token, setToken] = useState('');
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

    /* Hook responsável por verificar se o usuario tem acesso */
    useEffect(() => {
        if (token !== '') {
            /* Armazenando o token */
            dispatch(addToken(token))
            navigate('/home')
        }

    //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setToken)

            toast.success('Logado com sucesso, bem vindo', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme:'colored',
                progress: undefined
            })

        } catch (error) {
            toast.error('Tem certeza que já realizou o cadastro?', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme:'colored',
                progress: undefined
            })
        }
    }

    return (
        <Grid className='container-login'>
            <Grid
                xs={6}
                alignItems='center'
                className='card-login'>
                <Box
                    className='box-entrar'
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
                        {/* <Link to='/cadastrousuario'> */}
                            <Typography
                                variant="subtitle1"
                                color="initial"
                                gutterBottom
                                align='center'
                                className='textos1'>
                                Cadastre-se
                            </Typography>
                        {/* </Link> */}
                    </Box>
                    </form>
                    
                </Box>
            </Grid>
            <Grid
                container
                className='imagem card-login'>
            </Grid>
        </Grid>
    )
}

export default Login