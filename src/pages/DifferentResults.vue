<template lang="pug">

div(style="margin-top: 150px; padding-bottom: 150px")

  .row.items-center.justify-around
    .col-auto
      .text-h3.text-bold.text-center.text-grey-9(style="line-height:70px") Não espere resultados diferentes <br/> fazendo sempre a mesma coisa!
      .text-h6.text-weight-light.text-center.q-mt-md Invista em dados, os números falam por sí só!
    .col-auto
      img(src="images/graph.png" style="max-width: 450px;")

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
</style>
