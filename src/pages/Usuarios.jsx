import users from '../data/users'
import {useNavigate} from 'react-router-dom'

export default function Usuarios() {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <a href="/">Dashboard</a>
                <a href="/usuarios">Usuários</a>
            </header>
            <h1>Usuários</h1>
            
            <div style={{display:'grid' ,gap:16, gridTemplateColumns:'1fr 1fr 1fr 1fr' }}>

                {users.map(user=> (
                    <div  onClick={()=> navigate(`/usuarios/${user.id}`)}  key={user.id}>
                        <p>{user.nome}</p>
                        <p>{user.profissao}</p>
                    </div>
                ))}

            </div>
        </>

    )

}