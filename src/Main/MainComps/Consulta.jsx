import React, {useState} from "react";
import Preguntas from "./ConsultaComp/Preguntas";
import "./MainComps.css"

function Consulta(){
    const [busqueda, setBusqueda] = useState("")

    function inputRender(){
        let UniqueInput = document.getElementById("UniqueInput")
        setBusqueda(UniqueInput.value)
    }
    return(
        <div className="mainSec consulta">
            <h2>Consulta</h2>
            <input id="UniqueInput" onChange={inputRender} placeholder="Busca entre las preguntas frecuentes" />
            <div className="contenedor-preguntas">
            <Preguntas search={busqueda}/>
            </div>
        </div>
    )
}

export default Consulta