import React from "react";
import "./MainComps.css"

function MasPag() {
    return (
        <div className="mainSec masPag">
            <h2> Otras paginas que visitar </h2>
            <div>
                <span>
                    <h4>
                        Página del gobierno argentino
                    </h4>
                    <a href="https://www.argentina.gob.ar/desarrollosocial/ninezyadolescencia/grooming">
                        Información sobre el grooming
                    </a>
                    <a href="https://www.argentina.gob.ar/justicia/convosenlaweb/situaciones/guia-para-madres-padres-docentes-grooming#:~:text=Para%20hacer%20la%20denuncia%20de,663%2C%206º%20piso%2C%20CABA.">Guía para madres, padres y docentes: grooming </a>
                </span>
                <span>
                    <h4>Organización Grooming Argentina</h4>
                    <a href="https://www.groomingarg.org">Página oficial</a>

                </span>
                <span>
                    <h4>Save the Children página</h4>
                    <a href="https://www.savethechildren.es/actualidad/grooming-que-es-como-detectarlo-y-prevenirlo">GROOMING QUÉ ES, CÓMO DETECTARLO Y PREVENIRLO</a>
                </span>
                <span>
                    <h4>Infobae</h4>
                    <a href="https://www.infobae.com/mexico/2023/02/09/que-es-el-grooming-y-como-afecta-a-los-menores/">Qué es el grooming y cómo afecta a los menores</a>
                </span>
            </div>
        </div>
    )
}

export default MasPag