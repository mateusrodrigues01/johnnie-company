<template lang="pug">

div

  .row.items-center(style="padding-top: 100px")
    .col-5(style="padding-left: 150px; margin-right: 100px")
      .text-h4.title.text-bold.text-grey-9 Nossos Clientes

  .row.justify-center.q-gutter-x-xl.q-mt-xl
    img.teste.cursor-pointer(src="images/labBio1.png" style="max-width: 170px" @click="labBio = true")
    img.teste.cursor-pointer(src="images/vertSonhos.jpg" style="max-width: 130px" @click="vertSonhos = true")
    img.teste.cursor-pointer.bg-orange-8.q-pa-md.rounded-borders(src="images/pwa.png" style="max-width: 130px" @click="pwa = true")

  //---------------------
  //- BIOANÁLISE
  //---------------------
  q-dialog(v-model="labBio" style="justify-content: center; ")
    q-card(style="min-width: 70%; min-height: 100vh; top: 150px;")
      q-item
        q-item-section
          div.text-h6 Laboratório Bioanálise Diagnóstico
        q-item-section(side)
          q-btn(icon="close" label="Fechar" color="primary" v-close-popup)
      q-card-section.q-pt-none
        iframe(
          src="https://laboratoriobioanalise.com.br"
          name="frameLab"
          scrolling="yes"
          width="100%"
          height="700px"
          max-height="100%"
          style="border: 1px solid #dedede;"
        )

  //---------------------
  //- VERTICALIZANDO
  //---------------------
  q-dialog(v-model="vertSonhos" style="justify-content: center; ")
    q-card(style="min-width: 70%; min-height: 100vh; top: 150px;")
      q-item
        q-item-section
          div.text-h6 Verticalizando Sonhoss
        q-item-section(side)
          q-btn(icon="close" label="Fechar" color="primary" v-close-popup)
      q-card-section.q-pt-none
        iframe(
          src="https://verticalizandosonhos.com.br"
          name="frameVertSonhos"
          scrolling="yes"
          width="100%"
          height="700px"
          max-height="100%"
          style="border: 1px solid #dedede;"
        )
  //---------------------
  //- PWA CONSÓRIOS
  //---------------------
  q-dialog(v-model="pwa" style="justify-content: center; ")
    q-card(style="min-width: 70%; min-height: 100vh; top: 150px;")
      q-item
        q-item-section
          div.text-h6 PWA Consórcios
        q-item-section(side)
          q-btn(icon="close" label="Fechar" color="primary" v-close-popup)
      q-card-section.q-pt-none
        iframe(
          src="https://pwaconsorciosmatao.com.br"
          name="framePwa"
          scrolling="yes"
          width="100%"
          height="700px"
          max-height="100%"
          style="border: 1px solid #dedede;"
        )
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dialog = ref(false);
    const position = ref('top');

    return {
      labBio: ref(false),
      vertSonhos: ref(false),
      pwa: ref(false),
      dialog,
      position,

      open(pos) {
        position.value = pos;
        dialog.value = true;
      },
    };
  },
});
</script>

<style lang="sass" scoped>

.teste
  float: left
  filter: grayscale(100%)
  transition: all 0.2s
  -webkit-transition: all 0.2s
  -moz-transition: all 0.2s
  -webkit-filter: grayscale(100%)
  -moz-filter: grayscale(100%)

.teste:hover
  filter: grayscale(0%)
  -webkit-filter: grayscale(0%)
  -moz-filter: grayscale(0%)
  transform: scale(1.1)
  -webkit-transform: scale(1.1)
  -moz-transform: scale(1.1)

</style>
