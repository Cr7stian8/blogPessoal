import { Grid, Typography, Button, TextField } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import './CadastroUsuario.css'

function CadastroUsuario() {
    return (
        <Grid
            container
            direction='row'
            justifyContent='center'
            alignItems='center'
            
            >    
            <Grid
                item
                xs={6}
                className='imagem2'>
            </Grid>
             <Grid
                item
                xs={6}
                alignItems='center'>
                <Box
                    paddingX={10}>
                    <form>
                        <Typography
                            variant='h3'
                            gutterBottom
                            color='textPrimary'
                            align='center'
                            component='h3'
                            className='textos2'>
                            Cadastrar
                        </Typography>
                        <TextField
                            id="nome"
                            label="nome"
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            id="usuario"
                            label="usuario"
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            type='password'
                            fullWidth
                        />
                        <TextField
                            id="senha"
                            label="senha"
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            fullWidth
                            type='password'
                        />
                        <TextField
                            id="confirmarSenha"
                            label="confirmarsenha"
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button
                                    className='btnCancelar'
                                    variant='contained'
                                    color='secondary'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button
                            color='primary'
                            variant='contained'
                            type='submit'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid> 
        </Grid >
    )
}

export default CadastroUsuario