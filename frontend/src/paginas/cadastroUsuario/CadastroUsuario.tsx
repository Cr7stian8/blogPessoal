import React , {useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { Grid, Box, Typography, Button, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if(user.senha == "" || user.nome=="" || user.usuario==""){
            alert('Possui campos vazios')
        }
        else if (user.usuario.includes("@") === false || user.usuario.includes(".com") === false){
            alert('Formato esperado no campo e-mail: email@email.com')
        }
        else if (user.senha.length < 5) {
            alert('A senha deve conter ao menos 5 digitos')
        }
        else if (confirmarSenha != user.senha) {
            alert('As senhas não correspondem')
        }
        // O usuário só será cadastrado se todas as condições acima forem satisfeitas  
        else {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('usuario cadastrado')
        }
    }
    
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
                    <form onSubmit={onSubmit}>
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
                            value={ user.nome }
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="nome"
                            label="nome"
                            variant='outlined'
                            name='nome'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            value={ user.usuario }
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e) }
                            id="usuario"
                            label="e-mail"
                            variant='outlined'
                            name='usuario'
                            margin='normal'
                            fullWidth
                        />
                        <TextField
                            value={ user.senha }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            id="senha"
                            label="senha"
                            variant='outlined'
                            name='senha'
                            margin='normal'
                            fullWidth
                            type='password'
                        />
                        <TextField
                            value={ confirmarSenha }
                            onChange={ (e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)}
                            id="confirmarSenha"
                            label="confirmar senha"
                            variant='outlined'
                            name='confirmarSenha'
                            margin='normal'
                            type='password'
                            fullWidth
                        />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button
                                    className='btnCancelar'
                                    variant='contained'
                                    color='secondary'>
                                    voltar
                                </Button>
                            </Link>
                            <Button
                                className='cadastrar'
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