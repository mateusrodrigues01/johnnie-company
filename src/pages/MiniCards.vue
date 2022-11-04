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
          .text-body1.text-weight-light Seja encontrado por quem realmente está buscando pelo seus produtos ou serviços.
        q-card-actions(align="right")
          .text-body1.text-bold Saber mais!

    .col-auto.q-mx-lg
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('meta-ads')")
        q-card-section
          img.change-color(src="icons/meta.svg" style="width:50px")
        q-card-section
          .text-h6.text-bold Facebook Ads <br/>& Instagram Ads
        q-card-section
          .text-body1.text-weight-light Promova seus posts. Conquiste mais fãs. Alcance milhares de potenciais clientes!
        q-card-actions(align="right")
          .text-body1.text-bold Conhecer!

    .col-auto
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('develop-web')")
        q-card-section
          q-icon.change-color(name='bi-laptop' size="30px" color="white")
        q-card-section
          .text-h6.text-bold Desenvolvimento de <br/> Websites
        q-card-section
          .text-body1.text-weight-light Sua empresa merece um site profissional. E que converta visitantes em vendas.
        q-card-actions(align="right")
          .text-body1.text-bold Bora pra cima!

</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      slide: ref('style'),
    };
  },
  methods: {
  },
});

</script>

<style lang="sass" scoped>
.mini-card
  width: 350px
  height: 370px
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

</style>
