import React from 'react'
import { Box, Grid, Typography, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
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
                            id="usuario"
                            label="usuário"
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            id="senha"
                            label="senha"
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            type='password'
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decoration-none'>
                                <Button
                                    type='submit'
                                    variant='contained'
                                    color='primary'>
                                    Logar
                                </Button>
                            </Link>
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