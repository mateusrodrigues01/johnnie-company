<template lang="pug">
q-layout(view="hHr Lpr lFf" style="max-width: 1440px; margin: auto;")
  q-header(elevated)
    q-toolbar.toolbar-features
      img.img-logo.cursor-pointer(src="/images/johnnie-logo.png" @click="$router.push('/')")

      q-toolbar-title Johnnie Company

      q-btn(
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
      )

  q-drawer(
    v-model="rightDrawerOpen"
    show-if-above
    bordered
    side="right"
    overlay
    behavior="mobile"
    :width="360"
    :breakpoint="500"
    class="drawer-content"
  )
    div.q-pa-lg
      .row.justify-end
        q-btn(
          outline
          round
          dense
          color='primary',
          icon='close',
          @click="rightDrawerOpen = !rightDrawerOpen")

      .row.items-center
        .col-auto
          img(src="/images/johnnie-logo.png" style="max-height: 70px")
        .col
          .text-h6.text-bold.text-grey-9 Johnnie Company

      div.q-pt-lg
        .row
          .text-body1.text-weight-light.text-grey-8
            | Nossos serviços são pensados com o coração para que você consiga ir além dos seus sonhos. <br/><br/>
            | Venha tomar um café conosco, teremos o prazer de mostrar as melhores condições para seus sonhos se concretizarem!

        .row.q-mt-lg
          .col-auto
            q-icon(name='bi-whatsapp' color="grey-8")
          .col.q-ml-md
            a.remove-decoration-links(href="https://wa.me/55169997855085?text=Olá,%20quero%20saber%20mais%20sobre%20o%20tráfego%20pago%20da%20Johnnie%20Company.%20Obrigado%20e%20fico%20no%20aguardo!" target="_blank")
              .text-body2.text-weight-light.text-grey-8 (16) 99785-5085 (Bora chamar no Zap)

        .row.q-mt-sm
          .col-auto
            q-icon(name='bi-whatsapp' color="grey-8")
          .col.q-ml-md
            a.remove-decoration-links(href="https://wa.me/5516996097259?text=Olá,%20quero%20saber%20mais%20sobre%20o%20tráfego%20pago%20da%20Johnnie%20Company.%20Obrigado%20e%20fico%20no%20aguardo!" target="_blank")
              .text-body2.text-weight-light.text-grey-8 (16) 99609-7259 (Preciso disso agora)

        //- .row.q-mt-sm
          .col-auto
            q-icon(name='bi-geo-alt' color="grey-8")
          .col.q-ml-md
            .text-body2.text-weight-light.text-grey-8 Rua José Bonifácio, 1181A <br/> Centro, Matão-SP

        .row.q-mt-sm
          .col-auto
            q-icon(name='bi-clock' color="grey-8")
          .col.q-ml-md
            .text-body2.text-weight-light.text-grey-8 Seg - Sex: 08h - 18h; <br/> Sáb: 08h - 12h;

        q-separator.q-my-lg

        .row
          .text-body2.text-weight-light Siga-nos

        .row.q-mb-md.q-mt-md
          .col-auto
            a.remove-decoration-links(href="https://www.facebook.com/profile.php?id=100078393303513" target="_blank")
              q-icon(name='fab fa-facebook-square' size="sm")

          .col-auto.q-mx-md
            a.remove-decoration-links(href="https://www.instagram.com/pwaconsorcios/" target="_blank")
              q-icon(name='fab fa-instagram' size="sm")

          .col-auto
              a.remove-decoration-links(href="https://www.linkedin.com/company/pwa-cons%C3%B3rcios/" target="_blank")
                q-icon(name='fab fa-linkedin' size="sm")

    .row.q-mt-xl.q-pa-sm.items-center.bg-primary
      .col-auto
        img.q-ml-lg(src="/images/johnnie-logo.png" style="max-height: 60px")
      .col
        .text-body1.text-bold Tranformando números em dinheiro!

  q-page-container
    router-view

</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup() {
    const rightDrawerOpen = ref(false);

    return {
      rightDrawerOpen,
      toggleLeftDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="sass">
.drawer-content
  background: $grey-2

.toolbar-features
  height: 90px
  background: rgb(0, 0, 9)
  transition: all .8s

.img-logo
  max-height: 72px
  @media screen and (max-width: $breakpoint-xs)
    height: 60px

.remove-decoration-links
  text-decoration: none
  color: $grey-9

.remove-decoration-links:hover
  text-decoration: underline
  cursor: pointer

</style>
