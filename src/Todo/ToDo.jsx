import { useState } from "react";
import { Link } from "react-router-dom";
import './style.css'

export default function ToDo() {
   const [atividade, setAtividade] = useState("");
   const [lista, setLista] = useState([]);
   const [id, setId] = useState(1);
   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, {atividade:atividade, id:id}]);
    console.log(lista)
    setId = (id+1);
   };
    return (
        <div class="p">
            <h1 id="gus">Lista de Atividades</h1>
            
            <p>{atividade}</p>
            <Link to="/" id="gus">home</Link>
           <form onSubmit={salvar}>
            <input type="text" id="gus"
            onChange={(e) => setAtividade(e.target.value)}/>
            <button id="gus">ADD</button>
           </form>
           {lista.map((atividade) => <p key={atividade.id}>{atividade.atividade}</p>)}
        </div>
    );
}