<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Dignidad como fundamento de la cultura humana

    p La convivencia como sociedad ha dispuesto un orden y normas que permitan una sana convivencia mundial.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto
    
    p La definición del concepto de dignidad humana tiene diferentes perspectivas de análisis que incluyen versiones mediadas por el tiempo o época y punto de vista que puede ser filosófico, religioso, social, humanista o jurídico.
    p.mb-5 Veamos algunas definiciones a continuación:

    h4.mb-5 Punto de vista humanista

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-1.mb-5.tarjeta
          .p-4.p-md-5
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema1/2.svg", data-aos="zoom-in")
              .col-lg-7
                p(data-aos="fade-left").mb-4 Para comprender el concepto desde un punto de vista humanista, lo invitamos a escuchar el siguiente pódcast.
        
                TarjetaAudio.color-secundario.bg-color-white.mb-3(
                  texto="Punto de vista humanista"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    h4 Punto de vista filosófico
    p.mb-5 Por su parte, desde un punto de vista filosófico, Kant, traducido por García, plantea lo siguiente:

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-f.color-secundario.pt-4.px-5.mb-5
          .bloque-texto-f__comillas
            i.fas.fa-quote-left
            i.fas.fa-quote-right
          h4.text-regular.bloque-texto-f__texto El concepto de dignidad humana tiene un carácter adscriptivo. Expresa y atribuye una evaluación positiva; en este sentido, predicar la dignidad de X es lo mismo que predicar su humanidad. Adscribirle dignidad al ser humano viviente es algo así como colocarle una etiqueta de valor no negociable, irrenunciable, ineliminable e inviolable, que veda todo intento de auto o heterodeshumanización. (1983, pág. 44)
          .bloque-texto-f__autor.mb-3
            h3.mb-0 - Kant -
          .bloque-texto-f__avatar
            .bloque-texto-f__avatar__img
              img(src='@/assets/curso/tema1/3.png', alt='Texto que describa la imagen')
    
    p.mb-5 En general se puede rescatar que la dignidad humana hace parte inherente del ser humano, desde sus diferentes posturas se coincide en afirmar que el ser humano es digno por el hecho de ser persona.

    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/4.png', alt='')
        .col-lg
          .p-4
            p(data-aos="fade-up") Tanto la “dignidad humana” como los “derechos humanos” encierran conceptos de universalidad, es decir que son valores idénticos comunes a toda la familia humana y que los Estados deben reconocer y garantizar. Por esta razón, el artículo 1° de la Declaración Universal de Derechos Humanos dice: 
            .bloque-texto-b.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h4.mb-0 “Todos los seres humanos nacen libres e iguales en dignidad y derechos y dotados como están de razón y conciencia, deben comportarse fraternalmente los unos con los otros”.
                i.fas.fa-quote-right
    
    p El reconocimiento de la dignidad humana se encuentra transversalmente en todo el sistema internacional de los derechos humanos y en el derecho humanitario. Por consiguiente, la dignidad humana se ha desarrollado como un valor central no sólo en el derecho internacional de los derechos humanos sino también en el constitucionalismo moderno.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Contextualización desde los derechos humanos universales y el Derecho Internacional Humanitario
    
    p.mb-5 Para empezar a hablar sobre la dignidad como fundamento de la cultura humana, debemos remitirnos a los derechos humanos, para ello vamos a hacer un recorrido sobre las relaciones entre los términos.

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5.pb-md-3
        LineaTiempoE.color-acento-contenido
          .row(titulo="1864").align-items-center
            .col-lg-9.mb-4.mb-lg-0.order-2
              p Se inicia una serie de discusiones y movimientos en pro de mejorar las condiciones sociales de las personas que se encuentran en medio de un conflicto armado, lo cual llevó a establecer hacia 1864 el Derecho Internacional Humanitario (DIH) y el Derecho Internacional de los Derechos Humanos, que son dos normativas diferentes, pero complementarios. Ambos se ocupan de la protección de la vida, la salud y la dignidad de las personas, sin embargo, el Derecho Internacional Humanitario es aplicado en situaciones de conflicto armado, y el Derecho Internacional de los Derechos Humanos está vigente en todo momento, tanto en tiempo de paz como de guerra.
            .col-lg-3.order-1.mb-3.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
          .row(titulo="1948").align-items-center
            .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
              p Después de la Segunda Guerra Mundial, la dignidad aparece como núcleo central en la Declaración Universal de los Derechos Humanos en 1948, aceptándola de la siguiente manera: “la libertad, la justicia y la paz en el mundo tienen por base el reconocimiento de la dignidad intrínseca […] de todos los miembros de la familia humana” (…) «La fe de las Naciones Unidas en la dignidad y el valor de la persona humana».
            .col-lg-3.order-1.order-lg-2.mb-3.mb-lg-0
              figure(data-aos="fade-down")
                img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
          .row(titulo="1949 y 1977").align-items-center
            .col-lg-9.mb-4.mb-lg-0.order-2
              p Con el fin de garantizar los derechos de las personas civiles, los prisioneros, enfermos y heridos en momentos de guerra, se realiza una serie de modificaciones que incluyen mejoras a las normas establecidas, con cuatros tratados de Ginebra en 1949 y un Protocolo adicional de 1977, consolidando la normativa básica de la dignidad humana en estamentos jurídicos.
            .col-lg-3.order-1.mb-3.mb-lg-0
              figure(data-aos="fade-up")
                img(src='@/assets/curso/tema1/7.png', alt='Texto que describa la imagen')
    
    .bg-color-1.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Es así como el concepto de Derechos Humanos se puede relacionar con la afirmación de la dignidad de la persona frente al Estado, pues, al reconocer a la persona como ser humano, sólo por el hecho de serlo, implica que se le reconozca como portadora de estos derechos.
    
    p Como vemos a través del tiempo, las normas establecidas mundialmente para garantizar el respeto a la vida del ser humano, coinciden en trasladar a todas las constituciones democráticas de cada país, la noción de dignidad humana como base esencial para el respeto de los derechos humanos, resaltando que los derechos no se otorgan desde el poder estatal, sino que cada Estado debe garantizar su pleno ejercicio.

    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 La dignidad humana desde la Constitución Política – Autonomía
    
    p.mb-5 Este derecho a la dignidad humana comprende tres aspectos fundamentales, mencionados en la cartilla de los derechos a la salud de la Defensoría del Pueblo:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/9.png" alt="")
          .custom-image-card__text.p-4
            p.mb-.text-center El primero de ellos es la autonomía o la posibilidad de elegir un plan de vida para desarrollarse según su determinación.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/10.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center El segundo aspecto es la existencia de condiciones físicas que le permitan a una persona establecer su autonomía.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card-2.h-100
          img.custom-image-card__image(src="@/assets/curso/tema1/11.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center La última es la no renuncia a los principios de integridad física e integridad moral.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-7.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Según lo anterior, toda persona es libre de elegir cómo quiere vivir, sin recibir, así como lo dice el tercer apartado, bajo un principio de integridad física y moral. Es decir, que nadie puede humillar ni atacar, simplemente por la forma en que ha decidido vivir.
    
    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0.order-2
        img(src="@/assets/curso/tema1/13.svg", style="max-width: 290px").mx-auto
      .col-lg.order-1.mb-3.mb-lg-0
        p La Corte Constitucional Colombiana, definió de esta forma a la Dignidad Humana, en la sentencia T 881 de 2002:
        p Una síntesis de la configuración jurisprudencial del referente o del contenido de la expresión “dignidad humana” como entidad normativa, puede presentarse de dos maneras:
        p.mb-0 A partir de su objeto concreto de protección y a partir de su funcionalidad normativa. Al tener como punto de vista el objeto de protección del enunciado normativo “dignidad humana”, la Sala ha identificado a lo largo de la jurisprudencia de la Corte, tres lineamientos claros y diferenciables: 

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.bg-color-5.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/14.svg', alt='Texto que describa la imagen')

          div.text-center
            h2 (i)
            p La dignidad humana entendida como autonomía o como posibilidad de diseñar un plan vital y de determinarse según sus características (vivir como quiera). 
      .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.bg-color-5.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/15.svg', alt='Texto que describa la imagen')

          div.text-center
            h2 (ii)
            p La dignidad humana entendida como ciertas condiciones materiales concretas de existencia (vivir bien). 
 
      .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.bg-color-5.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/16.svg', alt='Texto que describa la imagen')

          div.text-center
            h2 (iii)
            p La dignidad humana entendida como intangibilidad de los bienes no patrimoniales, integridad física e integridad moral (vivir sin humillaciones).
    
    p.mb-5 Por otro lado, al tener como punto de vista la funcionalidad, del enunciado normativo “dignidad humana”, la Sala ha identificado tres lineamientos: 

    .row.mb-5.justify-content-center
      .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.bg-color-6.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/17.svg', alt='Texto que describa la imagen')

          div.text-center
            h2 (i)
            p La dignidad humana entendida como principio fundante del ordenamiento jurídico y por tanto del Estado, y en este sentido la dignidad como valor. 
      .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-down")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.bg-color-6.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/18.svg', alt='Texto que describa la imagen')

          div.text-center
            h2 (ii)
            p La dignidad humana entendida como principio constitucional. 
 
      .col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.bg-color-6.h-100.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/19.svg', alt='Texto que describa la imagen')

          div.text-center
            h2 (iii)
            p La dignidad humana entendida como derecho fundamental autónomo.




 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
