import axios from "axios";

//link do deploy da api construída
export const api = axios.create({
    baseURL:'https://blogpessoaltp.herokuapp.com'
})

// Função responsável por cadastrar o usuário
export const cadastroUsuario = async( url : any , dados : any , setDado : any ) => {
    const resposta = await api.post( url , dados )
    setDado(resposta.data)
}

// Login responsável por gravar o token de um usuário cadastrado
export const login = async( url : any , dados : any , setDado : any ) => {
    const resposta = await api.post( url , dados )
    setDado(resposta.data.token)
}

// Get postagens e tema
export const busca = async(url: any,setDado:any, header:any) =>{
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const buscaId = async(url: any,setDado:any, header:any) =>{
    const resposta = await api.get(url,header)
    setDado(resposta.data)
}

export const post = async(url: any,dados:any, setDado:any, header:any) =>{
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

export const put = async(url: any,dados:any, setDado:any, header:any) =>{
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

export const deleteId = async(url: any, header:any) =>{
    await api.delete(url, header)
}