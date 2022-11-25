<template lang="pug">

div.sky-gradient.sky-gradient-16(style="padding-top: 150px; padding-bottom: 150px;")
  //- div(style="padding-top: 150px; padding-bottom: 150px; background: #00286b")

  .row.justify-center
    .col-auto
      img(src="images/infographic.png")

      //- img(src="images/step-by-step.png") //PARA MOBILE

  //- (style="padding-left: 100px; padding-right: 100px;")
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
.sky-gradient-16
  background: linear-gradient(to bottom, #1e528e 0%,#265889 50%,#9da671 100%)
</style>
