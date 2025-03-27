import users from '../data/users'
import {useParams , useNavigate } from 'react-router-dom'

export default function DetalhesUsuario(){
    const {id} = useParams();
    const navigate = useNavigate();
    const user = users.find(user => user.id === parseInt(id)); //Procurar id na data/users
    return(
    <>
    <header>
    <a href="/">Dashboard</a>
    <a href="/usuarios">Usuários</a>
    </header>
    <h1>Detalhes do Usuários</h1>
    <p>{user.nome}</p>
    <p>{user.genero}</p>
    <p>{user.idade}</p>
    <p>{user.id}</p>
    <p>{user.profissao}</p>
    <button onClick={()=> navigate(`/usuarios`)}>Voltar</button>
    </>
    
    )
    
    }