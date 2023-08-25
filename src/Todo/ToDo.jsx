import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   const [atividade, setAtividade] = useState("");
   const [lista, setLista] = useState([]);

   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, {atividade:atividade}]);
    console.log(lista)
   };
    return (
        <div>
            <h1>Lista de Atividades</h1>
            <p>{Atividade}</p>
            <Link to="/">home</Link>
           <form onSubmit={salvar}>
            <input type="text"
            onChange={(e) => setAtividade(e.target.value)}/>
            <button>ADD</button>
           </form>
           {lista.map((atividade) => <p>{atividade.atividade}</p>)}
        </div>
    );
}