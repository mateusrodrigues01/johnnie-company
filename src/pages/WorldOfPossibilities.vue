<template lang="pug">

q-parallax(src='images/skyviewcity.jpg', :speed='0.5' :height="800")
  .flex.flex-center.column
    .text-h1.text-bold.text-center.text-white.sombra FAÇA
    .text-h3.text-bold.text-center.q-py-xl.text-white.sombra O Mundo Vir Até Você!
    q-btn.contato.q-px-xl.q-py-md(icon='check', label='Entrar em Contato', @click='onClick')

  //---------------------------------------------------------------
  //- Como centralizar uma imagem sem usar Parallax usando q-img
  //---------------------------------------------------------------

  //- q-img(src="images/skyviewcity.jpeg")
  //-   .absolute-full.flex.flex-center.column
  //-     .text-h1.text-bold.text-center FAÇA
  //-     .text-h3.text-center.q-py-xl O Mundo Vir Até Você!
  //-     q-btn.contato.q-px-xl.q-py-md(icon='check', label='Entrar em Contato', @click='onClick')

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
.teste
  display: flex
  justify-content: center
  align-items: center

.contato
  background: #FFA500
  color: #fff

.sombra
  text-shadow: 0.1em 0.1em 0.2em black
</style>
