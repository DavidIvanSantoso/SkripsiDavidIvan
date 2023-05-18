<template>
  <!-- graph component -->
  <apexchart
    width="100%"
    height="auto"
    type="line"
    :options="options"
    :series="series"
    :stroke="options.stroke.curve"
    :markers="options.markers"
  ></apexchart>
</template>

<script>
export default {
  data() {
    return {
      vartitle: 'Title',
      options: {
        stroke: {
          curve: 'straight',
        },
        markers: {
          size: 1,
        },
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
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
