import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function ToDo() {
   const [nome, setNome] = useState("");
   const [lista, setLista] = useState([]);
   const [id, setId] = useState(1);
   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, {nome:nome, id:id}]);
    console.log(lista)
    setId = (id+1);
   };
    return (
        <div class="p">
            <h1 id="gus">Lista de jogadores</h1>
            
            <p>{nome}</p>
            <Link to="/" id="gus">home</Link>
           <form onSubmit={salvar}>
            <input type="text" id="gus"
            onChange={(e) => setNome(e.target.value)}/>
            <button id="gus">ADD</button>
            <input></input>
           </form>
           {lista.map((nome) => <p key={nome.id}>{nome.nome}</p>)}
        </div>
    );
}