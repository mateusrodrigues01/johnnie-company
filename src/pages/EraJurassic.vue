<template lang="pug">

div(style="margin-top: 150px; margin-bottom: 150px")
  .row.justify-center.items-center.q-gutter-x-xl
    .col-auto
      .text-h3.text-bold.text-grey-9.text-center Saia da Era Jurrássica
      .text-h4.text-wight-light.text-grey-9.text-center.q-mt-xl(style="line-height:50px") E deixe o digital fazer o trabalho<br/> por você!
      .text-h6.text-wight-light.text-grey-9.text-center.q-mt-xl Bora fazer um Call e tirar todas as<br/> suas dúvidas!

      .row.justify-center.q-mt-xl
        .col-auto
          .text-subtitle1.text-center Bora chamar no Zap
          a.remove-decoration-links-btn(href="https://wa.me/55169997855085?text=Olá,%20quero%20saber%20mais%20sobre%20o%20tráfego%20pago%20da%20Johnnie%20Company.%20Obrigado%20e%20fico%20no%20aguardo!" target="_blank")
            q-btn.q-py-md(icon="fab fa-whatsapp" color='primary', text-color="white" label='(16) 99785-5085', @click='onClick')

        .col-auto.q-ml-xl
          .text-subtitle1.text-center Preciso disso agora
          a.remove-decoration-links-btn(href="https://wa.me/5516996097259?text=Olá,%20quero%20saber%20mais%20sobre%20o%20tráfego%20pago%20da%20Johnnie%20Company.%20Obrigado%20e%20fico%20no%20aguardo!" target="_blank")
            q-btn.q-py-md(icon="fab fa-whatsapp" color='primary', text-color="white" label='(16) 99609-7259', @click='onClick')

    .col-auto
      img(src="images/dino-rex.png", alt="" style="max-width: 500px;")

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      onClick: '',
    };
  },
  methods: {
  },
});

</script>

<style lang="sass" scoped>

.remove-decoration-links-btn
  text-decoration: none
  color: $primary

.remove-decoration-links-btn:hover
  cursor: pointer

</style>
