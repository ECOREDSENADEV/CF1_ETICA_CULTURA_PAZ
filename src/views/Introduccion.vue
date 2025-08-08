<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-color-1.mb-5.tarjeta
      .px-4.px-md-5.py-4.py-xl-0
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0.order-2
            img(src="@/assets/curso/intro/1.svg", style="max-width: 220px").mx-auto
          .col-lg.order-1.mb-3.mb-lg-0
            p El componente formativo “Ser Individuo” hace parte del programa Ética y Cultura de Paz, y tiene como propósito fundamental fortalecer el desarrollo personal y social desde una perspectiva ética y de convivencia pacífica.
            p En una sociedad marcada por cambios constantes y múltiples desafíos, es esencial que cada persona reflexione sobre su papel en la construcción de relaciones basadas en el respeto, la dignidad y la empatía.
            p.mb-0 Este componente invita a:
    

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/intro/2.png" alt="")
          .custom-image-card__text.p-4
            p.mb-.text-center Reconocer la dignidad humana como valor inherente a toda persona, desde enfoques filosóficos, jurídicos y humanistas.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/intro/3.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center Comprender la importancia de los derechos humanos como base para una convivencia justa y equitativa.
      .col-lg-4.mb-4(data-aos="zoom-in-down")
        .custom-image-card.h-100
          img.custom-image-card__image(src="@/assets/curso/intro/4.png" alt="")
          .custom-image-card__text.p-4
            p.mb-0.text-center Desarrollar habilidades socioemocionales como la empatía, la inteligencia emocional, la comunicación asertiva y la resolución pacífica de conflictos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/intro/5.svg", data-aos="zoom-in")
      .col-lg-8.order-lg-1(data-aos="fade-left")
        p También promueve el diseño de un proyecto de vida que:
        ul.lista-ul--color
          li.mb-0.d-flex
            i.fas.fa-circle-check
            p.mb-0 Esté alineado con principios y valores personales.
          li.mb-0.d-flex
            i.fas.fa-circle-check
            p.mb-0 Incluya metas claras y realistas orientadas al crecimiento personal, profesional y comunitario.
          li.mb-0.d-flex
            i.fas.fa-circle-check
            p.mb-0 Considere la convivencia y el compromiso con los distintos entornos sociales.
        p A través de este proceso formativo, el individuo se reconoce como protagonista en la transformación de su entorno, actuando con responsabilidad, sentido ético y compromiso con la paz.


</template>

<script>
export default {
  name: 'Introduccion',
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
