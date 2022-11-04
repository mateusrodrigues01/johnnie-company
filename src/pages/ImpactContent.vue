<template lang="pug">

.site-header

  .site-backdrop-header
  .box-header-text
    .site-container
      .row
        .col-md-6.col-xs-12
          p.text-white-50.header-destaque-laranja MAXIMIZE SEUS
          p.text-white-110 RESULTADOS
          p.text-h6.text-weight-light.text-white Gere o máximo retorno de suas campanhas online com suporte proativo fornecido por nossos especialistas em publicidade online.

          q-btn.saber-mais.q-px-xl.q-py-md.q-mt-xl(icon='check', label='Saber Mais', @click='onClick')

        .col

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
.site-header
  // background: url(../images/marketing/marketing2.jpg) 100%
  background: url(../images/marketing/marketing2.jpeg) 50%
  background-size: cover
  padding-bottom: 120px
  position: relative

.site-backdrop-header
  background-color: #343434
  height: 100%
  // left: -50px
  left: -4%
  opacity: .8
  position: absolute
  top: 0
  transform: skew(-8deg)
  width: 70%
  z-index: 2

.box-header-text
  padding: 100px 0 0
  position: relative
  z-index: 5

.site-container
  padding: 0
  width: 1024px
  margin: 0 auto
  position: relative
.header-destaque-laranja
  background: linear-gradient(90deg,#FFA500 0,#FFA500 75%,#0000 0,#0000)
  // background: linear-gradient(90deg,#531adb 0,#531adb 65%,#0000 0,#0000)
  text-shadow: #000009 0.1em 0.1em 0.4em
  padding: 0 30px
.text-white-50
  color: #fff
  font-size: 50px
  font-weight: 800

.text-white-110
  color: #fff
  font-size: 80px
  font-weight: 800
  line-height: 120px

.text-white-48
  color: #fff
  font-size: 48px
  font-weight: 700
  line-height: 52px

.saber-mais
  background: #FFA500
  color: #fff

</style>
