import React, {useState} from "react";
import Informate from "./MainComps/Informate.jsx";
import Consulta from "./MainComps/Consulta.jsx";
import MasPag from "./MainComps/MasPag.jsx";

function Main(props){

    let render = props.layer
    return(
        <main>
            {render == "Informate" ? <Informate/> : render == "Consulta" ? <Consulta/> : <MasPag/>}
        </main>
    )
}

export default Main