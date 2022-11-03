<template lang="pug">

div(style="margin-top: 150px; margin-bottom: 150px")
  .row.justify-center.items-center.q-gutter-x-xl
    .col-auto
      .text-h3.text-bold.text-grey-9.text-center Saia da Era Jurrássica
      .text-h4.text-wight-light.text-grey-9.text-center.q-mt-md(style="line-height:60px") E deixe o digital fazer o <br/>trabalho por você!
    .col-auto
      img(src="images/dino-rex.png", alt="" style="max-width: 400px;")

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
