<template lang="pug">

div.q-pb-xl(style="padding-top: 100px; padding-bottom: 100px;")

  .text-h3.text-bold.text-grey-9.text-center(style="padding-bottom: 100px") Como Funciona?

  .row.justify-center.q-px-xl.q-gutter-md
    .col-auto
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('google-ads')")
        q-card-section
          q-icon.change-color(name='bi-magnet' size="30px" color="white")
        q-card-section
          .text-h6.text-bold Atração
        q-card-section
          .text-body1.text-weight-light A primeira etapa do processo de Marketing Digital é atração. <br/><br/>Atrair pessoas para seus canais de vendas é indispensável para gerar novas vendas. As principais fontes de tráfego que trabalhamos são:

        q-card-section
          .row.q-gutter-sm
            img.rounded-borders(src="images/marketing/ok/face-ads.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/google-ads.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/google-seo.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/insta-ads.png" style="width:50px;")
    .col-auto
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('meta-ads')")
        q-card-section
          //- img.change-color(src="icons/meta.svg" style="width:50px")
          q-icon.change-color(name='bi-exclamation-triangle' size="30px" color="white")
        q-card-section
          .text-h6.text-bold Atenção
        q-card-section
          .text-body1.text-weight-light Após atrair as pessoas até os seus canais (sejam eles on ou offline), você precisa fazer com que elas se interessem pelo que você tem a oferecer. <br/><br/> Conquistar a atenção dos seus clientes em potencial é o próximo caminho para gerar vendas e conversões.
        //- q-card-section
          .row.q-gutter-sm
            img.rounded-borders(src="images/marketing/ok/face-ads.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/google-ads.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/google-seo.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/insta-ads.png" style="width:50px;")

    .col-auto
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('develop-web')")
        q-card-section
          q-icon.change-color(name='bi-coin' size="30px" color="white")
        q-card-section
          .text-h6.text-bold Conversão
        q-card-section
          .text-body1.text-weight-light
            | Agora que você conquistou a atenção do seu público, o próximo passo é convertê-los em clientes. <br/><br/>
            | Para isso, utilizamos diversas estratégias desde a integração da sua força de vendas até a criação de um roteiro de negócios.

            //- | Agora que você tem a atenção de sua audiência, o próximo passo é transforma-la em clientes.  <br/><br/>
            //- | Para isso, utilizamos estratégias que vão desde a consolidação de sua equipe de vendas, até a criação de um script de comercial.
        //- q-card-section
          .row.q-gutter-sm
            img.rounded-borders(src="images/marketing/ok/face-ads.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/google-ads.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/google-seo.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/insta-ads.png" style="width:50px;")

    .col-auto
      q-card.mini-card.shadow-6.cursor-pointer(v-ripple @click="$router.push('develop-web')")
        q-card-section
          q-icon.change-color(name='bi-chat-heart' size="30px" color="white")
        q-card-section
          .text-h6.text-bold Retenção
        q-card-section
          .text-body1.text-weight-light
            | Uma vez convertido, a jornada começa a trazer aquele cliente de volta para comprar, aumentando potencialmente o seu LTV cada vez mais. <br/><br/>
            | Reter clientes e usuários é tão importante quanto fechar novas vendas.
            //- | Após a conversão, começa a jornada para fazer com que este cliente compre novamente
            //- | e com isso é possível ampliar o seu LTV cada vez mais. <br/><br/>
            //- | Reter clientes e usuários é tão importante quanto fechar novas vendas.
        //- q-card-section
          .row.q-gutter-sm
            img.rounded-borders(src="images/marketing/ok/face-ads.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/google-ads.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/google-seo.png" style="width:50px;")
            img.rounded-borders(src="images/marketing/ok/insta-ads.png" style="width:50px;")

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
.mini-card
  width: 320px
  min-height: 500px
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
