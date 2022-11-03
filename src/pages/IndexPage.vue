<template lang="pug">
q-page.teste

  ImpactContent

  FeaturesContent

  MiniCards

  DifferentResults

  FocusOnBusiness

  WorldOfPossibilities

  EraJurassic

  FooterJohnnieCompany

</template>

<script>
import { defineComponent } from 'vue';

import ImpactContent from 'src/pages/ImpactContent.vue';
import FeaturesContent from 'src/pages/FeaturesContent.vue';
import MiniCards from 'src/pages/MiniCards.vue';
import DifferentResults from 'src/pages/DifferentResults.vue';
import FocusOnBusiness from 'src/pages/FocusOnBusiness.vue';
import WorldOfPossibilities from 'src/pages/WorldOfPossibilities.vue';
import EraJurassic from 'src/pages/EraJurassic.vue';
import FooterJohnnieCompany from 'src/pages/FooterJohnnieCompany.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    ImpactContent,
    FeaturesContent,
    MiniCards,
    DifferentResults,
    FocusOnBusiness,
    WorldOfPossibilities,
    EraJurassic,
    FooterJohnnieCompany,
  },
});
</script>

<style lang="sass">
.teste
  background-color: $grey-1
</style>
