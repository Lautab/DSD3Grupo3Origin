import React, { useState } from "react";

const busquedas = [
    {
        search: "¿Que es el grooming?",
        question: "¿Qué es el grooming?",
        answer: "Según la ley “MICA ORTEGA” o Ley 27.590 decretada en Argentina, se entiende por grooming o ciberacoso a la acción en la que una persona por medio de comunicaciones electrónicas, telecomunicaciones o cualquier otra tecnología de transmisión de datos, contacte a una persona menor de edad con el propósito de cometer cualquier delito contra la integridad sexual de la misma."
    },
    {
        search: "¿Que se puede hacer para evitarlo?",
        question: "¿Qué se puede hacer para evitarlo?",
        answer: "Si sos un niño, niña o adolescente que usa redes sociales, es importante que tomes algunas precauciones: 1. Configurá tus redes en modo privado, así podes elegir quién ve y con quiénes compartís tus publicaciones e información.  2. No compartas imágenes, videos, ni información personal si no estás segura o seguro de quien está del otro lado. Tené presente que en el entorno virtual no siempre las personas son quienes dicen ser. 3. Cuando estás usando tus dispositivos, es recomendable que la cámara web esté apagada para que nadie pueda estar espiando o robando imágenes tuyas sin que te des cuenta. 4. Si en el uso de tus redes recibís algún mensaje que te incomode, alguna amenaza o contenido agresivo, no dudes en avisarle siempre a una persona adulta de confianza."
    },
    {
        search: "¿Que etapas sigue habitualmente el grooming?",
        question: "¿Qué etapas sigue habitualmente el grooming?",
        answer:"Este proceso es ejecutado por el acosador y consta de distintas etapas bien diferenciadas, las cuales podrán ser reemplazadas y/o alternadas entre sí: 1 Etapa de enganche o atrapamiento. 2 Etapa de fidelización. 3 Etapa de seducción. 4 Etapa de acoso sexual"
    },
    {
        search:"¿Cual es la etapa de enganche o atrapamiento?",
        question:"¿Cuál es la etapa de enganche o atrapamiento?",
        answer: "Con el objetivo de ganarse la confianza y establecer un vínculo de amistad, en esta etapa el acosador se acerca al niño, niña o adolescente generalmente falseando su identidad y/o su edad, a través de una conversación donde prevalece el intercambio de gustos, preferencias e intereses."
    }, 
    {
        search: "¿Cual es la etapa fidelizacion?",
        question: "¿Cuál es la etapa fidelización?",
        answer: "En esta etapa el acosador a sabiendas de los gustos e intereses del niño, niña o adolescente profundiza la relación obteniendo una mayor cantidad de datos personales, donde intentará mantener cautiva la atención procurando fidelizar el vínculo a través del intercambio de secretos, confidencias, promesas, etc.",
    },
    {
        search: "¿Cual es la etapa de seduccion?",
        question: "¿Cuál es la etapa de seducción?",
        answer: "En esta etapa el acosador seducirá y sexualizará la conversación, generalmente mediante preguntas y/o relatos, para generar en el niño, niña o adolescente un compromiso y/o dependencia emocional.",
    },
    {
        search: "¿Cual es la etapa de acoso sexual?",
        question: "¿Cuál es la etapa de acoso sexual?",
        answer: "Esta etapa se caracteriza por una marcada agresión sexual, implícita o explícita, en la cual el acosador manipula a la víctima a través de la solicitud de imágenes y/o videos íntimos, o bien, la propuesta de un encuentro personal. En aquellos casos en los cuales el niño, niña o adolescente no acceda a sus requerimientos, el acosador ejercerá distintas formas de violencia, tales como: chantaje, extorsión, amenazas o coacciones.",
    },
    {
        search: "donde denunciar , donde denuncio , donde reportar ",
        question: "¿Dónde denunciar?",
        answer:"Para hacer la denuncia de grooming en la Ciudad Autónoma de Buenos Aires, contactarse con la Unidad Fiscal Especializada en Ciberdelincuencia (UFECI), ubicada en Sarmiento 663, 6º piso, CABA. Teléfono (5411) 5071-0040. Sino podes entrar a https://www.mpf.gob.ar/mapa-fiscalias/ para conocer la fiscalía más cercana a vos." 
    },
    {
        search: "¿Es lo mismo un pederasta que un pedofilo?",
        question: "¿Es lo mismo un pederasta que un pedófilo?",
        answer: "No: existe un matiz importante, que muchas veces marca la línea entre lo que es delito y lo que no. La mayoría de los pederastas son pedófilos, pero un pedófilo no siempre es también un pederasta. Según la mayoría de diccionarios, el pedófilo (o paidófilo) se siente atraído erótica o sexualmente por niños (y/o niñas), e incluso puede mantener relaciones con ellos, con o sin abuso. Cuando abusa es cuando se le llama pederasta."
    },
    {
        search: "¿Como proteger la identidad digital? evitar prevenir",
        question: "¿Cómo proteger la identidad digital?",
        answer: "Se puede cuidar la identidad digital con las siguientes herramientas: - Configurar la privacidad de las redes sociales. - No usar el nombre completo como nick o usuario en las redes sociales. Es preferible colocar sobrenombres y evitar el apellido. - Configurar el alcance de las publicaciones para que las lean solo las personas autorizadas. - Monitorear el nombre propio y de las hijas e hijos en los buscadores para saber qué información tiene internet disponible. - Establecer contraseñas seguras para evitar que puedan robar las cuentas de correo electrónico o de redes sociales. - Evitar descargar e instalar software y aplicaciones de tiendas no oficiales porque pueden contener código malicioso para espiar, robar información y hasta tomar fotografías."
    },
    {
        search: "¿Que hacer ante un caso de grooming? padre madre",
        question: "¿Qué hacer ante un caso de grooming?",
        answer: "Con la niña, el niño o el adolescente: - Dialogar. - Evitar avergonzarla/o o culparla/o para que pueda contar con sinceridad lo que le pasó. - Evitar interrogarla/o. - Acompañarla/o con afecto con el objetivo de protegerla/o. - Comprender que la niña, niño o adolescente estaba siendo amenazada/o y tuvo que responder a los mensajes para proteger su privacidad."
    },
    
]

function Preguntas(props) {
    return (
        busquedas.map((element) => {
            if (element.search.toLocaleLowerCase().includes(props.search.toLowerCase())) {
                return (
                    <div key={element.question} className="pregunta">
                        <h5>{element.question}</h5>
                        <details>
                            <summary>Respuesta</summary>
                            <p>{element.answer}</p>
                        </details>
                    </div>)}
            })
    )
}

export default Preguntas