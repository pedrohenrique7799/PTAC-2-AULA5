import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function ToDo() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);
  const [idade, setIdade] = useState("")

  const [id, setId] = useState(1);

  const salvar = (e) => {
    e.preventDefault();
    setLista([...lista, { id: id, nome: nome, idade: idade }]);
    console.log(lista);
    setId(id + 1);
    setNome("");
    setIdade("");
  };
  return (
    <div className="p">
      <h1 id="gus">Lista de jogadores</h1>

      <Link to="/" id="gus">
        home
      </Link>
      <form onSubmit={salvar}>
        <input value={nome} type="text" id="gus" onChange={(e) => setNome(e.target.value)} />
      
        <input value={idade} type="text" id="inp" onChange={(e) => setIdade(e.target.value)}/>
        <button id="gus">ADD</button>
      </form>
      <div>
      {lista.map((nome) => (
        <ul key={nome.id}>
         <li> 
        <p>{nome.id} {nome.nome} {nome.idade}</p>  
         </li>
          </ul>
      ))}
      </div>
    </div>
  );
}
