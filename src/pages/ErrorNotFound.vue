<template lang="pug">
div.fullscreen.bg-blue.text-white.text-center.q-pa-md.flex.flex-center
  div
    div(style="font-size: 30vh")
      | 404

    .text-h2(style="opacity:.4")
      | Oopa! Nada aqui...

    q-btn(
      class="q-mt-xl"
      color="white"
      text-color="blue"
      unelevated
      to="/"
      label="Voltar para o início"
      no-caps
    )
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>
