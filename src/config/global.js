export default {
  global: {
    Name: 'Ser Individuo',
    Description:
      'En el marco del proceso formativo propuesto por el SENA se concibe el abordaje de la dimensión ética, como eje transversal, a través de la competencia de ética y cultura de paz. En ese sentido, se proponen actividades para que cada uno comprenda y desarrolle acciones desde un enfoque de la paz, que se construye desde el plano individual, para irradiar posteriormente a lo colectivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Dignidad como fundamento de la cultura humana',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Contextualización desde los derechos humanos universales y el Derecho Internacional Humanitario',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'La dignidad humana desde la Constitución Política - Autonomía',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Habilidades para la vida y la convivencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Empatía',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Inteligencia emocional',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Comunicación asertiva',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Resolución de conflictos',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Reconocimiento de aspectos personales a transformar ',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Proyecto de vida de acuerdo con los criterios de dignidad y respeto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sentido de vida',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Metas propuestas que estén en relación con principios y valores ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Convivencia',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Contextualización desde los derechos humanos universales y el derecho internacional humanitario',
      referencia: 'Ferrer, S. (2017). La Dignidad Humana (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EJbty8PY1S0 ',
    },
    {
      tema: 'Empatía',
      referencia:
        'DubujadaMente. (2023). Inteligencia Emocional según Daniel Goleman | Resumen Animado Completo del libro (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yLUP01mHQc8 ',
    },
    {
      tema: 'Empatía',
      referencia:
        'Aprendemos Juntos 2030. (2021). Versión Completa. Episodio 8. A Mi Yo Adolescente: Empatía. Blanca Portillo (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WN89tqR2o1k ',
    },
    {
      tema: 'Comunicación asertiva',
      referencia:
        'irving daniel veliz salazar. (2013). yo digo ahi que hablarlo, tu dices grrr! (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7GdU9lqqjX8 ',
    },
    {
      tema: 'Metas propuestas que estén en relación con principios y valores ',
      referencia:
        'Matti Hemmi - inKNOWation. (2014). ¿Te Atreves A Soñar? | Desafía tu Zona de Confort! (video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=i07qz_6Mk7g ',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación efectiva',
      significado:
        'interactuar con cuidado y respeto por nosotros mismos y por los demás para potenciar el bienestar y crecimiento compartidos, y la comprensión mutua.',
    },
    {
      termino: 'Derechos Humanos',
      significado:
        'son derechos inherentes a todos los seres humanos, sin distinción alguna de nacionalidad, lugar de residencia, sexo, origen nacional o étnico, color, religión, lengua, o cualquier otra condición. Todos tenemos los mismos derechos humanos, sin discriminación alguna. Estos derechos son interrelacionados, interdependientes e indivisibles (UN-OHCHR, 1996-2015).',
    },
    {
      termino: 'Dignidad humana',
      significado:
        'la dignidad, o «cualidad de digno» (del latín, grandeza»),1. hace referencia al valor inherente del ser humano por el simple hecho de serlo, en cuanto ser racional, dotado de libertad. 2. No se trata de una cualidad otorgada por nadie, sino consustancial al ser humano. 3. No depende de ningún tipo de condicionamiento ni de diferencias étnicas, de sexo, de condición social o cualquier otro tipo.',
    },
    {
      termino: 'Empatía',
      significado:
        'en derechos humanos: entender y sentir lo que otra persona está experimentando desde el marco de referencia de la otra persona; es decir, la capacidad de ponerse en el lugar del otro (Bellet & Maloney, 1991).',
    },
    {
      termino: 'Escucha activa',
      significado:
        'poner toda nuestra atención y conciencia a disposición de otra persona, escuchando con interés y sin interrumpir (Knights, 1985). Es una técnica específica de comunicación que requiere prestar atención cuidadosa a las palabras y el lenguaje no verbal del otro, repitiendo ideas y frases clave de rato en rato para confirmar que estamos entendiendo bien, y haciendo preguntas aclaratorias sin juzgar para entender mejor la perspectiva del otro. Demuestra respeto por los sentimientos y perspectivas de la otra persona, aunque no necesariamente esté de acuerdo con ellos.',
    },
    {
      termino: 'Inteligencia emocional',
      significado:
        'es un constructo que se refiere a la capacidad de los individuos para reconocer sus propias emociones y las de los demás, discriminar entre diferentes sentimientos y etiquetarlos apropiadamente, utilizar información emocional para guiar el pensamiento y la conducta, y administrar o ajustar las emociones para adaptarse al ambiente o conseguir objetivos.',
    },
    {
      termino: 'Proyecto de vida',
      significado:
        'el proyecto de vida es un plan trazado, un esquema vital que encaja en el orden de prioridades, valores y expectativas de una persona que como dueña de su destino decide cómo quiere vivir.',
    },
    {
      termino: 'Resolución de conflictos',
      significado:
        'es el conjunto de conocimientos y habilidades puestos en práctica para comprender e intervenir en la resolución pacífica y no violenta de los enfrentamientos entre dos o más personas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ayuntamiento de Vitoria-Gasteizko Udala III Plan Joven - Unidad de Juventud (2015).',
      link: '',
    },
    {
      referencia:
        'Banz, C. (2008). Aprender a resolver conflictos de forma colaborativa y autónoma: un objetivo educativo fundamental. ',
      link: '',
    },
    {
      referencia: 'Cómo diseñar un proyecto de vida con PNL. (2020). ',
      link: '',
    },
    {
      referencia:
        'Escuela de Formación en Cultura y Educación en Derechos Humanos y DIH para Funcionarios Públicos, Modulo No. 3 Habilidades Ciudadanas para el Respeto de los Derechos Humanos. (s.f.)',
      link: '',
    },
    {
      referencia: 'Experticia (2016). Comunicación asertiva. ',
      link: '',
    },
    {
      referencia:
        'García, M. (1983). Fundamentación de la metafísica de las costumbres. Porrúa.',
      link: '',
    },
    {
      referencia:
        'Gardner, H. (2001). La Teoría de las Inteligencias Múltiples. Fondo de Cultura Económica. ',
      link: '',
    },
    {
      referencia:
        'Instituto Interamericano de Derechos Humanos, Educación en Valores Éticos Guía Metodológica para Docentes (2003)',
      link: '',
    },
    {
      referencia:
        'Naranjo, M.L. (2008). Relaciones interpersonales adecuadas mediante una comunicación y conducta asertivas. Revista Electrónica Actualidades Investigativas en Educación, 8(1), 1-27.  ',
      link: 'https://www.redalyc.org/articulo.oa?id=44780111',
    },
    {
      referencia:
        'Ramírez Lamy, Andrea (2010). Diferencias teórico-prácticas entre Derechos Humanos y Derecho Internacional Humanitario. Revista VIA IURIS, (8),93-122. ',
      link: 'https://www.redalyc.org/articulo.oa?id=273919439007 ',
    },
    {
      referencia:
        'Roca, E. (2003). Cómo mejorar tus habilidades sociales. Programa de asertividad, autoestima e inteligencia emocional, Valencia: ACDE Ediciones, ISBN: 84- 931156-9-X.',
      link: '',
    },
    {
      referencia:
        'Secretaría de Educación Pública, Manual para el Desarrollo de Habilidades Socioemocionales en Planteles de Educación Media Superior (2014). México',
      link: '',
    },
    {
      referencia:
        'Sentencia T 881 de 2002. Corte Constitucional. 17 de octubre de 2002. MG. Eduardo Montealegre Lynett. Tutela T-542060, tutela T-602073.',
      link: '',
    },
    {
      referencia:
        'Sistema Nacional de Derechos Humanos y Derecho Internacional Humanitario, Propuesta de Política Integral de DDHH 2014-2034. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
