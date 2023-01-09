<template lang="pug">
q-page.teste

  ImpactContent

  FeaturesContent

  MiniCards

  DifferentResults

  StepByStep

  FocusOnBusiness

  OurClients

  HowItWorks

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
import StepByStep from 'src/pages/StepByStep.vue';
import FocusOnBusiness from 'src/pages/FocusOnBusiness.vue';
import OurClients from 'src/pages/OurClients.vue';
import HowItWorks from 'src/pages/HowItWorks.vue';
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
    StepByStep,
    FocusOnBusiness,
    OurClients,
    HowItWorks,
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
