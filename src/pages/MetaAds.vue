<template lang="pug">

div
  q-btn.q-ma-lg(color='grey-9' label='Voltar', @click='$router.go(-1)')

  div
    .text-h3.text-bold.text-center Facebook e Instagram Ads

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
