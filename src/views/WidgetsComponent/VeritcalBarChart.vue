<template>
  <div class="card mt-3 mx-3">
    <div class="card-header align-items-center d-flex">
      <div class="card-text flex-grow-1 mx-2" :v-model="vartitle">
        {{ vartitle }}
      </div>
      <button class="btn btn-dark d-flex mx-1">
        <i class="bi bi-trash-fill"></i>
      </button>
      <button class="btn btn-dark d-flex p">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
    <div class="card-body align-items-center">
      <!-- graph component -->
      <apexchart
        width="400"
        type="bar"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
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
