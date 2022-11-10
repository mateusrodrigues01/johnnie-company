<template lang="pug">

div.features-content

  .row.items-center(style="padding-top: 200px")
    .col-5(style="padding-left: 150px; margin-right: 100px")
      .text-h4.title.text-bold Agência digital que te
      .text-h4.title.text-bold ajuda ir mais longe
      .text-h6.text-weight-light.title.q-mt-lg Somos uma equipe dinâmica de pessoas <br/>  criativas, inovação e especialista em marketing.
      .row.q-mt-lg
        img(src="images/rocket.png" style="max-width: 250px")

    .col
      img.img-carousel(src="images/notebook.png", alt="")
      q-carousel.carousel(
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        transition-duration="300"
        swipeable
        animated
        control-color="white"
        navigation
        infinite
        :autoplay="7500"
        padding
        arrows
        class="bg-primary text-white shadow-1 rounded-borders"
      )
        q-carousel-slide(name="style").column.no-wrap.flex-center.no-padding
          video(width="582" height="364" controls autoplay)
            source(src="videos/video1.mp4" type="video/mp4")

        q-carousel-slide(name="tv").column.no-wrap.flex-center.no-padding
          video(width="582" height="364" controls autoplay)
            source(src="videos/video1.mp4" type="video/mp4")

        q-carousel-slide(name="layers").column.no-wrap.flex-center.no-padding
          video(width="582" height="364" controls autoplay)
            source(src="videos/video1.mp4" type="video/mp4")

        q-carousel-slide(name="map").column.no-wrap.flex-center.no-padding
          video(width="582" height="364" controls autoplay)
            source(src="videos/video1.mp4" type="video/mp4")

  .text-h3.text-bold.title.text-center(style="padding-top: 150px") Afinal, Marketing sem dados <br/> é como dirigir com os olhos fechados!

</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    return {
      slide: ref('style'),
    };
  },
  methods: {
  },
});

</script>

<style lang="sass" scoped>
.title
  color: $grey-9

.features-content
  min-height: 100px
  max-width: 1440px

.img-carousel
  position: absolute
  max-width: 800px
  margin-top: -50px
  margin-left: -120px

.carousel
  max-width: 582px
  margin-left: -11px
  margin-top: -8px
  max-height: 364px

</style>
