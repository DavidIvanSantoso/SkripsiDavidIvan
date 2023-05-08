<template>
  <!-- graph component -->
  <apexchart
    width="459"
    type="radialBar"
    :options="options"
    :series="series"
  ></apexchart>
</template>

<script>
export default {
  data() {
    return {
      vartitle: 'Title',
      options: {},
      series: [44],
    }
  },
}
</script>

<style>
.card {
  width: max-content;
  height: max-content;
}
</style>
