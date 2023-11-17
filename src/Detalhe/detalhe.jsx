import { json, useParams } from "react-router-dom"
import Card from '../componente/Card';
export default function Detalhe(){
    const {id} = useParams();
    const lista = JSON.parse (localStorage.getItem("lista"));

    const atividade = lista.filter((objeto) => {
        if(objeto.id == id){
            return objeto
        }
        return null
    })
    console.log(atividade)
    return (
        <Card produto={atividade[0]}/>
    )
}