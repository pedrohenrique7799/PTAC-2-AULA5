import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   const [atividade, setAtividade] = useState("");
   const [lista, setLista] = useState([]);
    return (
        <div>
            <h1>Lista de Atividades</h1>
            <Link to="/">home</Link>
           
        </div>
    );
}