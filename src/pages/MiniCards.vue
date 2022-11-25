<template lang="pug">

div.q-pb-xl(style="padding-top: 100px")
  .row.justify-center.q-px-xl
    .col-auto
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('google-ads')")
        q-card-section
          img.change-color(src="icons/google-ads-white.svg" style="width:50px")
        q-card-section
          .text-h6.text-bold Links Patrocinados <br/>Google Ads
        q-card-section
          .text-body1.text-weight-light Anuncie e deixe que as pessoas que estão realmente procurando por seus produtos ou serviços o encontrem.
        q-card-actions(align="right")
          .text-body1.text-bold.effect Saber mais!

    .col-auto.q-mx-lg
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('meta-ads')")
        q-card-section
          img.change-color(src="icons/meta.svg" style="width:50px")
        q-card-section
          .text-h6.text-bold Facebook Ads <br/>& Instagram Ads
        q-card-section
          .text-body1.text-weight-light Promova suas postagens. Apareça para o mundo. Alcance milhares de clientes em potencial! Peça uma análise gratuita!
        q-card-actions(align="right")
          .text-body1.text-bold.effect Conhecer!

    .col-auto
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('develop-web')")
        q-card-section
          q-icon.change-color(name='bi-laptop' size="30px" color="white")
        q-card-section
          .text-h6.text-bold Desenvolvimento de <br/>Websites
        q-card-section
          .text-body1.text-weight-light Sua empresa merece um site que realmente seja profissional. Isso ajuda converter visitantes em potenciais novas vendas.
        q-card-actions(align="right")
          .text-body1.text-bold.effect.q-mt-sm Bora pra cima!

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
    };
  },
  methods: {
  },
});

</script>

<style lang="sass" scoped>
.mini-card
  width: 350px
  height: 390px
  margin: auto
  box-shadow: 0px 12px 43px 0px rgb(0 0 0 / 8%)
  background: #fff
  border-radius: 20px
  padding: 20px

.mini-card:hover
  background: linear-gradient(to right, rgb(255, 95, 109), rgb(255, 195, 113))
  color: #fff

.teste-img
  background: url("icons/google-ads-white.svg") no-repeat
  width: 50px
  height: 50px

// .teste-img:hover
  // background: url("icons/google-ads-white.svg") no-repeat

.change-color
  background-color: $blue-10
  padding: 10px
  border-radius: 4px

.effect:hover
  border: 1px solid
  border-radius: 4px
  padding: 5px

</style>
