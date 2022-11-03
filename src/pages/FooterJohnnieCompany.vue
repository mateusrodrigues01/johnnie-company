<template lang="pug">
div.footerr.text-white.q-pt-xl.q-px-xl.gt-sm
  div.container
    .row
      .col
        .row.items-center
          .col-auto
            img(src="images/johnnie-logo.png", alt="" style="max-width: 75px;")
          .col
            .text-h6 Johnnie Company
            q-item-label.text-body1
              | Tranformando números em dinheiro <br/><br/>

        //- .row.q-mt-xl
          .col-auto.q-mr-md
            q-item-label.text-body1.text-bold Atendimento ao cliente:
            q-item-label.text-body1 - Segunda à Sexta, das 9h às 18h <br/>
            q-item-label.text-body1 - Sábado, das 9h às 15h

        .row.q-mt-xl
          .col-auto
            img.lets-go(src="images/letsgo.jpeg", alt="")

        q-item-label.text-body1.q-mt-xl.text-bold Entre em contato:
        .row.q-mt-md
          .col-auto
            .row
              .text-subtitle1 WhatsApp 1
            .row
              a.remove-decoration-links-btn(href="https://wa.me/55169997855085?text=Olá,%20quero%20saber%20mais%20sobre%20o%20tráfego%20pago%20da%20Johnnie%20Company.%20Obrigado%20e%20fico%20no%20aguardo!" target="_blank")

                q-btn.q-py-md(icon="fab fa-whatsapp" color='white', text-color="green" label='(16) 99785-5085', @click='onClick')
          .col.q-ml-lg
            .row
              .text-subtitle1 WhatsApp 2
            .row
              a.remove-decoration-links-btn(href="https://wa.me/5516996097259?text=Olá,%20quero%20saber%20mais%20sobre%20o%20tráfego%20pago%20da%20Johnnie%20Company.%20Obrigado%20e%20fico%20no%20aguardo!" target="_blank")
                q-btn.q-py-md(icon="fab fa-whatsapp" color='white', text-color="green" label='(16) 99609-7259', @click='onClick')

        .row.q-my-md
          .col-auto
            a.remove-decoration-links(href="https://www.facebook.com/profile.php?id=100078393303513" target="_blank")
              q-icon(name='fab fa-facebook-square' size="sm")

          .col-auto.q-mx-md
            a.remove-decoration-links(href="https://www.instagram.com/pwaconsorcios/" target="_blank")
              q-icon(name='fab fa-instagram' size="sm")

          .col-auto
            a.remove-decoration-links(href="https://www.linkedin.com/company/pwa-cons%C3%B3rcios/" target="_blank")
              q-icon(name='fab fa-linkedin' size="sm")

      .col
        div.mapouter
          div.gmap_canvas
            iframe(
              width="100%" height="450"
              id="gmap_canvas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.5272187967535!2d-48.366298784952406!3d-21.604370185689405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b91fd15ebb5da3%3A0x2af973db7a9b4235!2sR.%20Jos%C3%A9%20Bonif%C3%A1cio%2C%201181%20-%20Centro%2C%20Mat%C3%A3o%20-%20SP%2C%2015990-040!5e0!3m2!1spt-BR!2sbr!4v1665027279244!5m2!1spt-BR!2sbr"

              frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
            )
    q-separator.q-mt-xl(style="background: #ccc")

    .row.justify-center.items-center.q-py-xl
      .col-auto
        .text-body1.text-center © {{currentYear}} Johnnie Company  ·  Todos os direitos reservados ®
//---------------------
//- MOBILE
//---------------------
div.footerr.text-white.q-pa-lg.lt-md
  div.container
    .row
      .col
        .text-h6 Conheça a Johnnie Company
        q-item-label.text-body1.text-weight-light.text-grey-2.q-mt-sm
          | Nossos serviços são pensados com o coração para que você consiga ir além dos seus sonhos.<br/><br/>
          | Venha tomar um café conosco, teremos o prazer de mostrar as melhores condições para seus sonhos se concretizarem!

    .row.justify-center.q-py-md.q-mt-lg
      div.mapouter
        div.gmap_canvas
          iframe(
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.5272187967535!2d-48.366298784952406!3d-21.604370185689405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b91fd15ebb5da3%3A0x2af973db7a9b4235!2sR.%20Jos%C3%A9%20Bonif%C3%A1cio%2C%201181%20-%20Centro%2C%20Mat%C3%A3o%20-%20SP%2C%2015990-040!5e0!3m2!1spt-BR!2sbr!4v1665027279244!5m2!1spt-BR!2sbr"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
          )

    q-item-label.text-body1.text-bold.text-center.q-mt-lg Entre em contato:

    .row.justify-center.q-gutter-sm.q-mt-xs
      .col-auto
        .row
          .text-subtitle1 Telefone
        .row
          a.remove-decoration-links-btn(href="tel:+551620161208")
            q-btn.q-py-md(icon="bi-telephone" color='white', text-color="primary" label='(16)2016-1208', @click='onClick')
      .col-auto
        .row
          .text-subtitle1 WhatsApp
        .row
          a.remove-decoration-links-btn(href="https://api.whatsapp.com/send?phone=5516997041721" target="_blank")
            q-btn.q-py-md(icon="fab fa-whatsapp" color='white', text-color="green" label='(16)99704-1721', @click='onClick')

    .row.justify-center.items-center.q-pt-xl
      .col-auto
        img(src="/images/pwa.png", alt="Logo Johnnie Company" style="max-width: 80px")

    .row.justify-center.q-mb-md.q-pt-sm
      .col-auto
        a.remove-decoration-links(href="https://www.facebook.com/profile.php?id=100078393303513" target="_blank")
          q-icon(name='fab fa-facebook-square' size="sm")

      .col-auto.q-mx-md
        a.remove-decoration-links(href="https://www.instagram.com/pwaconsorcios/" target="_blank")
          q-icon(name='fab fa-instagram' size="sm")
      .col-auto
        a.remove-decoration-links(href="https://www.linkedin.com/company/pwa-cons%C3%B3rcios/" target="_blank")
          q-icon(name='fab fa-linkedin' size="sm")

    .text-body1.text-center © {{currentYear}} Johnnie Company Todos os direitos reservados

.row.lt-md
  .col.bg-primary.q-pa-sm
    img(src="/images/representanteItau.png", alt="Logo Johnnie Company" style="max-width: 180px")

</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },

});

</script>

<style lang="sass" scoped>
.footerr
  background: #18191B

.container
  margin: auto
  padding: 20px, 20px
  @media screen and (max-width: $breakpoint-xs)
    margin: auto
    padding: 0px
    height: 100%

.gmap_canvas
  overflow: hidden
  background: none !important
  height:100%
  max-height: 350px
  @media screen and (max-width: $breakpoint-xs)
    height:100%
    max-height: 300px

.mapouter
  position: relative
  text-align: right
  height:100%
  max-height: 450px
  @media screen and (max-width: $breakpoint-xs)
    height:100%
    max-height: 170px

.remove-decoration-links
  text-decoration: none
  color: $grey-2

.remove-decoration-links:hover
  text-decoration: underline
  cursor: pointer

.remove-decoration-links-btn
  text-decoration: none
  color: $primary

.remove-decoration-links-btn:hover
  cursor: pointer

.lets-go
  max-width: 300px
  border-radius: 20px
</style>
