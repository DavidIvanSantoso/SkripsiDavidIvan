<template>
  <!-- graph component -->
  <div class="row" style="width: 100%">
    <apexchart
      width="100%"
      height="auto"
      type="bar"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vartitle: 'Title',
      options: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          data: [
            {
              x: 'category A',
              y: 10,
            },
            {
              x: 'category B',
              y: 18,
            },
            {
              x: 'category C',
              y: 13,
            },
            {
              x: 'category C',
              y: 13,
            },
            {
              x: 'category C',
              y: 13,
            },
            {
              x: 'category C',
              y: 13,
            },
            {
              x: 'category C',
              y: 13,
            },
            {
              x: 'category C',
              y: 13,
            },
          ],
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
