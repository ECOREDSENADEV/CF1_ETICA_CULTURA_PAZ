<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comprendiendo el ser individuo en una cultura de paz',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión sobre los conceptos de dignidad humana, habilidades para la vida y el desarrollo de un proyecto de vida desde el respeto, la autonomía y la convivencia.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué significa la palabra "dignidad" según su raíz etimológica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calidad de digno o valioso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Capacidad de amar y ser amado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Forma de actuar con nobleza.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reconocimiento social por los logros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de los siguientes documentos reconoce por primera vez el concepto de dignidad como valor universal en los derechos humanos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Carta de las Naciones Unidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Protocolo I de Ginebra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Declaración Universal de los Derechos Humanos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Declaración Americana de los Derechos y Deberes del Hombre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'La autonomía, según la Constitución Política de Colombia, implica principalmente:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de determinarse libremente sin interferencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El deber de cumplir normas religiosas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La participación en elecciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El derecho a acceder a educación superior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Por qué la empatía se considera una habilidad para la vida importante?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permite entender y valorar los sentimientos ajenos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sirve para evitar discusiones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Enseña a controlar a otras personas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumenta la competencia profesional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una característica esencial de la comunicación asertiva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Impone el punto de vista con firmeza.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se expresa con claridad y respeto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reprime las emociones en situaciones tensas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prioriza el silencio ante el desacuerdo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En la resolución de conflictos, la mediación se caracteriza por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imponer una decisión desde una autoridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar sanciones equitativas a las partes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Requiere un proceso judicial formal.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incluir un tercero neutral que facilita el diálogo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el objetivo de la inteligencia emocional en la vida cotidiana?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar y canalizar emociones con conciencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar cualquier emoción negativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar el rendimiento académico exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suprimir reacciones espontáneas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Un proyecto de vida con base en la dignidad se construye a partir de:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aspiraciones materiales prioritarias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Principios, valores y sentido de vida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Expectativas impuestas por el entorno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Imitación de modelos exitosos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'En el enfoque de Programación Neurolingüística, ¿qué nivel representa el propósito trascendental?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Capacidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medio ambiente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Espiritualidad.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'Transformar aspectos personales implica, entre otras cosas:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar y trabajar conscientemente en los cambios necesarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ajustarse siempre a la opinión del grupo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener las actitudes actuales para evitar conflictos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Compararse con los demás para mejorar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El botón "<em>BOARD</em>" en EAGLE solo sirve para borrar componentes en el diseño.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La herramienta <em>Show</em> permite resaltar conexiones para facilitar la identificación de redes.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La función <em>Auto</em> se utiliza para enrutado automático en la ventana <em>Board</em>.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La herramienta <em>Route</em> en la ventana <em>Board</em> ajusta automáticamente todas las pistas del diseño.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Es recomendable organizar los componentes en bloques funcionales como transformación y filtrado en la ventana <em>Board</em>.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
