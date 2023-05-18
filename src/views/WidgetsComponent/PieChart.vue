<template>
  <!-- graph component -->
  <apexchart
    width="100%"
    height="auto"
    type="donut"
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
      series: [44, 55, 41, 17, 15],
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
