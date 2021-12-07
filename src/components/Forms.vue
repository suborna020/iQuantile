<template>
  <div class="col-sm-12 my-bg pb-5">
    <div class="row">
      <div class="col-sm-12">
        <h2 class="mt-4">Program Design</h2>
        <ProgramDesign />
      </div>
      <div class="col-sm-12">
        <h2 class="mt-4">Outcome Measurement Framework</h2>
        <OutcomeFramework />
      </div>
    </div>
  </div>
</template>

<script>
import ProgramDesign from '@/components/ProgramDesign.vue';
import OutcomeFramework from '@/components/OutcomeFramework.vue';

export default {
  name: 'Forms',
  components: {
    OutcomeFramework,
    ProgramDesign,
  },
};
</script>

<style lang="scss" scoped>
</style>
