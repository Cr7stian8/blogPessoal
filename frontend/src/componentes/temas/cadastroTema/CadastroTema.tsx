import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';


function CadastroTema() {
    let navigate = useNavigate()

    // Use param é resposável por capturar o id da url
    const { id } = useParams<{ id: string }>()

    //Pegando token do armazenamento local
    const [token, setToken] = useLocalStorage('token')

    //Inicializando state vazio
    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

    //Verificando se o usuário está autenticado ao carregar a tela
    useEffect(() => {
        if (token === "") {
            alert('Você não realizou o login')
            navigate('/login')
        }
    }, [token])

    //Função que vai ser disparado no useEffect caso haja um id definido
    async function findByID(id: string) {
        //Função criada na service que realiza a busca no banco de dados pelo id
        buscaId(`/temas/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    //Verificando se o id está definido e realizando a busca
    useEffect(() => {
        if (id !== undefined) {
            findByID(id)
        }
    }, [id])

    //Captura os valores a partir do formulário
    function updatedTema(e: ChangeEvent<HTMLInputElement>){
        setTema ({
            ...tema,
            [e.target.name]: e.target.value
        })
    }

    //Função responsável por enviar os dados do tema cadastrado
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        //Verificando se o id está definido 
        // Atualizando caso esteja
        if (id !== undefined) {
            console.log(tema)
            put(`/temas`, tema, setTema, {
                headers: {
                    'Authorization' : token
                }
            })
            alert("Você atualizou com 100% de sucesso sem erros parabéns !")
            navigate('/temas')
        }
        // Cadastrando caso não esteaja
        else{
            post(`temas`, tema, setTema, {
                headers : {
                    'Authorization' : token
                }
            })
            alert("Você conseguiu cadastrar um tema! Que tal adicionar uma postagem agora?")
            navigate('/temas')
        }
    }


    return (
        <Container
            maxWidth="sm"
            className="topo">
            <form onSubmit={onSubmit}>
                <Typography
                    variant="h3"
                    color="textSecondary"
                    component="h1"
                    align="center" >
                    Formulário de cadastro tema
                </Typography>
                <TextField
                    value={tema.descricao}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
                    id="descricao"
                    label="descrição"
                    variant="outlined"
                    name="descricao"
                    margin="normal"
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;

function back() {
    throw new Error('Function not implemented.');
}
