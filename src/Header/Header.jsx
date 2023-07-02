import React, { useState } from "react";


function Header(props){
    const [liActive, setLiActive] = useState(0)

    return(
        <header>
            <h1>Basta de Grooming</h1>
            <ul>
            <li className={liActive == 0 ? "Actived" : "Desactived"} onClick={()=>{props.passData("Informate"); setLiActive(0)}}>Informate</li>
            <li className={liActive == 1 ? "Actived" : "Desactived"} onClick={()=>{props.passData("Consulta"); setLiActive(1)}}>Consulta</li>
            <li className={liActive == 2 ? "Actived" : "Desactived"} onClick={()=>{props.passData("Contactanos"); setLiActive(2)}}>Contactanos</li>
            </ul>
        </header>
    )
}

export default Header
