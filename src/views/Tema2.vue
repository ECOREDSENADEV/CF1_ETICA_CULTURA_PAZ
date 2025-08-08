<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Habilidades para la vida y la convivencia

    p.mb-5 En 1993 la División de Salud Mental de la Organización Mundial de la Salud (OMS) lanzó formalmente la Iniciativa Internacional para la Educación en las Escuelas de Habilidades para la Vida, con el propósito de difundir la enseñanza de un grupo genérico de destrezas psicosociales, consideradas importantes en la promoción de la competencia psicosocial, y a las que llamó “habilidades para la vida”. (P5) Las diez habilidades que propuso fueron: toma de decisiones, solución de problemas, pensamiento creativo, pensamiento crítico, comunicación efectiva, relaciones interpersonales, autoconocimiento, empatía, manejo de emociones y manejo del estrés.

    .bg-color-15.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            h4(data-aos="fade-up") Esta iniciativa de la OMS tiene dos premisas:
            p En primer lugar, en la importancia que tiene la competencia psicosocial en la promoción de la salud, en términos del bienestar físico, mental y social de las personas. En segundo lugar, en que, como consecuencia de los cambios sociales, culturales y familiares de los últimos años, no puede asumirse que el aprendizaje de las destrezas psicosociales que realizan los niños y las niñas de hoy sea suficiente, por lo que propuso que la enseñanza de estas habilidades tuviera un lugar específico en el contexto de la educación formal.
    
    p A partir de lo anterior, vamos a retomar 5 de estas habilidades:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-5.order-lg-1
        ol.lista-ol--cuadro
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 1
            | Empatía.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 2
            | Inteligencia emocional.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 3
            | Comunicación asertiva.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 4
            | Resolución de conflictos.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span 5
            | Reconocimiento de aspectos personales a transformar.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Empatía
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.tarjeta.p-5.h-100(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") Esta habilidad socioemocional se ha convertido en una de las más mencionadas, debido a la importancia y necesidad de aplicación en la vida cotidiana. No obstante, llevarla a la acción considera grandes desafíos cognitivos, emocionales y psicológicos.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        img(src="@/assets/curso/tema2/4.svg", style="max-width: 76px").mb-3
        p(data-aos="fade-left") A continuación, presentamos un acercamiento para entender la empatía y las posibilidades de aplicarla.
        p Goleman (1995) considera la empatía como una habilidad social, desarrollada como la capacidad de reconocer sentimientos, necesidades, realidades e intereses de los demás.

    p.mb-5 Para conocer más sobre lo que Daniel Goleman nos dice en su libro, lo invitamos a ver el video <b>Inteligencia Emocional según Daniel Goleman | Resumen Animado Completo del libro</b>, el cual se encuentra en el material complementario.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    h5.bg-color-17.p-3 ¿Y usted es empático?

    p La empatía más que una palabra de moda es una necesidad de comprender la realidad del otro. Es cuestión de observación, práctica e interés, más que una recomendación.
    p.mb-5 ¿Cuánta empatía siente en cada situación? Reflexione en las diferentes situaciones con quién siente empatía y con quién no.

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
          .custom-image-card__text.p-4
            p.mb-.text-center Mujer cansada por los tacones.
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center Mujer maltratada.
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center Maltrato animal.
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/8.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center Falta de hogar.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/9.png" alt="")
          .custom-image-card__text.p-4
            p.mb-.text-center Falta de garantías sociales.
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center Persona llorando en la calle.
      .col-lg-3.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center Persona a la que roban.
    
    p Las situaciones culturales cambian las costumbres, actitudes y comportamientos, lo cual nos lleva a pensar que en ocasiones no podemos sentir empatía; sin embargo, no necesariamente es así. Es importante reconocer y comprender la diferencia como característica innata de la sociedad, en la que debo respetar la perspectiva del otro, sin dejar de lado la mía, a esto se le denomina alteridad.
    p.mb-5 ¡Póngase cómodo y traiga crispetas! Lo invitamos a ver el video <b>Versión Completa. Episodio 8. A Mi Yo Adolescente: Empatía. Blanca Portillo</b>, el cual se encuentra en el material complementario, y realiza una reflexión sobre la empatía en esta época de distancia social. 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Inteligencia emocional
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Tradicionalmente reconocemos la importancia del manejo de nuestras acciones, relacionando a quien maneja la lógica, un buen razonamiento lingüístico o lógico-matemático como una persona inteligente, capaz y en muchas ocasiones relacionada con el éxito. La inteligencia, ese instinto razonado que nos permite relacionar pensamientos, unos con otros, para obtener pensamientos nuevos nace y se hace, dependiendo de la herencia y del ambiente o contexto cultural; sin embargo, en los últimos años se ha empezado a considerar valioso el manejo de las emociones, considerándolo como otro tipo de inteligencia, la emocional, la cual enfatiza en la capacidad para manejarnos con nosotros mismos y con los demás.

        .bg-color-18.mb-5.tarjeta
          .p-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/13.svg", data-aos="zoom-in")
              .col-lg-7
                p(data-aos="fade-left").mb-4 Para ampliar la información, lo invitamos a escuchar el siguiente pódcast.
        
                TarjetaAudio.color-secundario.bg-color-white.mb-3(
                  texto="Inteligencia emocional"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    h5.bg-color-19.p-3 Hábitos emocionales

    p.mb-5 Ya reconociendo la amplia capacidad de aprendizaje que tenemos las personas se destaca una capacidad particular de la inteligencia, la cual se debe desarrollar como seres sociales que somos y que realmente ayuda mucho en el proceso de adaptación al entorno. Recomendamos los siguientes consejos para aumentar su inteligencia emocional y convertirlos en un hábito:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-20.tarjeta.p-3
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 “Calienta” tu cerebro
              p Inicia el día con actividades que despierten tu mente y que a la vez la reconforten. Puedes hacer ejercicios, escuchar música o meditar.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aumenta tu mente
              p Consume proteínas en alimentos como huevo y pollo, así como grasas saludables que contienen Omega 3, presentes en las nueces y el pescado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mantén la curiosidad
              p Nunca dejes de aprender cosas nuevas, aunque no tengan que ver con tu negocio. Aprende un idioma, toma clases de historia o toca un instrumento.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Domina el arte del autocontrol
              p Evita que emociones como el enojo o la ira se apoderen de ti, en especial en el momento de tratar con empleados y clientes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Sé empático
              p Desarrollar la capacidad de ponernos en los zapatos de los demás, nos permitirá formar vínculos más personales y de largo plazo.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 No te enganches
              p Aprende a poner pausa antes de crear una dificultad de la nada. Esto significa dejar ir cosas insignificantes que se presentan todos los días.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Establece prioridades
              p Cuando tienes la meta final como prioridad, es más fácil enfocar tu energía en lo que es valioso, sin desviarte para resolver tareas más pequeñas.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aléjate de gente tóxica
              p En el ámbito laboral y personal, evita relacionarte con personas manipuladoras, mentirosas o negativas. ¡Están mejor fuera de tu vida!
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Toma descansos mentales
              p Por lo menos cada hora mueve tu cuerpo para refrescar tu cerebro. Pasea por la calle o has estiramientos en tu escritorio.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Haz una cosa a la vez
              p Ser multitareas genera estrés y efectos negativos en tu desempeño laboral. Enfócate en una tarea y cometerás menos errores y serás más creativo.
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Comunicación asertiva
    
    p.mb-5 La comunicación asertiva es una forma de expresión honesta, directa y equilibrada, que tiene como objetivo comunicar nuestros pensamientos, intereses y derechos sin la intención de perjudicar a nadie. La asertividad busca poner en equilibrio dos extremos de la comunicación:

    .tarjeta--container.row.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.bg-color-16.p-5(data-aos="fade-up")
        .row.justify-content-center.mb-4.align-items-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/24.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h2 La comunicación pasiva
        p Es la que evita el conflicto, optando por no expresar molestias y desacuerdos. Con este tipo de comunicación los problemas o conflictos no se solucionan, se ignoran hasta que son imposibles de manejar.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.bg-color-1.p-5(data-aos="fade-down")
        .row.justify-content-center.mb-4.align-items-center
          .col-lg-3
            figure
              img(src='@/assets/curso/tema2/25.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h2 La comunicación agresiva
        p Es la que emplea la ira o los reproches, generando conflictos, lo cual impide encontrar soluciones a los problemas.

    p Sin embargo, el estilo de comunicación asertivo permite expresar y defender sus criterios y puntos de vista, se caracteriza por el equilibrio entre la elocuencia y el respeto, de ahí que se le haya adjudicado a este término el significado de “expresión de los derechos y sentimientos personales”.
    p.mb-5 Lo invitamos a realizar el siguiente ejercicio. Visite el video que se encuentra en el material complementario: yo digo ahi que hablarlo, tu dices grrr! Mire el siguiente video e identifique en dónde está la comunicación agresiva, pasiva o asertiva.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .bg-color-4.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/26.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Es importante tener en cuenta que dependiendo de la situación se utiliza uno o varios estilos de comunicación, por ello reconozca la posibilidad de encontrar un punto intermedio en el que cuando envíe un mensaje sea claro, conciso y no perjudique a la otra persona.
    
    p.mb-5 La comunicación asertiva cumple además con ciertos requisitos emotivos, psicológicos y pragmáticos que la caracterizan, como lo son:

    TabsA.color-acento-botones.mb-5
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .tarjeta.color-acento-botones--borde.p-4(titulo="Claridad")
        h4 Claridad
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/28.png").mx-auto
          .col-lg-7
            p Exprese sus necesidades, sentimientos y deseos de manera respetuosa, apropiada y clara. Para lograr esto se aconseja mirar a la persona directamente a los ojos, sin recurrir a risas o sarcasmos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Contexto")
        h4 Contexto
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/27.png").mx-auto
          .col-lg-7
            p Es importante que elija el lugar para tener una conversación importante. Las personas suelen mostrarse más dispuestas en un lugar apacible, tranquilo y seguro, que en otro ruidoso y donde se les presente distracciones.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tono de la voz")
        h4 Tono de la voz
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/29.png").mx-auto
          .col-lg-7
            p El tono de voz y la manera en que pronunciamos las palabras influyen en nuestra comunicación. A las personas les agota y desanima escuchar a alguien que habla a muy alta velocidad, susurra o por el contrario, todo lo dice a gritos.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Gestualidad")
        h4 Gestualidad
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/30.png").mx-auto
          .col-lg-7
            p Prestar atención a los gestos que empleamos porque pueden resultar ofensivos o provocadores. Estas expresiones pueden reforzar lo dicho o transmitir lo contrario y confundir al receptor.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Reciprocidad")
        h4 Reciprocidad
        .row.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/31.png").mx-auto
          .col-lg-7
            p Trate de invertir el mismo tiempo que habla en escuchar a la otra persona para no transmitir indiferencia, por tanto, de la misma manera en que se procura hacer entender nuestros criterios y opiniones, se deben escuchar y respetar criterios e ideas ajenas.
    
    p.mb-5 Este estilo de comunicación juega un papel fundamental para tener una relación saludable con las personas que nos rodean, ya sea en la vida cotidiana o en el entorno laboral, ya que ayuda a proyectar confianza, resolver diferencias o conflictos que se presenten y crear un ambiente agradable. Aquí le vamos a presentar algunos elementos que debemos tener en cuenta para desarrollar esta habilidad.
      
    h5.bg-color-19.p-3.mb-5 Consejos:

    .bg-full-width.bg-fondo-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/33.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
                h4.text-center.mb-4 Comunica sin juzgar
                p.text-center Al momento de comunicar separe sus prejuicios de sus comentarios y opiniones, es importante ser lo más objetivo posible.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/34.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
                h4.text-center.mb-4 Identifique y exprese sus sentimientos
                p.text-center En este punto, la clave es describir sus sensaciones internas.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/35.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
                h4.text-center.mb-4 Encuentre su necesidad no satisfecha
                p.text-center Uno se siente bien cuando todas sus necesidades están cubiertas, sus sentimientos son creados por sus necesidades.
              .bg-color-white.p-4.h-100.box-shadow
                img(src='@/assets/curso/tema2/36.svg' alt='AvatarTop' , style="max-width: 100px").mx-auto.mb-3
                h4.text-center.mb-4 Haga una petición activa y concreta
                p.text-center Este último paso se relaciona con el anterior, primero identifique qué lograría satisfacer su necesidad y luego comunique de manera clara qué es lo que quiere de los demás.

          .col-lg-3.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/32.png', alt='')
    
    h5 Ventajas de ser asertivo:
    p.mb-5 Como se ha mencionado, este estilo de comunicación nos permite expresar nuestras opiniones, respetando a su vez las opiniones de los demás, aquí comentamos algunas de las ventajas más significativas:

    .row.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/36.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        LineaTiempoD.color-secundario
          p(numero="1" titulo="Sensación de control") Permite sentirnos con el poder y la capacidad de decidir.
          p(numero="2" titulo="Mejora la autoestima") Permite recuperar el control de las situaciones, al defender nuestras opiniones y expresar nuestras emociones.
          p(numero="3" titulo="Mejora la comunicación con los demás") La asertividad se basa en una comunicación eficiente, evitando generar conflictos.
          p(numero="4" titulo="Contribuye a gestionar las emociones") Expresar y atender nuestras emociones nos permite comunicarnos mejor y fortalecer las relaciones interpersonales.quam cursus in. Donec feugiat volutpat metus at pulvinar.
          p(numero="5" titulo="Resolver conflictos") La asertividad permite resolver conflictos de manera eficiente, evitando que los problemas se incrementen. Esto se debe porque expresamos nuestras necesidades.

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Resolución de conflictos
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/37.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 La presencia de conflictos y su solución genera un aprendizaje personal y grupal. Concebir un conflicto como algo positivo y remediarlo de modo que constituya una experiencia de aprendizaje para las personas implicadas no es un reto fácil, y menos aún, cuando en el inconsciente social se relaciona con algo negativo a través de los años. Por ello, no es preciso hablar de crecimiento personal sin incluir al conflicto como un compañero inseparable, pues la vida cotidiana transcurre entre una gama de situaciones más o menos problemáticas. Por tanto, el conflicto en sí no es ni malo ni bueno; lo que importa es la forma en que se maneje.
      
    ul.lista-ul--color.mb-5
      li.mb-0.d-flex
        i.fas.fa-circle-check
        p.mb-0 Conozcamos las técnicas o métodos para la resolución de conflictos:

    .row
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/38.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Negociación")
            .ms-5
              p Esta es una forma de enfrentar los conflictos buscando soluciones, en donde los implicados tienen autonomía para realizar el proceso o no. Es necesario tener en cuenta los siguientes pasos (Banz, 2008):
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  | Las partes acuerdan negociar.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 2
                  | Realizan una exploración de sus intereses, puntos de vista y posiciones.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 3
                  | Encuentran los puntos comunes.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 4
                  | Proponen opciones en las que todos resulten beneficiados.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 5
                  | Evalúan las opciones y seleccionan las mejores.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 6
                  | Elaboran un acuerdo que satisface a ambas partes. 
          div(titulo="Mediación")
            .ms-5
              p Este método es utilizado cuando las partes no logran ponerse de acuerdo por sí solas para solucionar el conflicto; por tanto, se involucra la intervención de un tercero neutral, denominado mediador, quien no tiene poder de decisión y su función principal es lograr que las partes se encuentren entre sí, expresen sus puntos de vista, construyan el acuerdo y lleguen a una solución beneficiosa para ambos.
              p La mediación se realiza de acuerdo con los siguientes pasos:
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 1
                  | El mediador ofrece la instancia de mediación que puede ser aceptada o rechazada por las partes.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 2
                  | El mediador explica cómo se realizará el proceso y garantiza la confidencialidad.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 3
                  | El mediador invita a cada uno a exponer el problema de modo respetuoso, sin alusiones descalificadoras del otro. El otro no puede interrumpir.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 4
                  | Una vez expuestas las posiciones, se invita a la construcción de una solución conjunta y se busca la colaboración entre las partes.
                li.d-flex
                  .lista-ol--cuadro__vineta
                    span 5
                  | Construida la solución, se establece un acta de acuerdo entre las partes, la cual es firmada por ambos.

    p Si desea profundizar en cada estrategia, revise con mayor detalle el siguiente manual de resolución de conflictos.

    separador
    
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Reconocimiento de aspectos personales a transformar 
    
    .bg-color-21.mb-5.tarjeta
      .px-4.px-md-5.py-4.py-xl-0
        .row.align-items-center
          .col-lg-auto.order-2
            img(src="@/assets/curso/tema2/38.svg", style="max-width: 330px", data-aos="zoom-in").mx-auto
          .col-lg.order-1.mb-3.mb-lg-0
            p Crecer como persona es un proceso que está relacionado con el autoconocimiento, con la capacidad de conocerse y valorarse a sí mismo, tomar conciencia de las motivaciones, necesidades, valores, pensamientos y emociones que definen la identidad propia, y sus efectos en el comportamiento de los demás y el entorno, de igual forma, tomar conciencia sobre las causas, desventajas y posibles estrategias para superar comportamientos no deseados.
            p.mb-0 Cuando se llega a este punto es necesario hacer algunos cambios y reconectarse de nuevo con nuestra propia identidad, esta transformación comienza con nosotros mismos, esto requiere hacer una autorreflexión, ser conscientes de nuestras capacidades, y comprender que exige compromiso, tiempo, energía y estrategias claras y realistas.

    .row.justify-content-center.mb-5
      .col-xl-8
        div.bg-color-13.p-4.text-center
          h4.mb-0 En este momento es importante hacerse varias preguntas:
        div.bg-color-sintesis.p-4.text-center.px-5.mb-5
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span 1
              | ¿Está en el lugar que quiere estar?
            li.d-flex
              .lista-ol--cuadro__vineta
                span 2
              | ¿Qué creencias lo limitan?
            li.d-flex
              .lista-ol--cuadro__vineta
                span 3
              | ¿Cuáles son sus fortalezas y debilidades?
            li.d-flex
              .lista-ol--cuadro__vineta
                span 4
              | ¿Sabe lo que quiere y lo que no quiere?
            li.d-flex
              .lista-ol--cuadro__vineta
                span 5
              | ¿Qué es lo que más ama y qué hace respecto a ello?
            li.d-flex
              .lista-ol--cuadro__vineta
                span 6
              | ¿Qué es lo que más le emociona de su vida?
            li.d-flex
              .lista-ol--cuadro__vineta
                span 7
              | ¿Qué lo motiva para continuar viviendo?
            li.d-flex
              .lista-ol--cuadro__vineta
                span 8
              | ¿Ha dado lo mejor de sí mismo? ¿Podría haberlo hecho mejor?
            li.d-flex
              .lista-ol--cuadro__vineta
                span 9
              | ¿Hay algo que le gustaría hacer y que nunca se ha decidido a hacer? ¿Qué se lo impide?

        p Si las respuestas a estas preguntas generan incomodidad y/o no le gustan, piense cómo puede cambiarlo, teniendo en cuenta:
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-xl-3.mb-3.mb-lg-0
        div.p-4.text-center.bg-color-16.tarjeta.mb-3
          h4.mb-0 ¿Qué debo cambiar de mí?
        div.p-4.text-center.bg-color-16.tarjeta.mb-3
          h4.mb-0 ¿Qué debo cambiar de mi entorno?
        div.p-4.text-center.bg-color-16.tarjeta.mb-3
          h4.mb-0 ¿Qué debo cambiar en mis relaciones?
      .col-lg-4.col-xl-3
        img(src="@/assets/curso/tema2/39.svg", data-aos="zoom-in").mx-auto

    .bg-color-11.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center.text-white
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/40.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El camino hacia el bienestar y el crecimiento personal hace referencia a una serie de actividades que se construyen a lo largo de la vida y que pueden modificarse en cualquier momento, esto nos invita a empoderarnos frente a la vida, siguiendo nuestros propios sueños.

    p.mb-5 Pero ¿qué podemos hacer para transformar nuestra vida?, ¿qué acciones podemos llevar a cabo para posibilitar un cambio hacia el bienestar y la autosatisfacción? Veamos algunas claves que podemos tener en cuenta:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-20.tarjeta.p-3
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.order-2
              figure
                img(src="@/assets/curso/tema2/41.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              h5 Autoconocimiento
              p El primer paso es conocerse a sí mismo, lo cual significa que debe evaluar sus valores, creencias, habilidades y debilidades.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.order-2
              figure
                img(src="@/assets/curso/tema2/42.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              h5 Zona de <em>confort</em>
              p Este punto nos invita a dar un paso al frente y cambiar, superando el miedo, la ansiedad y la comodidad de las situaciones cotidianas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.order-2
              figure
                img(src="@/assets/curso/tema2/43.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              h5 Estar abierto al cambio
              p Este punto se encuentra relacionado con salir de la zona de <em>confort</em>, para esto se requiere cambiar las creencias que nos limitan, superar las barreras y obstáculos que se nos presentan día a día.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.order-2
              figure
                img(src="@/assets/curso/tema2/44.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              h5 Tener un plan de acción
              p El autoconocimiento ayuda a definir los objetivos de manera realista, para esto debe establecer metas a corto, medio y largo plazo, para pasar a la acción.
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.order-2
              figure
                img(src="@/assets/curso/tema2/45.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              h5 Responsabilícese y abandone el victimismo
              p Este aspecto nos habla de hacernos cargo de nuestros propios problemas, viene asociada a otras habilidades que lo llevan a asumir la transformación de su propia vida.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-3.order-2
              figure
                img(src="@/assets/curso/tema2/46.svg")
            .col-lg-8.order-1.mb-3.mb-lg-0
              h5 Ayuda de un profesional
              p En ocasiones es necesario apoyarnos en profesionales para lograr transformaciones en nuestra vida, ellos nos ayudan a crear estrategias, con el fin de aprender una serie de habilidades y recursos.



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
